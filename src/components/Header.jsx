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
              <li><NavLink activeClassName="active" className="nav-link" exact to="/genres=878">Science Fiction</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/genres=37">Westerns</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/genres=18">Drama</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/genres=35">Comedy</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/genres=53">Thriller</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/genres=27">Horror</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/genres=16">Animation</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/genres=99">Documentary</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/genres=10752">War</NavLink></li>
              <li><NavLink activeClassName="active" className="nav-link" exact to="/genres=36">History</NavLink></li>
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