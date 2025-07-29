"use client";

import { useState } from "react";

function getDuration(start: Date, end: Date) {
  const duration = {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    weekdays: 0,
    weekends: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  // Calculate total seconds
  const diffMs = end.getTime() - start.getTime();
  if (diffMs < 0) return duration;
  const diffSec = Math.floor(diffMs / 1000);
  duration.seconds = diffSec;
  duration.minutes = Math.floor(diffSec / 60);
  duration.hours = Math.floor(diffSec / 3600);
  duration.days = Math.floor(diffSec / 86400);
  duration.weeks = Math.floor(diffSec / (86400 * 7));

  // Years and months (approximate)
  const startY = start.getFullYear(), startM = start.getMonth();
  const endY = end.getFullYear(), endM = end.getMonth();
  duration.years = endY - startY - (endM < startM || (endM === startM && end.getDate() < start.getDate()) ? 1 : 0);
  duration.months = (endY - startY) * 12 + (endM - startM) - (end.getDate() < start.getDate() ? 1 : 0);

  // Weekdays and weekends
  let weekdays = 0, weekends = 0;
  const d = new Date(start);
  while (d <= end) {
    if (d.getDay() === 0 || d.getDay() === 6) weekends++;
    else weekdays++;
    d.setDate(d.getDate() + 1);
  }
  duration.weekdays = weekdays;
  duration.weekends = weekends;

  return duration;
}

function getPreciseDiff(start: Date, end: Date): PreciseDiff {
  // Stepwise difference: years, months, days, hours, minutes, seconds
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  let hours = end.getHours() - start.getHours();
  let minutes = end.getMinutes() - start.getMinutes();
  let seconds = end.getSeconds() - start.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    // Get days in previous month
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }
  return { years, months, days, hours, minutes, seconds };
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

const CURRENT_YEAR = new Date().getFullYear();
const YEAR_RANGE = Array.from({ length: 101 }, (_, i) => CURRENT_YEAR - 50 + i); // 50 years before and after
const MONTHS = Array.from({ length: 12 }, (_, i) => i);
const HOURS = Array.from({ length: 24 }, (_, i) => i);
const MINUTES = Array.from({ length: 60 }, (_, i) => i);
const SECONDS = Array.from({ length: 60 }, (_, i) => i);

type Duration = {
  years: number;
  months: number;
  weeks: number;
  days: number;
  weekdays: number;
  weekends: number;
  hours: number;
  minutes: number;
  seconds: number;
  precise?: PreciseDiff;
};

type PreciseDiff = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function DateCalculatePage() {
  // Start and end time states
  const [startYear, setStartYear] = useState(CURRENT_YEAR);
  const [startMonth, setStartMonth] = useState(0);
  const [startDay, setStartDay] = useState(1);
  const [startHour, setStartHour] = useState(0);
  const [startMinute, setStartMinute] = useState(0);
  const [startSecond, setStartSecond] = useState(0);
  const [endYear, setEndYear] = useState(CURRENT_YEAR);
  const [endMonth, setEndMonth] = useState(0);
  const [endDay, setEndDay] = useState(1);
  const [endHour, setEndHour] = useState(0);
  const [endMinute, setEndMinute] = useState(0);
  const [endSecond, setEndSecond] = useState(0);
  const [result, setResult] = useState<Duration | null>(null);
  const [error, setError] = useState("");

  // Update days in month when year or month changes
  const startDays = getDaysInMonth(startYear, startMonth);
  const endDays = getDaysInMonth(endYear, endMonth);

  const handleCalculate = () => {
    setError("");
    setResult(null);
    const startDate = new Date(startYear, startMonth, startDay, startHour, startMinute, startSecond);
    const endDate = new Date(endYear, endMonth, endDay, endHour, endMinute, endSecond);
    if (endDate < startDate) {
      setError("End date/time must be after start date/time.");
      return;
    }
    setResult({
      ...getDuration(startDate, endDate),
      precise: getPreciseDiff(startDate, endDate)
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-20 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Date Calculator</h1>
      <p className="mb-2 text-gray-600">Use this date calculator between two dates to easily calculate how many years, months, weeks, days, hours, minutes, or seconds there are between any given two dates. You can also specify an exact time (yyyy-mm-dd hh:mm) for finer time differences.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-2 font-medium">Start Date & Time</label>
          <div className="flex flex-wrap gap-2 items-end">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Year</span>
              <select className="border rounded px-2 py-1" value={startYear} onChange={e => setStartYear(Number(e.target.value))}>{YEAR_RANGE.map(y => <option key={y} value={y}>{y}</option>)}</select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Month</span>
              <select className="border rounded px-2 py-1" value={startMonth} onChange={e => setStartMonth(Number(e.target.value))}>{MONTHS.map(m => <option key={m} value={m}>{m+1}</option>)}</select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Day</span>
              <select className="border rounded px-2 py-1" value={startDay} onChange={e => setStartDay(Number(e.target.value))}>{Array.from({length: startDays}, (_, i) => i+1).map(d => <option key={d} value={d}>{d}</option>)}</select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Hour</span>
              <select className="border rounded px-2 py-1" value={startHour} onChange={e => setStartHour(Number(e.target.value))}>{HOURS.map(h => <option key={h} value={h}>{h.toString().padStart(2, '0')}</option>)}</select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Minute</span>
              <select className="border rounded px-2 py-1" value={startMinute} onChange={e => setStartMinute(Number(e.target.value))}>{MINUTES.map(m => <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>)}</select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Second</span>
              <select className="border rounded px-2 py-1" value={startSecond} onChange={e => setStartSecond(Number(e.target.value))}>{SECONDS.map(s => <option key={s} value={s}>{s.toString().padStart(2, '0')}</option>)}</select>
            </div>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-medium">End Date & Time</label>
          <div className="flex flex-wrap gap-2 items-end">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Year</span>
              <select className="border rounded px-2 py-1" value={endYear} onChange={e => setEndYear(Number(e.target.value))}>{YEAR_RANGE.map(y => <option key={y} value={y}>{y}</option>)}</select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Month</span>
              <select className="border rounded px-2 py-1" value={endMonth} onChange={e => setEndMonth(Number(e.target.value))}>{MONTHS.map(m => <option key={m} value={m}>{m+1}</option>)}</select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Day</span>
              <select className="border rounded px-2 py-1" value={endDay} onChange={e => setEndDay(Number(e.target.value))}>{Array.from({length: endDays}, (_, i) => i+1).map(d => <option key={d} value={d}>{d}</option>)}</select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Hour</span>
              <select className="border rounded px-2 py-1" value={endHour} onChange={e => setEndHour(Number(e.target.value))}>{HOURS.map(h => <option key={h} value={h}>{h.toString().padStart(2, '0')}</option>)}</select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Minute</span>
              <select className="border rounded px-2 py-1" value={endMinute} onChange={e => setEndMinute(Number(e.target.value))}>{MINUTES.map(m => <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>)}</select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Second</span>
              <select className="border rounded px-2 py-1" value={endSecond} onChange={e => setEndSecond(Number(e.target.value))}>{SECONDS.map(s => <option key={s} value={s}>{s.toString().padStart(2, '0')}</option>)}</select>
            </div>
          </div>
        </div>
      </div>
      <button
        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors mb-4"
        onClick={handleCalculate}
      >
        Calculate
      </button>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {result && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Calculation results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            <div>Duration in full years: <span className="font-mono">{result.years}</span></div>
            <div>Duration in full months: <span className="font-mono">{result.months}</span></div>
            <div>Duration in full weeks: <span className="font-mono">{result.weeks}</span></div>
            <div>Duration in full days: <span className="font-mono">{result.days}</span></div>
            <div>Duration in weekdays: <span className="font-mono">{result.weekdays}</span></div>
            <div>Duration in weekends: <span className="font-mono">{result.weekends}</span></div>
            <div>Duration in full hours: <span className="font-mono">{result.hours}</span></div>
            <div>Duration in full minutes: <span className="font-mono">{result.minutes.toLocaleString()}</span></div>
            <div>Duration in seconds: <span className="font-mono">{result.seconds.toLocaleString()}</span></div>
          </div>
          {/* Output box for formatted difference */}
          <div className="bg-gray-100 border rounded p-4 text-lg font-mono">
            {formatPreciseDiffOutput(result.precise)}
          </div>
        </div>
      )}
      {/* --- Date Calculation Tutorial --- */}
      <div className="mt-16 max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Calculate Date Differences</h2>
          <p className="text-gray-700 mb-4">
            Calculating the difference between two dates is useful for planning, deadlines, and tracking time. The basic idea is to subtract the start date from the end date. Most calculators (including the one above) will do this for you automatically.
          </p>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <span className="font-mono text-blue-800">Date Difference = End Date - Start Date</span>
          </div>
          <p className="text-gray-700 mb-4">
            For example, if your project starts on March 1 and ends on March 15, the difference is 14 days. You can also calculate the difference in months, years, or even hours and minutes.
          </p>
          <p className="text-gray-700 mb-4">
            To use the calculator above, select your start and end dates and times, then click Calculate. The results will show the difference in years, months, weeks, days, and more.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">How do I calculate the number of days between two dates?</h3>
              <p className="text-gray-600">Simply enter the start and end dates, and the calculator will show you the total days in between.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Can I include the end date in the calculation?</h3>
              <p className="text-gray-600">Some tools include both the start and end date, while others only count the days in between. Check the result details to see which method is used.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Does this calculator handle leap years?</h3>
              <p className="text-gray-600">Yes, leap years are automatically considered when calculating the difference between dates.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Can I calculate the difference in months or years?</h3>
              <p className="text-gray-600">Absolutely! The results will show the difference in years, months, weeks, days, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatPreciseDiffOutput(diff: PreciseDiff | undefined) {
  if (!diff) return '';
  const { years, months, days, hours, minutes, seconds } = diff;
  const parts = [];
  if (years) parts.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months) parts.push(`${months} month${months > 1 ? 's' : ''}`);
  if (days) parts.push(`${days} day${days > 1 ? 's' : ''}`);
  if (hours) parts.push(`${hours} hour${hours > 1 ? 's' : ''}`);
  if (minutes) parts.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
  if (seconds) parts.push(`${seconds} second${seconds > 1 ? 's' : ''}`);
  if (parts.length === 0) return '0 second';
  return parts.join(' + ');
} 