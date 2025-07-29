'use client';
import { useState } from 'react';

const blogPosts = [
  {
    title: 'Percent Calculation',
    summary: 'Percentages are everywhere in daily life—discounts, grades, statistics, and more. Calculating a percentage is simple once you know the basic formula.',
    content: (
      <>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">Percentage = (Part &divide; Whole) × 100%</span>
        </div>
        <p className="text-gray-700 mb-4">For example, if you scored 45 points out of a possible 60 on a test, your percentage score would be:</p>
        <div className="bg-green-50 p-4 rounded mb-4">
          <span className="font-mono text-green-800">(45 &divide; 60) × 100% = 75%</span>
        </div>
        <p className="text-gray-700 mb-4">The same formula works for discounts or growth rates. If an item was originally $200 and is now $150, the percentage decrease is:</p>
        <div className="bg-yellow-50 p-4 rounded mb-4">
          <span className="font-mono text-yellow-800">((200 - 150) &divide; 200) × 100% = 25%</span>
        </div>
        <p className="text-gray-700 mb-4">In summary, just identify the &quot;part&quot; and the &quot;whole,&quot; plug them into the formula, and you have your percentage. Whether it’s for sales, grades, or data analysis, the method is always the same.</p>
        <p className="text-gray-600 mt-6 italic">Percentages make numbers easier to understand. Master this simple skill and you’ll find it useful everywhere!</p>
      </>
    ),
  },
  {
    title: 'Date Difference',
    summary: 'Ever wondered exactly how many days are between two dates? Here’s how to quickly figure it out for planning, deadlines, or just curiosity.',
    content: (
      <>
        <p className="text-gray-700 mb-4">The simplest way is to subtract the start date from the end date. For example, if your trip starts on March 1 and ends on March 15, you’ve got 14 days in between. Most online calculators and spreadsheet tools can do this for you—just enter your two dates, and you’ll get the answer instantly.</p>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">Date Difference = End Date - Start Date</span>
        </div>
        <p className="text-gray-700 mb-4">One thing to keep in mind: some tools include both the start and end date, while others only count the days in between. So, if you need to be precise, double-check how your tool handles this.</p>
        <p className="text-gray-700 mb-4">This method works for any two dates—whether they’re in the same month, across different years, or even spanning a leap year. It’s a handy trick for planning, scheduling, or just satisfying your curiosity about time.</p>
        <p className="text-gray-600 mt-6 italic">Next time you’re counting down to an event or looking back on a memory, you’ll know exactly how to find the answer!</p>
      </>
    ),
  },
  {
    title: 'Average Calculation',
    summary: 'Averages help you find the “middle” value in a set of numbers. Here’s how to quickly calculate the mean for grades, expenses, or any data.',
    content: (
      <>
        <p className="text-gray-700 mb-4">The average, or mean, is found by adding up all the numbers in your set and then dividing by how many numbers there are. Here’s the basic formula:</p>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">Average = (Sum of all numbers) / (How many numbers)</span>
        </div>
        <p className="text-gray-700 mb-4">For example, let’s say you have the numbers 10, 15, and 25. Add them up (10 + 15 + 25 = 50), then divide by 3 (since there are three numbers). The average is 16.67.</p>
        <p className="text-gray-700 mb-4">This method works for any group of numbers—test scores, daily temperatures, or even the number of steps you walk each day. Just remember: add everything together, then divide by the count.</p>
        <p className="text-gray-600 mt-6 italic">Next time you want to get a sense of the “middle” value in a set, try calculating the average. It’s quick, easy, and gives you a clear picture of your data!</p>
      </>
    ),
  },
  {
    title: 'BMI Calculation',
    summary: 'BMI is a quick way to check if your weight is healthy for your height. Learn how to calculate your Body Mass Index and what it means.',
    content: (
      <>
        <p className="text-gray-700 mb-4">To find your BMI, you just need two things: your weight (in kilograms) and your height (in meters). Here’s the formula:</p>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">BMI = Weight (kg) / [Height (m) × Height (m)]</span>
        </div>
        <p className="text-gray-700 mb-4">For example, if you weigh 70 kg and are 1.75 meters tall, your BMI would be:</p>
        <div className="bg-green-50 p-4 rounded mb-4">
          <span className="font-mono text-green-800">BMI = 70 / (1.75 × 1.75) = 22.86</span>
        </div>
        <p className="text-gray-700 mb-4">A BMI between 18.5 and 24.9 is considered healthy for most adults. If your number is lower or higher, it might be a good idea to talk to a healthcare professional. Remember, BMI is just one tool—it doesn’t tell the whole story about your health, but it’s a good place to start.</p>
        <p className="text-gray-600 mt-6 italic">Next time you’re curious about your health, try calculating your BMI. It’s quick, easy, and can help you set goals for a healthier lifestyle!</p>
      </>
    ),
  },
  {
    title: 'Discount Calculation',
    summary: 'Discounts make shopping more fun! Here’s how to quickly figure out how much you’ll save and what you’ll actually pay.',
    content: (
      <>
        <p className="text-gray-700 mb-4">The basic idea is simple: multiply the original price by the discount percentage, then subtract that amount from the original price. Here’s the formula:</p>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">Discount Amount = Original Price × (Discount % / 100)</span><br/>
          <span className="font-mono text-blue-800">Sale Price = Original Price - Discount Amount</span>
        </div>
        <p className="text-gray-700 mb-4">For example, if a $100 jacket is 30% off, multiply $100 by 0.3 (that’s 30%), which gives you $30. Subtract that from the original price, and you’ll pay $70.</p>
        <p className="text-gray-700 mb-4">This method works for any discount—big or small. Just remember to turn the percentage into a decimal before multiplying. It’s a quick way to see how much you’re really saving.</p>
        <p className="text-gray-600 mt-6 italic">Next time you’re out shopping or browsing online sales, try calculating the discount yourself. It’s a great way to shop smarter and keep your budget on track!</p>
      </>
    ),
  },
  {
    title: 'Loan Calculation',
    summary: 'Loans can seem complicated, but calculating your monthly payment is easier than you think. Here’s a simple way to estimate your costs.',
    content: (
      <>
        <p className="text-gray-700 mb-4">The basics are simple: you borrow a certain amount (the principal), pay interest on it, and repay it over time. The most common type is a fixed monthly payment loan, like a car loan or a mortgage. Here’s a straightforward way to estimate your monthly payment:</p>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">Monthly Payment = [P × r × (1 + r)<sup>n</sup>] / [(1 + r)<sup>n</sup> - 1]</span><br/>
          <span className="text-gray-600 text-sm">P = loan amount, r = monthly interest rate, n = total number of payments</span>
        </div>
        <p className="text-gray-700 mb-4">For example, if you borrow $10,000 at a 5% annual interest rate for 3 years (36 months), your monthly interest rate is 0.05/12. Plug the numbers into the formula, and you’ll get your monthly payment.</p>
        <p className="text-gray-700 mb-4">Many online calculators can do the math for you, but it’s good to know what’s happening behind the scenes. Remember, the longer the loan or the higher the interest rate, the more you’ll pay in total.</p>
        <p className="text-gray-600 mt-6 italic">Next time you’re considering a loan, try running the numbers yourself. It’s a smart way to stay in control of your finances and make informed decisions!</p>
      </>
    ),
  },
];

export default function BlogPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Blog
        </h1>
        <div className="space-y-6">
          {blogPosts.map((post, idx) => (
            <article key={post.title} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2 cursor-pointer" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                {post.title}
              </h2>
              <p className="text-black mb-2">{post.summary}</p>
              {openIndex === idx && (
                <div className="mt-4 animate-fade-in text-black">
                  {post.content}
                </div>
              )}
              <button
                className="mt-4 text-blue-600 hover:underline text-sm"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {openIndex === idx ? 'Hide Full Article' : 'Read More'}
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 