import React, { Component } from "react";
import { Segment, Container, Item, Header, Label } from 'semantic-ui-react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './pageStyle.css'

class Projects extends Component {
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
        <Header as="h1">My Projects</Header>
        <Segment>
        <Header as="h1"> Game Development </Header>
        <Item.Group divided>
        	<Item>
        	 	<Item.Image size='medium' src='images/signal.PNG' />
      			<Item.Content verticalAlign='middle'>
	      			<Item.Header>SIGNAL</Item.Header>
	      
	    			<Item.Description><p><a href="https://www.signalvideogame.com">SIGNAL</a> is a multiplayer strategy game developed by the Nuclear Science and Security Consortium, 
	    			a collaboration between UC Berkeley, Sandia National Laboratory, and Lawrence Livermore National Laboratory, 
	    			to investigate nuclear escalation dynamics as part of the <a href="https://pong.berkeley.edu">Project on Nucear Gaming</a>. I have worked on this project since its inception as a developer.</p></Item.Description>
      				<Item.Extra>
      					<Label icon='code' content='C#'/>
      					<Label icon='cogs' content='Unity'/>
      					<Label icon='cogs' content='Nakama'/>
      				</Item.Extra>
      			</Item.Content>
        	</Item>
        	<Item>
	        	<Item.Image size='medium' src='images/MD.png' />

      			<Item.Content verticalAlign='middle'>
	      			<Item.Header>Mystery Dungeon</Item.Header>
	        	
	    			<Item.Description><p>Mystery Dungeon was a semester-long 2D Dungeon Crawler MVP developed with a small group. 
	    			The prototype was barebones but there were features like procedural dungeon generation that made the game very scalable. 
	    			I was the designer and one of the programmers on the team. </p></Item.Description>
      				<Item.Extra>
      					<Label icon='code' content='C#'/>
      					<Label icon='cogs' content='Unity'/>
      				</Item.Extra>
      			</Item.Content>

        	</Item>
        	<Item>
	        	<Item.Image size='medium' src='/images/fps.png' />

      			<Item.Content verticalAlign='middle'> 
	      			<Item.Header>FPS Prototype</Item.Header>
	        	
	    			<Item.Description><p>The FPS prototype I made was a shorter, game-jam style project that primarily served to familiarize myself with first person cameras, 3D tools, as well as 3D modelling.
	    			The end product was functional and quite fun to play. I might return to the project to iterate further at some point. </p></Item.Description>
      				<Item.Extra>
      					<Label icon='code' content='C#'/>
      					<Label icon='cogs' content='Unity'/>
      					<Label icon='paint brush' content='Blender'/>
      				</Item.Extra>
      			</Item.Content>
        	</Item>
        </Item.Group>
        </Segment>

        <Segment>
        <Header as="h1"> Graphics </Header>

        <Item.Group divided>
        	<Item>
        	 	<Item.Image size='medium' src='images/rasterizer.png' />

      			<Item.Content verticalAlign='middle'>
	      			<Item.Header>Image Rasterizer</Item.Header>
	    			<Item.Description><p>I made an <a href="https://cal-cs184-student.github.io/p1-rasterizer-roshankrishnan/">Image Rasterizer</a> for my graphics class, implementing features like antialiasing and texture mapping</p></Item.Description>
      			<Item.Extra>
      					<Label icon='code' content='C++'/>
      				</Item.Extra>
      			</Item.Content>
        	</Item>
        	<Item>
	        	<Item.Image size='medium' src='images/meshedit.PNG' />

      			<Item.Content verticalAlign='middle'>
	      			<Item.Header>Mesh Editor</Item.Header>
	    			<Item.Description><p>I implemented a <a href="https://cal-cs184-student.github.io/p2-meshedit-roshankrishnan/">Mesh Editor</a> with Bezier curves, half-edge operations, and mesh upsampling.</p></Item.Description>
      			<Item.Extra>
      					<Label icon='code' content='C++'/>
      				</Item.Extra>
      			</Item.Content>

        	</Item>
        	<Item>
	        	<Item.Image size='medium' src='/images/raytracer.png' />

      			<Item.Content verticalAlign='middle'>
	      			<Item.Header>Raytracer</Item.Header>
	    			<Item.Description><p> This Raytracer included <a href="https://cal-cs184-student.github.io/p3-1-pathtracer-roshankrishnan/">direct illumination, global illumination, and optimizations for intersection tests </a> as well as <a href="https://cal-cs184-student.github.io/p3-2-pathtracer-roshankrishnan/"> material shaders, environment lighting, and depth of field</a>.</p></Item.Description>
      			<Item.Extra>
      					<Label icon='code' content='C++'/>
      				</Item.Extra>
      			</Item.Content>
        	</Item>
        	<Item>
	        	<Item.Image size='medium' src='/images/clothsim.PNG' />

      			<Item.Content verticalAlign='middle'>
	      			<Item.Header>Cloth Simulator</Item.Header>
	    			<Item.Description><p> This simple <a href="https://cal-cs184-student.github.io/p4-clothsim-roshankrishnan/">Cloth Simulator</a> implemented simulation using Verlet integration and handled collisions with other objects. </p></Item.Description> 
        		<Item.Extra>
      					<Label icon='code' content='C++'/>
      				</Item.Extra>
      			</Item.Content>
        	</Item>
        </Item.Group>
        </Segment>

        <Segment>
        <Header as="h1"> Machine Learning </Header>

        <Item.Group divided>
        	<Item>
        	 	<Item.Image size='medium' src='images/svm.jpeg' />

      			<Item.Content verticalAlign='middle'>
	      			<Item.Header>Linear Classifier</Item.Header>
	        		
	    			<Item.Description><p>I implemented a Support Vector Machine classifier for datasets like MNIST</p></Item.Description>
      			<Item.Extra>
      					<Label icon='code' content='Python'/>
      				</Item.Extra>
      			</Item.Content>
        	</Item>
        	<Item>
        	 	<Item.Image size='medium' src='images/gauss.png' />

      			<Item.Content verticalAlign='middle'>
	      			<Item.Header>Gaussian Classifier</Item.Header>
	        		
	    			<Item.Description><p>I implemented a Gaussian classifier using both LDA and QDA for datasets like MNIST</p></Item.Description>
				<Item.Extra>
      					<Label icon='code' content='Python'/>
      				</Item.Extra>
      			</Item.Content>        	</Item>
        	<Item>
        	 	<Item.Image size='medium' src='images/nn.jpeg' />

      			<Item.Content verticalAlign='middle'>
	      			<Item.Header>Neural Network</Item.Header>
	        		
	    			<Item.Description><p>I implemented a multi-layer neural network as well as a CNN for video frame data</p></Item.Description>
      			<Item.Extra>
      					<Label icon='code' content='Python'/>
      				</Item.Extra>
      			</Item.Content>
        	</Item>
        </Item.Group>
        </Segment>
        <Segment>
        <Header as="h1"> Other </Header>

        <Item.Group divided>
        	<Item>
        	 	<Item.Image size='medium' src='images/labrat.PNG' />

      			<Item.Content verticalAlign='middle'>
	      			<Item.Header>Lab Ratatouille</Item.Header>
	    			<Item.Description><p>I've been working on a 3D animated short with a group this semester, experiencing the entire pipeline: modeling, shading, skinning, rigging, animating, rendering, and compositing.</p></Item.Description>
      			
      			<Item.Extra>
      					<Label icon='paint brush' content='Maya'/>
      					<Label icon='paint brush' content='After Effects'/>
      				</Item.Extra>
      			</Item.Content>
        	</Item>
        </Item.Group>
        </Segment>
        </Container>
      </div>
      </CSSTransitionGroup>
    );
  }
}
 
export default Projects;