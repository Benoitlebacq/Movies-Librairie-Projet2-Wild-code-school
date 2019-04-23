import React, { Component, Fragment } from 'react';
import './App.css';
import './header.css';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";
import ModalCreatList from './components/ModalCreatList';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      search: "",
      show: false,
    };
    this.onChange = this.onChange.bind(this);
    this.console = this.console.bind(this);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onChange(e) {
    this.setState({
      search: e.target.value,
    });
  }

  console(e) {
    console.log(this.state.search)

  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }


  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    console.log('this.state.show => ' + this.state.show);
    return (
      <Router>
        <div className="App">
          <Fragment>
            <div className="menu">
              <nav className="navbar navbar-expand-xl navbar-light">
                <ul>
                  <li><NavLink activeClassName="active" exact to="/">
                    <img className="logo" src="https://image.noelshack.com/fichiers/2019/15/5/1555076151-screenshot-from-2019-04-12-11-21-07-convertimage-1.png" alt="logo" />
                  </NavLink></li>
                </ul>
                <ul className="navbar-nav mx-auto">
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Science Fiction">Science Fiction</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Western">Westerns</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Drama">Drama</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Comedy">Comedy</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Thriller">Thriller</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Horror">Horror</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Animation">Animation</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Documentary">Documentary</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/War">War</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/History">History</NavLink></li>
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
                          <DropdownItem id="addlist">
                          </DropdownItem>
                          <Button variant="primary" onClick={this.handleShow}>
                          + Add liste
                         </Button>
                        <ModalCreatList show={this.state.show} />
                      </DropdownMenu>
                    </Dropdown>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="recherche">
              <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input placeholder="Rechercher un film"
                  value={this.state.search}
                  onChange={this.onChange}
                />
                <Link to={`/searchgallery/${this.state.search}`}>
                  <button
                    onClick={this.console}
                  >Search</button></Link>
              </InputGroup>
            </div>
          </Fragment>
          <Routing />
        </div>
      </Router>
    );
  }
}
export default App;
