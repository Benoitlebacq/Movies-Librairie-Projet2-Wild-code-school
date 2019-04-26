import React, {Fragment}  from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
          <NavLink activeClassName="active" className="link-footer" exact to='/PageFooter'>Made By Ourselves</NavLink>
      </Fragment>
    );
  }
}

export default Footer;