import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Multi-Function Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This is a powerful online calculation tool that supports basic operations, percentage calculations, and change rate calculations.
          Simple to use, fast and accurate, meeting all your calculation needs.
        </p>
      </div>
      
      <Calculator />
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Basic Operations</h3>
            <p className="text-gray-600">Support for addition, subtraction, multiplication, and division</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-green-600 mb-2">Percentage Calculation</h3>
            <p className="text-gray-600">Calculate the percentage of one value relative to another</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Change Rate Calculation</h3>
            <p className="text-gray-600">Calculate the increase or decrease rate between two values</p>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Calculate Percentages</h2>
          <p className="text-gray-700 mb-4">
            Calculating percentages is a useful skill for shopping, grades, and everyday math. The basic formula is:
          </p>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <span className="font-mono text-blue-800">Percentage = (Part / Whole) × 100%</span>
          </div>
          <p className="text-gray-700 mb-4">
            For example, if you scored 45 out of 60 on a test, your percentage is (45 / 60) × 100% = 75%.
          </p>
          <p className="text-gray-700 mb-4">
            To use the calculator above, enter the numbers you want to compare, select the percentage operation, and get your result instantly.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">How do I calculate a percentage?</h3>
              <p className="text-gray-600">Divide the part by the whole, then multiply by 100. For example, (20 / 80) × 100% = 25%.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Can I use this calculator for discounts?</h3>
              <p className="text-gray-600">Yes! Enter the original and discounted prices to find the percentage off or the final price after discount.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Is there a limit to the numbers I can enter?</h3>
              <p className="text-gray-600">No, you can enter any numbers you need. The calculator supports both small and large values.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">What if I want to calculate the percentage change?</h3>
              <p className="text-gray-600">Use the change rate calculation feature to find the increase or decrease between two values as a percentage.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
