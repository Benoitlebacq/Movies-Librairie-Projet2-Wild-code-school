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
            
            <img className="logo"  src="https://image.noelshack.com/fichiers/2019/15/5/1555076151-screenshot-from-2019-04-12-11-21-07-convertimage-1.png" />
            
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button> 
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><a className="nav-link" href="#Science Fiction">Science-Fictions</a></li>
                <li className="nav-item"><a className="nav-link" href="#Westerns">Westerns</a></li>
                <li className="nav-item"><a className="nav-link" href="#Drama">Drama</a></li>
                <li className="nav-item"><a className="nav-link" href="#Comedy">Comedy</a></li>
                <li className="nav-item"><a className="nav-link" href="#Thriller">Thriller</a></li>
                <li className="nav-item"><a className="nav-link" href="#Horror">Horror</a></li>
                <li className="nav-item"><a className="nav-link" href="#Animation">Animation</a></li>
                <li className="nav-item"><a className="nav-link" href="#Documentary">Documentary</a></li>
                <li className="nav-item"><a className="nav-link" href="#War">War</a></li>
                <li className="nav-item"><a className="nav-link" href="#History">History</a></li>
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