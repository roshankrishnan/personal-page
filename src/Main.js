import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import { Menu, Container } from 'semantic-ui-react';

class Main extends Component {
  render() { 
  	return(
  		<HashRouter>
	  	<div>
	  		<Container>
	  		<Menu secondary size='large'>
	  			<Menu.Item as={NavLink} exact to={"/"}> Home </Menu.Item>
	  			<Menu.Item as={NavLink} to={"/about"}> About Me </Menu.Item>
	  			<Menu.Item as={NavLink} to={"/projects"}> My Projects </Menu.Item>
	  			<Menu.Item as={NavLink} to={"/contact"}> Contact Me </Menu.Item>

	  		</Menu>
	  		</Container>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
	);
  }
}
 
export default Main;
