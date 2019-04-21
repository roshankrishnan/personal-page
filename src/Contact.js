import React, { Component } from "react";
import { Container, Form } from 'semantic-ui-react';

class Contact extends Component {
  render() {
    return (
      <div>
        <Container text>
        <h1>Contact me</h1>
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
    );
  }
}
 
export default Contact;