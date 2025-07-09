import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';

/**
 * Theme toggle component for switching between light/dark mode
 * @param {Object} props - Component props
 * @param {string} props.className - Additional classes
 * @param {string} props.lightIcon - Icon for light mode
 * @param {string} props.darkIcon - Icon for dark mode
 * @returns {JSX.Element} - ThemeToggle component
 */
const ThemeToggle = ({ 
  className = '', 
  lightIcon = '☀️', 
  darkIcon = '🌙',
  ...rest 
}) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      {...rest}
    >
      <span className="text-lg">
        {theme === 'light' ? darkIcon : lightIcon}
      </span>
    </button>
  );
};

ThemeToggle.propTypes = {
  className: PropTypes.string,
  lightIcon: PropTypes.string,
  darkIcon: PropTypes.string,
};

export default ThemeToggle;