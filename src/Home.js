import React, { Component } from "react";
import { Container, Image, Header } from 'semantic-ui-react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './pageStyle.css'

class Home extends Component {
  render() {
    return (
    <CSSTransitionGroup
      transitionName="pageTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div>
      <br/>
      	<Container>
      		<br/>
      		<Image src='images/profile.jpg' size='medium'/>
	        <Header as='h1'>Hi, I'm Roshan Krishnan</Header>
	        <p> I like creating and what is software engineering if not creating? </p>
        </Container>
      </div>
      </CSSTransitionGroup>
    );
  }
}
 
export default Home;