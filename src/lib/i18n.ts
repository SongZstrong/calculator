export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
    dateCalculate: string;
  };
  calculator: {
    valueA: string;
    valueB: string;
    add: string;
    subtract: string;
    multiply: string;
    divide: string;
    percentage: string;
    percentageChange: string;
    clear: string;
    result: string;
    error: {
      divideByZero: string;
    };
    percentageResult: string;
    increase: string;
    decrease: string;
  };
  pages: {
    about: {
      title: string;
      content: string;
    };
    services: {
      title: string;
      content: string;
    };
    contact: {
      title: string;
      content: string;
    };
  };
}

export const translations: Record<string, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      dateCalculate: 'Date Calculate',
    },
    calculator: {
      valueA: 'Value A',
      valueB: 'Value B',
      add: '+',
      subtract: '-',
      multiply: '*',
      divide: '/',
      percentage: 'Calculate A as percentage of B',
      percentageChange: 'Calculate A relative change to B',
      clear: 'Clear',
      result: 'Result: ',
      error: {
        divideByZero: 'Error: Cannot divide by zero',
      },
      percentageResult: '%',
      increase: 'Increase: ',
      decrease: 'Decrease: ',
    },
    pages: {
      about: {
        title: 'About Us',
        content: 'This is the about us page content. We are a professional team dedicated to providing the best service and experience for our users.',
      },
      services: {
        title: 'Our Services',
        content: 'This is the services page content. We provide various professional services including technical consulting, project development, system maintenance, and more.',
      },
      contact: {
        title: 'Contact Us',
        content: 'This is the contact us page content. If you have any questions or need assistance, please feel free to contact us.',
      },
    },
  },
};

export const getTranslation = (): Translations => {
  return translations['en'];
}; 