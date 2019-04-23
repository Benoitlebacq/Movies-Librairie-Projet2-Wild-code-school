import React, { Component, Fragment } from 'react';
import './App.css';
import './header.css';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";



class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,

      search: ""
    };
    this.onChange = this.onChange.bind(this);

    this.console = this.console.bind(this);
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
  render() {
    return (
      <Router>
        <div className="App">
          <Fragment>
            <div className="menu">
              <nav className="navbar navbar-expand-xl navbar-light">
                <ul>
                  <li><NavLink activeClassName="active" style={{ textDecoration: 'none' }} exact to="/">
                    <img className="logo" src="https://image.noelshack.com/fichiers/2019/15/5/1555076151-screenshot-from-2019-04-12-11-21-07-convertimage-1.png" />
                  </NavLink></li>
                </ul>
                <ul className="navbar-nav mx-auto">
                  
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Adventure/12">Adventure</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Science Fiction/878">Science Fiction</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Action/28">Action</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Crimes/80">Crimes</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Western/37">Westerns</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Drama/18">Drama</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Comedy/35">Comedy</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Thriller/53">Thriller</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Horror/27">Horror</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Animation/16">Animation</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Documentary/99">Documentary</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/War/10752">War</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/History/36">History</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Romance/10749">Romance</NavLink></li>
                  <li><NavLink activeClassName="active" className="nav-link" exact to="/gallery/Music/10402">Music</NavLink></li>
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
