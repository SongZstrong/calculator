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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Get Started with the Calculator</h2>
          <p className="text-gray-700 mb-4">
            Our calculator is designed for everyone. Whether you’re shopping, checking your grades, or planning a budget, just enter your numbers, pick an operation, and see the result instantly. For example, to find out what percentage 45 is of 60 (like a test score), enter 45 and 60, select “Percent Calculation,” and you’ll get 75%.
          </p>
          <p className="text-gray-700 mb-4">
            Try using the calculator for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Shopping discounts (e.g., what’s 30% off $120?)</li>
            <li>Comparing grades or scores</li>
            <li>Splitting bills or planning expenses</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">How do I get started?</h3>
              <p className="text-gray-600">Just enter your numbers, choose the operation, and click Calculate. The result appears instantly below.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Can I use this for both simple and advanced math?</h3>
              <p className="text-gray-600">Yes! The calculator supports basic operations, percentages, and change rates for a variety of needs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Is my data saved?</h3>
              <p className="text-gray-600">No, all calculations are done locally in your browser. Nothing is stored or shared.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">What if I enter a wrong number?</h3>
              <p className="text-gray-600">You can clear the fields anytime and start over. The calculator will also warn you if your input isn’t valid.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
