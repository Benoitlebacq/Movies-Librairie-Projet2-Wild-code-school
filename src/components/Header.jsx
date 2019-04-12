import React, { Fragment } from "react";
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import '../App.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return ( 
      <Fragment>
        <div className="menu">
          <nav className="navbar navbar-expand-xl navbar-light">
            <a href="/">
            <img className="LOGO"  src="https://image.noelshack.com/fichiers/2019/15/5/1555076151-screenshot-from-2019-04-12-11-21-07-convertimage-1.png" />
            </a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button> 
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><a className="nav-link" href="#numeric">Science-Fictions</a></li>
                <li className="nav-item"><a className="nav-link" href="#euratechnologies">Westerns</a></li>
                <li className="nav-item"><a className="nav-link" href="#poles">Drama</a></li>
                <li className="nav-item"><a className="nav-link" href="#dsc">Comedy</a></li>
                <li className="nav-item"><a className="nav-link" href="#collaborators">Thriller</a></li>
                <li className="nav-item"><a className="nav-link" href="#collaborators">Horror</a></li>
                <li className="nav-item"><a className="nav-link" href="#collaborators">Animation</a></li>
                <li className="nav-item">
                  <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle nav caret>
                      Listes
                </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Mes favoris</DropdownItem>
                      <DropdownItem >A regarder plus tard</DropdownItem>
                      <DropdownItem>Autres liste</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>+ Nouvelle liste</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                 </li> 
              </ul>
            </div>
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