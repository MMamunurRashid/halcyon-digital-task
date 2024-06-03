import React from 'react';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Cart', link: '/cart' },
        
      ];
  return (
    <nav className="breadcrumbs">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index} className="breadcrumb-item">
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          <a href={breadcrumb.link}>{breadcrumb.label}</a>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
