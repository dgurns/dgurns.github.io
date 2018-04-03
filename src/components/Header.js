import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import classNames from 'classnames';

class Header extends Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <div className="header">
        <div className="header__content">
          <div className="header__title">Dan Gurney</div>
          <div className="header__nav">
            <Link
              className={classNames(
                'header__nav-item',
                pathname === '/software' ? 'header__nav-item--selected' : null
              )}
              to="/software"
            >Software Development</Link>
            <div className="header__nav-divider">/</div>
            <Link
              className={classNames(
                'header__nav-item',
                pathname === '/music' ? 'header__nav-item--selected' : null
              )}
              to="/music"
            >Music</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
