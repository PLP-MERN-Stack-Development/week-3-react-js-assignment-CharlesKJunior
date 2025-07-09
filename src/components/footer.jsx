import React from 'react';
import PropTypes from 'prop-types';

/**
 * Footer component with links and copyright information
 * @param {Object} props - Component props
 * @param {Array} props.links - Array of footer links
 * @param {string} props.copyright - Copyright text
 * @param {string} props.className - Additional classes
 * @returns {JSX.Element} - Footer component
 */
const Footer = ({ 
  links = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Contact Us' },
  ],
  copyright = `© ${new Date().getFullYear()} Task Manager App. All rights reserved.`,
  className = '',
  ...rest 
}) => {
  return (
    <footer className={`bg-gray-50 dark:bg-gray-900 ${className}`} {...rest}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  copyright: PropTypes.string,
  className: PropTypes.string,
};

export default Footer;