import React, { Component } from "react";
import { Container, Segment, Item, Header, Label, Accordion, Icon, Button } from 'semantic-ui-react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './pageStyle.css'

class About extends Component {
	state = { activeIndex: -1 }
	handleClickMail = () => window.location.href = "mailto:roshan.krishnan.97@gmail.com"
	handleClickResume = () => window.location.href = "Roshan_Krishnan_resume.pdf"
	handleClickGithub = () => window.location.href = "https://github.com/roshankrishnan"
	handleClickGithubEnt = () => window.location.href = "https://github.berkeley.edu/roshan-krishnan"
	handleClickGitlab = () => window.location.href = "https://gitlab.com/roshankrishnan"
	handleClickLinkedin = () => window.location.href = "https://www.linkedin.com/in/roshan-krishnan/"
	handleClickWordpress = () => window.location.href = "https://keepingwarmatatrashfire.wordpress.com/"

  	handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render() {
  	const { activeIndex } = this.state
    return (
    	<CSSTransitionGroup
      transitionName="pageTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div>
      	<Container>
      	<br/>
	        <Header as='h1'>About Me</Header>
	        <Segment>
	        <p>I'm a recent graduate from UC Berkeley with an academic background in Computer Science and Cognitive Science, specifically Artifical Intelligence, Machine Learning (Data Science), and Computational Theory. 
	        </p>
	        <p>
	        I also have experience with applications of computer science and software engineering. 
	        My interest in engineering is mainly in interactive applications like video games and more recently I have enjoyed working with the graphics pipeline. 
	        I am comfortable working with large codebases in Python, Java, C#, and C/C++ as well as game engines like Unity. 
	        I have some experience with front-end web development but I am not as well-versed in JavaScript.
	        </p>
	        <p>
	        In my free time, I enjoy reading, watching films, and playing video games. 
	        I am most satisfied when I am creating and I like writing music as an amateur guitarist, drummer, and songwriter. 
	        I also enjoy playing racket sports and fencing. 
	        </p>
	        </Segment>	        
	         <Segment>
	         <Accordion>
        	<Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}> <Header as='h2'> <Header.Content> Course Work </Header.Content> <Icon name='dropdown' /></Header>
       </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
	        <Item.Group divided>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>The Structure and Interpretation of Computer Programs</Item.Header>
		      			<Item.Meta>Core</Item.Meta>
		    			<Item.Description><p>An introduction to functional programming, abstraction, object-oriented programming, and other fundamental concepts of computer science.</p></Item.Description>
	      				<Item.Extra>
	      					<Label icon='code' content='Python'/>
	      					<Label icon='code' content='Scheme'/>
	      					<Label icon='code' content='SQL'/>
	      				</Item.Extra>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>Data Structures</Item.Header>
		      			<Item.Meta>Core</Item.Meta>
		    			<Item.Description><p>An introduction to basic algorithms, data structures, and fundamentals of software engineering.</p></Item.Description>
	      				<Item.Extra>
	      					<Label icon='code' content='Java'/>
	      				</Item.Extra>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>Machine Structures</Item.Header>
		      			<Item.Meta>Core</Item.Meta>
		    			<Item.Description><p>An exploration of computer architecture from high-level software to low-level assembly languages and circuit design.</p></Item.Description>
	      				<Item.Extra>
	      					<Label icon='code' content='C'/>
	      					<Label icon='code' content='MIPS'/>
	      				</Item.Extra>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>Discrete Mathematics and Probability Theory</Item.Header>
		      			<Item.Meta>Theory</Item.Meta>
		    			<Item.Description><p>A survey of basic computational proofs, theories, and mathematics</p></Item.Description>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>Efficient Algorithms and Intractable Problems</Item.Header>
		      			<Item.Meta>Theory</Item.Meta>
		    			<Item.Description><p>An advanced course about algorithm design, proofs, runtime analysis, dynamic programming, and NP completeness.</p></Item.Description>
	      				<Item.Extra>
	      				</Item.Extra>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>Data Structures</Item.Header>
		      			<Item.Meta>Core</Item.Meta>
		    			<Item.Description><p>An introduction to basic algorithms, data structures, and fundamentals of software engineering.</p></Item.Description>
	      				<Item.Extra>
	      					<Label icon='code' content='Java'/>
	      				</Item.Extra>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>Computer Security</Item.Header>
		      			<Item.Meta>Software</Item.Meta>
		    			<Item.Description><p>An exploration of security principles, cryptography, web security, memory safety, and networking concepts.</p></Item.Description>
	      				<Item.Extra>
	      					<Label icon='code' content='SQL'/>
	      				</Item.Extra>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>Introduction to Artifical Intelligence</Item.Header>
		      			<Item.Meta>Application</Item.Meta>
		    			<Item.Description><p>A survey of the design of intelligent systems, search problems, decision theory, and reinforcement learning.</p></Item.Description>
	      				<Item.Extra>
	      					<Label icon='code' content='Python'/>
	      				</Item.Extra>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>Computer Graphics</Item.Header>
		      			<Item.Meta>Application</Item.Meta>
		    			<Item.Description><p>An exploration of the graphics pipeline and algorithms implementing models and optimizations for rendering.</p></Item.Description>
	      				<Item.Extra>
	      					<Label icon='code' content='C++'/>
	      				</Item.Extra>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>Introduction to Machine Learning</Item.Header>
		      			<Item.Meta>Application</Item.Meta>
		    			<Item.Description><p>A detailed look at various methods of data classification.</p></Item.Description>
	      				<Item.Extra>
	      					<Label icon='code' content='Python'/>
	      				</Item.Extra>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>Game Design and Development</Item.Header>
		      			<Item.Meta>Application</Item.Meta>
		    			<Item.Description><p>A project-based exploration of basic game design principles and development in Unity.</p></Item.Description>
	      				<Item.Extra>
	      					<Label icon='cogs' content='Unity'/>
	      					<Label icon='cogs' content='Photoshop'/>
	      				</Item.Extra>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>3D Modeling and Animation</Item.Header>
		      			<Item.Meta>Application</Item.Meta>
		    			<Item.Description><p>An introduction to the animation pipeline with modeling, shading, rigging, animation, lighting, effects, and post-production.</p></Item.Description>
	      				<Item.Extra>
	      					<Label icon='cogs' content='Maya'/>
	      					<Label icon='cogs' content='Pixar Renderman'/>
	      					<Label icon='cogs' content='After Effects'/>
	      				</Item.Extra>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>Linear Algebra and Differential Equations</Item.Header>
		      			<Item.Meta>Mathematics</Item.Meta>
		    			<Item.Description><p>A survey of Linear algebra, second order differential equations, Fourier series, and partial differential equations.</p></Item.Description>
	      			</Item.Content>
	        	</Item>
	        	<Item>
	      			<Item.Content verticalAlign='middle'>
		      			<Item.Header>Multivariable Calculus</Item.Header>
		      			<Item.Meta>Mathematics</Item.Meta>
		    			<Item.Description><p>A study of vectors in 2D and 3D Euclidean spaces, partial derivatives, vector calculus, Stokes theorem, and other multivariate concepts.</p></Item.Description>
	      			</Item.Content>
	        	</Item>
	        </Item.Group>
	        </Accordion.Content>
	        </Accordion>
	        </Segment>
        	<Button.Group size='large' fluid>
        		<Button icon='mail' content='Email' onClick={this.handleClickMail}/>
        		<Button icon='briefcase' content='Resume' onClick={this.handleClickResume}/>
        		<Button icon='github' content='Github' onClick={this.handleClickGithub}/>
        		<Button icon='github square' content='Github Enterprise' onClick={this.handleClickGithubEnt}/>
        		<Button icon='gitlab' content='Gitlab' onClick={this.handleClickGitlab}/>
        		<Button icon='linkedin' content='Linkedin' onClick={this.handleClickLinkedin}/>
        		<Button icon='wordpress' content='Wordpress' onClick={this.handleClickWordpress}/>

        	</Button.Group>
        </Container>
      </div>
      </CSSTransitionGroup>
    );
  }
}
 
export default About;