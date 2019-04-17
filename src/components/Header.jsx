import React, { Fragment } from "react";
import {Dropdown, DropdownItem, DropdownToggle, DropdownMenu, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  render() {
    return (
      <Fragment>
        <div className="menu">
          <nav className="navbar navbar-expand-xl navbar-light">
            <ul>
              <li><NavLink activeClassName="active" exact to="/">
                <img className="logo" src="https://image.noelshack.com/fichiers/2019/15/5/1555076151-screenshot-from-2019-04-12-11-21-07-convertimage-1.png" />
                </NavLink></li>
           </ul>
            <ul className="navbar-nav mx-auto">
              <li><NavLink activeClassName="active" className="nav-link" exact to="/Science Fiction">Science Fiction</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/Westerns">Westerns</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/Drama">Drama</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/Comedy">Comedy</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/Thriller">Thriller</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/Horror">Horror</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/Animation">Animation</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/gDocumentary">Documentary</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/War">War</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/History">History</NavLink></li>
              <li className="nav-item">
                <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle nav caret>
                    Listes
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>My favorites</DropdownItem>
                    <DropdownItem >To see later</DropdownItem>
                    <DropdownItem>Others lists</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>+ Add liste</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </ul>
          </nav>
        </div>
        <div className="recherche">
          <InputGroup>
            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
            <Input placeholder="Rechercher" />
          </InputGroup>
        </div>
      </Fragment>
    );
  }
}
export default Header;