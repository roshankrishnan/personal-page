import React, { Component } from "react";
import { Container, Form, Header } from 'semantic-ui-react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './pageStyle.css'

class Contact extends Component {
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
        <Header as='h1'>Contact me</Header>
        <p> As I cannot publish my code from school publicly, feel free to contact me about access to my repositories or any other inquiries!</p>
        <Form action="https://formspree.io/roshan.krishnan.97@gmail.com" method="POST">
        	<Form.Group widths='equal'>
	        	<Form.Input required fluid label='Name'  placeholder='Your name' name="name"/>
	        	<Form.Input required fluid label='Email' placeholder='Your email address' name="_replyTo"/>
	        	<Form.Input fluid label='Organization'  placeholder='Organization/Affiliation' name="org"/>
	        </Form.Group>
        	<Form.TextArea label='Message' placeholder='Talk to me!' name="content"/>
        	<Form.Button content='Submit' name="send" onClick={this.action}/>
        </Form>
        </Container>
      </div>
      </CSSTransitionGroup>
    );
  }
}
 
export default Contact;