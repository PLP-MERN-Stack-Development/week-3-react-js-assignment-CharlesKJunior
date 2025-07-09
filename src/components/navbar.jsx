import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

/**
 * Navbar component for site navigation
 * @param {Object} props - Component props
 * @param {Array} props.links - Array of navigation links
 * @param {string} props.className - Additional classes
 * @param {boolean} props.showThemeToggle - Whether to show theme toggle
 * @returns {JSX.Element} - Navbar component
 */
const Navbar = ({ 
  links = [
    { path: '/', label: 'Home' },
    { path: '/tasks', label: 'Tasks' },
    { path: '/api-data', label: 'API Data' },
  ],
  className = '',
  showThemeToggle = true,
  ...rest 
}) => {
  return (
    <nav className={`bg-white dark:bg-gray-800 shadow-sm ${className}`} {...rest}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Task Manager
        </Link>
        
        <div className="flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          {showThemeToggle && <ThemeToggle />}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
  showThemeToggle: PropTypes.bool,
};

export default Navbar;