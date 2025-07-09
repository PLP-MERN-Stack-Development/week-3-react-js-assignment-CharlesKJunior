import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';
import Footer from './footer';

/**
 * Layout component that wraps pages with Navbar and Footer
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {boolean} props.showNavbar - Whether to show navbar
 * @param {boolean} props.showFooter - Whether to show footer
 * @param {string} props.className - Additional classes
 * @returns {JSX.Element} - Layout component
 */
const Layout = ({ 
  children, 
  showNavbar = true, 
  showFooter = true,
  className = '',
  ...rest 
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`} {...rest}>
      {showNavbar && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showNavbar: PropTypes.bool,
  showFooter: PropTypes.bool,
  className: PropTypes.string,
};

export default Layout;