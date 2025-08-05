'use client';
import { useState } from 'react';
import Image from 'next/image';

const blogPosts = [
  {
    title: 'The Origins of Addition: Why Only Like Can Be Added',
    summary: 'Discover the fascinating history behind addition and the fundamental rule that only similar things can be combined...',
    image: '/images/blog/addition-origins.jpg',
    content: (
      <>
        <p className="text-gray-700 mb-4">Imagine trying to add apples and oranges. Sounds simple, right? But what if someone asked you to add 3 apples plus 2 oranges? You&apos;d probably say, &quot;That&apos;s 5 fruits.&quot; This everyday example reveals one of mathematics&apos; most fundamental principles: only like things can be added together.</p>
        <p className="text-gray-700 mb-4">The concept of addition dates back to ancient civilizations. Early humans needed to count their livestock, measure grain, and track time. They quickly discovered that you can&apos;t add sheep to days or combine water with stones. This practical limitation became a mathematical rule.</p>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">The Rule: Only quantities with the same units can be added</span>
        </div>
        <p className="text-gray-700 mb-4">Consider these examples:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>3 apples + 2 apples = 5 apples ✓</li>
          <li>5 meters + 3 meters = 8 meters ✓</li>
          <li>2 hours + 4 hours = 6 hours ✓</li>
          <li>3 apples + 2 oranges = 5 fruits (converted to common unit) ✓</li>
        </ul>
        <p className="text-gray-700 mb-4">But what about: 3 apples + 2 meters? That&apos;s meaningless because apples and meters measure completely different things. This principle applies everywhere—from simple counting to complex physics equations.</p>
        <p className="text-gray-700 mb-4">In modern mathematics, this rule is formalized through the concept of units and dimensions. Engineers, scientists, and even cooks rely on this principle daily. When you&apos;re following a recipe and need to double the ingredients, you&apos;re applying this same rule—you can add cups of flour to cups of flour, but not cups of flour to teaspoons of salt.</p>
        <p className="text-gray-600 mt-6 italic">Next time you&apos;re doing any calculation, remember: only like can be added. It&apos;s not just a mathematical rule—it&apos;s a principle that helps us make sense of the world around us.</p>
      </>
    ),
  },
  {
    title: 'The Meaning Behind Percentages: More Than Just Numbers',
    summary: 'Explore the deeper significance of percentages in our daily lives, from business decisions to personal finance. Discover why this simple concept has become one of humanity&apos;s most powerful tools.',
    image: '/images/blog/percentage-meaning.jpg',
    content: (
      <>
        <p className="text-gray-700 mb-4">Percentages are everywhere—in your bank statements, weather forecasts, and even your favorite sports statistics. But have you ever stopped to think about what they really mean? A percentage isn&apos;t just a number; it&apos;s a way of understanding relationships and making comparisons.</p>
        <p className="text-gray-700 mb-4">The word &quot;percent&quot; comes from the Latin &quot;per centum,&quot; meaning &quot;by the hundred.&quot; This simple idea—expressing parts of a whole out of 100—has revolutionized how we communicate information. Why 100? Because it&apos;s easy to understand. If someone says &quot;75%,&quot; you immediately know they mean three-quarters.</p>
        <div className="bg-green-50 p-4 rounded mb-4">
          <span className="font-mono text-green-800">Percentage = (Part ÷ Whole) × 100</span>
        </div>
        <p className="text-gray-700 mb-4">In business, percentages tell stories. A 15% increase in sales isn&apos;t just a number—it represents growth, success, and momentum. A 5% discount might seem small, but it could mean the difference between making a sale or losing a customer.</p>
        <p className="text-gray-700 mb-4">In personal finance, percentages shape your future. A 2% annual interest rate on your savings might seem tiny, but over 20 years, it can double your money. A 15% credit card interest rate can quickly turn a small purchase into a major debt.</p>
        <p className="text-gray-700 mb-4">In health and fitness, percentages provide context. Losing 5% of your body weight might not sound impressive, but it can significantly improve your health markers. A 90% attendance rate at the gym might seem good, but that missing 10% could be the difference between reaching your goals or falling short.</p>
        <p className="text-gray-700 mb-4">The power of percentages lies in their ability to make complex information simple and comparable. Whether you&apos;re comparing investment returns, evaluating job performance, or understanding medical test results, percentages give you a common language for making decisions.</p>
        <p className="text-gray-600 mt-6 italic">Remember: percentages aren&apos;t just numbers—they&apos;re tools for understanding the world. Master them, and you&apos;ll find yourself making better decisions in every area of your life.</p>
      </>
    ),
  },
    // ... (rest of the blogPosts array is omitted for brevity, but remains unchanged)
    {
    title: 'Health Calculations: The Numbers That Matter Most',
    summary: 'Discover the key health metrics that doctors, fitness professionals, and health-conscious individuals use to monitor wellness. Learn what these numbers mean and how to calculate them.',
    image: '/images/blog/health-calculations.jpg',
    content: (
      <>
        <p className="text-gray-700 mb-4">Your health is the most important investment you&apos;ll ever make. But how do you measure something as complex as wellness? The answer lies in a few key calculations that have become the gold standard for health assessment.</p>
        <p className="text-gray-700 mb-4">Let&apos;s start with the most familiar: Body Mass Index (BMI). This simple calculation uses your height and weight to estimate body fat percentage. While not perfect, it&apos;s a quick way to assess if you&apos;re in a healthy weight range.</p>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">BMI = Weight (kg) ÷ Height (m)²</span>
        </div>
        <p className="text-gray-700 mb-4">But health goes far beyond weight. Body Fat Percentage is often more revealing than BMI. A muscular athlete might have a high BMI but low body fat, while someone with a normal BMI might carry dangerous visceral fat around their organs.</p>
        <p className="text-gray-700 mb-4">Heart Rate Variability (HRV) measures the time between heartbeats. Higher variability generally indicates better cardiovascular health and stress resilience. Many fitness trackers now include this metric, making it easier than ever to monitor.</p>
        <p className="text-gray-700 mb-4">Basal Metabolic Rate (BMR) tells you how many calories your body burns at rest. This is crucial for weight management—know your BMR, and you can calculate your daily calorie needs more accurately.</p>
        <div className="bg-yellow-50 p-4 rounded mb-4">
          <span className="font-mono text-yellow-800">BMR (Men) = 88.362 + (13.397 × weight) + (4.799 × height) - (5.677 × age)</span><br/>
          <span className="font-mono text-yellow-800">BMR (Women) = 447.593 + (9.247 × weight) + (3.098 × height) - (4.330 × age)</span>
        </div>
        <p className="text-gray-700 mb-4">Waist-to-Hip Ratio is another important metric. Research shows that where you carry fat matters more than how much you weigh. A ratio above 0.85 for women or 0.90 for men indicates increased health risks.</p>
        <p className="text-gray-700 mb-4">Blood pressure, cholesterol ratios, and blood sugar levels are also crucial health calculations. These numbers, when tracked over time, provide a comprehensive picture of your cardiovascular and metabolic health.</p>
        <p className="text-gray-700 mb-4">The key is consistency. Track these numbers regularly, understand what they mean, and use them to guide your health decisions. Remember, these are tools, not judgments—they&apos;re meant to help you make informed choices about your wellness journey.</p>
        <p className="text-gray-600 mt-6 italic">Your health numbers tell a story. Learn to read them, and you&apos;ll have the power to write a healthier future for yourself.</p>
      </>
    ),
  },
  {
    title: 'Percent Calculation',
    summary: 'Percentages are everywhere in daily life—discounts, grades, statistics, and more. Calculating a percentage is simple once you know the basic formula.',
    image: '/images/blog/percentage-meaning.jpg', // Reusing an image
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
        <p className="text-gray-700 mb-4">In summary, just identify the &quot;part&quot; and the &quot;whole,&quot; plug them into the formula, and you have your percentage. Whether it&apos;s for sales, grades, or data analysis, the method is always the same.</p>
        <p className="text-gray-600 mt-6 italic">Percentages make numbers easier to understand. Master this simple skill and you&apos;ll find it useful everywhere!</p>
      </>
    ),
  },
  {
    title: 'Date Difference',
    summary: 'Ever wondered exactly how many days are between two dates? Here&apos;s how to quickly figure it out for planning, deadlines, or just curiosity.',
    image: '/images/blog/date-difference.jpg',
    content: (
      <>
        <p className="text-gray-700 mb-4">The simplest way is to subtract the start date from the end date. For example, if your trip starts on March 1 and ends on March 15, you&apos;ve got 14 days in between. Most online calculators and spreadsheet tools can do this for you—just enter your two dates, and you&apos;ll get the answer instantly.</p>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">Date Difference = End Date - Start Date</span>
        </div>
        <p className="text-gray-700 mb-4">One thing to keep in mind: some tools include both the start and end date, while others only count the days in between. So, if you need to be precise, double-check how your tool handles this.</p>
        <p className="text-gray-700 mb-4">This method works for any two dates—whether they&apos;re in the same month, across different years, or even spanning a leap year. It&apos;s a handy trick for planning, scheduling, or just satisfying your curiosity about time.</p>
        <p className="text-gray-600 mt-6 italic">Next time you&apos;re counting down to an event or looking back on a memory, you&apos;ll know exactly how to find the answer!</p>
      </>
    ),
  },
  {
    title: 'Average Calculation',
    summary: 'Averages help you find the &quot;middle&quot; value in a set of numbers. Here&apos;s how to quickly calculate the mean for grades, expenses, or any data.',
    image: '/images/blog/average-calculation.jpg',
    content: (
      <>
        <p className="text-gray-700 mb-4">The average, or mean, is found by adding up all the numbers in your set and then dividing by how many numbers there are. Here&apos;s the basic formula:</p>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">Average = (Sum of all numbers) / (How many numbers)</span>
        </div>
        <p className="text-gray-700 mb-4">For example, let&apos;s say you have the numbers 10, 15, and 25. Add them up (10 + 15 + 25 = 50), then divide by 3 (since there are three numbers). The average is 16.67.</p>
        <p className="text-gray-700 mb-4">This method works for any group of numbers—test scores, daily temperatures, or even the number of steps you walk each day. Just remember: add everything together, then divide by the count.</p>
        <p className="text-gray-600 mt-6 italic">Next time you want to get a sense of the &quot;middle&quot; value in a set, try calculating the average. It&apos;s quick, easy, and gives you a clear picture of your data!</p>
      </>
    ),
  },
  {
    title: 'BMI Calculation',
    summary: 'BMI is a quick way to check if your weight is healthy for your height. Learn how to calculate your Body Mass Index and what it means.',
    image: '/images/blog/bmi-calculation.jpg',
    content: (
      <>
        <p className="text-gray-700 mb-4">To find your BMI, you just need two things: your weight (in kilograms) and your height (in meters). Here&apos;s the formula:</p>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">BMI = Weight (kg) / [Height (m) × Height (m)]</span>
        </div>
        <p className="text-gray-700 mb-4">For example, if you weigh 70 kg and are 1.75 meters tall, your BMI would be:</p>
        <div className="bg-green-50 p-4 rounded mb-4">
          <span className="font-mono text-green-800">BMI = 70 / (1.75 × 1.75) = 22.86</span>
        </div>
        <p className="text-gray-700 mb-4">A BMI between 18.5 and 24.9 is considered healthy for most adults. If your number is lower or higher, it might be a good idea to talk to a healthcare professional. Remember, BMI is just one tool—it doesn&apos;t tell the whole story about your health, but it&apos;s a good place to start.</p>
        <p className="text-gray-600 mt-6 italic">Next time you&apos;re curious about your health, try calculating your BMI. It&apos;s quick, easy, and can help you set goals for a healthier lifestyle!</p>
      </>
    ),
  },
  {
    title: 'Discount Calculation',
    summary: 'Discounts make shopping more fun! Here&apos;s how to quickly figure out how much you&apos;ll save and what you&apos;ll actually pay.',
    image: '/images/blog/discount-calculation.jpg',
    content: (
      <>
        <p className="text-gray-700 mb-4">The basic idea is simple: multiply the original price by the discount percentage, then subtract that amount from the original price. Here&apos;s the formula:</p>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">Discount Amount = Original Price × (Discount % / 100)</span><br/>
          <span className="font-mono text-blue-800">Sale Price = Original Price - Discount Amount</span>
        </div>
        <p className="text-gray-700 mb-4">For example, if a $100 jacket is 30% off, multiply $100 by 0.3 (that&apos;s 30%), which gives you $30. Subtract that from the original price, and you&apos;ll pay $70.</p>
        <p className="text-gray-700 mb-4">This method works for any discount—big or small. Just remember to turn the percentage into a decimal before multiplying. It&apos;s a quick way to see how much you&apos;re really saving.</p>
        <p className="text-gray-600 mt-6 italic">Next time you&apos;re out shopping or Browse online sales, try calculating the discount yourself. It&apos;s a great way to shop smarter and keep your budget on track!</p>
      </>
    ),
  },
  {
    title: 'Loan Calculation',
    summary: 'Loans can seem complicated, but calculating your monthly payment is easier than you think. Here&apos;s a simple way to estimate your costs.',
    image: '/images/blog/loan-calculation.jpg',
    content: (
      <>
        <p className="text-gray-700 mb-4">The basics are simple: you borrow a certain amount (the principal), pay interest on it, and repay it over time. The most common type is a fixed monthly payment loan, like a car loan or a mortgage. Here&apos;s a straightforward way to estimate your monthly payment:</p>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <span className="font-mono text-blue-800">Monthly Payment = [P × r × (1 + r)<sup>n</sup>] / [(1 + r)<sup>n</sup> - 1]</span><br/>
          <span className="text-gray-600 text-sm">P = loan amount, r = monthly interest rate, n = total number of payments</span>
        </div>
        <p className="text-gray-700 mb-4">For example, if you borrow $10,000 at a 5% annual interest rate for 3 years (36 months), your monthly interest rate is 0.05/12. Plug the numbers into the formula, and you&apos;ll get your monthly payment.</p>
        <p className="text-gray-700 mb-4">Many online calculators can do the math for you, but it&apos;s good to know what&apos;s happening behind the scenes. Remember, the longer the loan or the higher the interest rate, the more you&apos;ll pay in total.</p>
        <p className="text-gray-600 mt-6 italic">Next time you&apos;re considering a loan, try running the numbers yourself. It&apos;s a smart way to stay in control of your finances and make informed decisions!</p>
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
        <div className="space-y-8">
          {blogPosts.map((post, idx) => (
            <article key={post.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* --- 1. Image Container (Now only contains the image) --- */}
              <div className="relative h-64 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 2}
                />
              </div>
              
              {/* --- 2. Content Container (The white box below the image) --- */}
              <div className="p-6">
                {/* --- Text moved here --- */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.summary}
                </p>
                
                {/* Collapsible content */}
                {openIndex === idx && (
                  <div className="mt-4 animate-fade-in text-black">
                    {post.content}
                  </div>
                )}

                {/* "Read More" button */}
                <button
                  className="mt-4 text-blue-600 hover:underline text-sm font-medium"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  {openIndex === idx ? 'Hide Full Article' : 'Read More'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}