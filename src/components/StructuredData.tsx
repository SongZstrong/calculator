export default function StructuredData() {
  // 使用静态数据，避免水合错误
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Calculate Tools",
    "url": "https://calculate-tools.com",
    "description": "Free online calculator with basic operations, percentage calculations, and change rate calculations",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://calculate-tools.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calculate Tools",
      "url": "https://calculate-tools.com"
    },
    "sameAs": [
      "https://calculate-tools.com"
    ]
  });

  const calculatorToolData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Multi-Function Calculator",
    "applicationCategory": "CalculatorApplication",
    "operatingSystem": "Web Browser",
    "url": "https://calculate-tools.com",
    "description": "Free online calculator with basic operations, percentage calculations, and change rate calculations",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Basic arithmetic operations",
      "Percentage calculations",
      "Change rate calculations",
      "Real-time results",
      "Mobile responsive"
    ]
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: structuredData
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: calculatorToolData
        }}
      />
    </>
  );
}
