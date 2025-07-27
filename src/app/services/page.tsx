'use client';

export default function ServicesPage() {
  const services = [
    {
      title: 'Basic Calculation Services',
      description: 'Provide basic mathematical operations including addition, subtraction, multiplication, and division',
      icon: '🧮',
      color: 'blue'
    },
    {
      title: 'Percentage Calculation',
      description: 'Calculate percentage relationships between values, suitable for financial analysis',
      icon: '📊',
      color: 'green'
    },
    {
      title: 'Change Rate Analysis',
      description: 'Analyze data trends and calculate growth or decrease rates',
      icon: '📈',
      color: 'purple'
    },
    {
      title: 'Real-time Calculation',
      description: 'Instant calculation results without waiting, improving work efficiency',
      icon: '⚡',
      color: 'yellow'
    },
    {
      title: 'Multi-language Support',
      description: 'Support for Chinese and English interfaces with internationalized user experience',
      icon: '🌐',
      color: 'indigo'
    },
    {
      title: 'Responsive Design',
      description: 'Adapt to various devices, perfect use on phones, tablets, and computers',
      icon: '📱',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800',
      pink: 'bg-pink-50 border-pink-200 text-pink-800'
    };
    return colorMap[color] || 'bg-gray-50 border-gray-200 text-gray-800';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Our Services
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This is the services page content. We provide various professional services including technical consulting, project development, system maintenance, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`border rounded-lg p-6 ${getColorClasses(service.color)} hover:shadow-lg transition-shadow`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-sm opacity-90">Instant calculation, no waiting</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Accurate & Reliable</h3>
              <p className="text-sm opacity-90">Precise calculation, reliable results</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="text-lg font-semibold mb-2">Simple & Easy</h3>
              <p className="text-sm opacity-90">User-friendly interface, simple operation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 