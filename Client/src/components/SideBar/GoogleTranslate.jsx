import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Load the Google Translate script dynamically
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    };

    // Initialize the Google Translate widget
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    // Add the Google Translate script after the component mounts
    addGoogleTranslateScript();
  }, []);

  return (
    <div className="custom-translate-container">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
