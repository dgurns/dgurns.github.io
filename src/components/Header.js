import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__title">Dan Gurney</div>
        <div className="header__nav">
          <div className="header__nav-item">Software Development</div>
          <div className="header__nav-divider">/</div>
          <div
            className="header__nav-item header__nav-item--selected"
          >Music</div>
        </div>
      </div>
    </div>
  );
}
