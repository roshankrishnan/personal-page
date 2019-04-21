import React, { Component } from "react";
import {
  Route,
  Switch,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import { Menu, Container } from 'semantic-ui-react';
import { CSSTransition } from 'react-transition-group'


const supportsHistory = 'pushState' in window.history;
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/projects', name: 'My Projects', Component: Projects },
  { path: '/about', name: 'About Me', Component: About },
  { path: '/contact', name: 'Contact Me', Component: Contact },
];
function helper() {
	return (
      <BrowserRouter forceRefresh={!supportsHistory}>
      <>
        <Container>

        	<Menu size="huge" pointing secondary>
	        	{routes.map(route => (
	        		<Menu.Item
	        			key={route.path}
		                as={NavLink}
		                to={route.path}
		               	activeClassName="active"
		                exact
		            > 
	        		{route.name}
	        		</Menu.Item>
	        		))}
        	</Menu>
        	 <Container className="container">
          	{routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1000}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
		</Container>
		</>
      </BrowserRouter>
    );
}
class Main extends Component {
  render() {
    return helper();
  }
}
 
export default Main;
