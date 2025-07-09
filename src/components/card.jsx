import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {string} props.className - Additional classes
 * @param {React.ReactNode} props.children - Card content
 * @param {boolean} props.rounded - Whether to round corners
 * @param {boolean} props.shadow - Whether to show shadow
 * @param {string} props.border - Border style (none, sm, md, lg)
 * @returns {JSX.Element} - Card component
 */
const Card = ({ 
  className = '', 
  children, 
  rounded = true, 
  shadow = 'md', 
  border = 'none',
  ...rest 
}) => {
  // Base classes
  const baseClasses = 'bg-white dark:bg-gray-800 transition-all duration-200';
  
  // Rounding classes
  const roundedClasses = rounded ? 'rounded-lg' : '';
  
  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }[shadow] || 'shadow-md';
  
  // Border classes
  const borderClasses = {
    none: '',
    sm: 'border border-gray-200 dark:border-gray-700',
    md: 'border-2 border-gray-200 dark:border-gray-700',
    lg: 'border-4 border-gray-200 dark:border-gray-700',
  }[border] || '';
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${roundedClasses} ${shadowClasses} ${borderClasses} ${className}`;
  
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  rounded: PropTypes.bool,
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  border: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
};

export default Card;