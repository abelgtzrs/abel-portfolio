import { useState, useEffect } from 'react';

const themes = ['green', 'blue', 'purple', 'red'];

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('green');

  useEffect(() => {
    // Remove all theme-xxx classes
    themes.forEach((theme) => document.body.classList.remove(`theme-${theme}`));
    // Add current theme class
    document.body.classList.add(`theme-${currentTheme}`);
  }, [currentTheme]);

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setCurrentTheme(nextTheme);
  };

  return (
    <button onClick={cycleTheme} className="theme-switcher">
      Theme: {currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}
    </button>
  );
}

export default ThemeSwitcher;
