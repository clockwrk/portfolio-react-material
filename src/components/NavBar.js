import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import AllProjects from './ProjectsContainer.js'
import SingleProject from './SingleProject.js'
import projectData from '../data/projects';

console.log(projectData)

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
            <div>
                <Navbar color="indigo" dark expand="md" scrolling>

                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/about">About</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/contact">Contact</NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Projects</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem>
                                    <Link to="/projects">Projects</Link>
                                  </DropdownItem>
                                  <DropdownItem>
                                    <Link to="/projects/one">Project 1</Link>
                                  </DropdownItem>
                                  <DropdownItem>
                                    <Link to="/projects/two">Project 2</Link>
                                  </DropdownItem>
                                  <DropdownItem>
                                    <Link to="/projects/three">Project 3</Link>
                                  </DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
                <hr />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projects" component={AllProjects} />
                </div>
            </Router>
        );
    }
}

export default NavBar;
