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
    </div>
  );
}
