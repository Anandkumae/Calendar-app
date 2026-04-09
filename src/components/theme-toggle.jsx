import React, { useState, useEffect } from 'react';

// Theme toggle component - handles light/dark mode switching
// Persists user preference in localStorage
function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    // First check if user has previously set a preference
    const savedTheme = localStorage.getItem('calendarTheme');
    
    // Also respect system preference if no saved choice exists
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set dark mode if either saved preference is dark OR no saved preference but system prefers dark
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []); // Empty dependency array means this runs once on mount

  // Handle theme switching
  const handleThemeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Update DOM and localStorage
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('calendarTheme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('calendarTheme', 'light');
    }
  };

  // Render the toggle switch with appropriate icon
  return (
    <div className="theme-toggle-container">
      <button 
        className="theme-toggle-switch" 
        onClick={handleThemeToggle}
        aria-label="Toggle between light and dark theme"
        type="button"
      >
        <div className="toggle-track">
          <div className={`toggle-thumb ${darkMode ? 'dark' : 'light'}`}>
            {darkMode ? (
              // Moon icon for dark mode
              <svg className="moon-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
              </svg>
            ) : (
              // Sun icon for light mode
              <svg className="sun-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" fill="currentColor"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </div>
        </div>
        <span className="toggle-label">
          {darkMode ? 'Dark' : 'Light'}
        </span>
      </button>
    </div>
  );
}

export default ThemeToggle;
