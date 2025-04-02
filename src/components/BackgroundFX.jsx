// src/components/BackgroundFX.jsx
import { useEffect, useState } from 'react';
import '../styles/BackgroundFX.css';

function BackgroundFX() {
  const [theme, setTheme] = useState('theme-green');

  useEffect(() => {
    const bodyClass = document.body.className;
    const foundTheme = ['theme-green', 'theme-blue', 'theme-purple', 'theme-red']
      .find((t) => bodyClass.includes(t));
    setTheme(foundTheme || 'theme-green');
  }, []);

  return (
    <div className={`background-fx ${theme}`}>
      {/* Optional: could conditionally render canvas-based layers here */}
    </div>
  );
}

export default BackgroundFX;
