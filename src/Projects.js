import React, { Component } from "react";
import { Container, Item } from 'semantic-ui-react';

class Projects extends Component {
  render() {
    return (
      <div>
      	<Container>
        <h2>My Projects</h2>
        <p>Placeholder text</p>
        <Item.Group>
        	<Item>
        	 	<Item.Image size='medium' src='images/signal.png' />

      			<Item.Content>
	      			<Item.Header>SIGNAL</Item.Header>
	        		<Item.Meta>
		     			<span className='Language'>C#</span>
		      			<span className='Tech'>Unity</span>
		      			<span className='Tech'>Nakama</span>

					</Item.Meta>
	    			<Item.Description><p><a href="https://www.signalvideogame.com">SIGNAL</a> is a multiplayer strategy game developed by the Nuclear Science and Security Consortium, 
	    			a collaboration between UC Berkeley, Sandia National Laboratory, and Lawrence Livermore National Laboratory, 
	    			to investigate nuclear escalation dynamics as part of the <a href="https://pong.berkeley.edu">Project on Nucear Gaming</a>. I have worked on this project since its inception as a developer.</p></Item.Description>
      			</Item.Content>
        	</Item>
        	<Item>
	        	<Item.Image size='medium' src='images/MD.png' />

      			<Item.Content>
	      			<Item.Header>Mystery Dungeon</Item.Header>
	        		<Item.Meta>
		     			<span className='Language'>C#</span>
		      			<span className='Tech'>Unity</span>

					</Item.Meta>
	    			<Item.Description><p>Mystery Dungeon was a semester-long 2D Dungeon Crawler MVP developed with a small group. 
	    			The prototype was barebones but there were features like procedural dungeon generation that made the game very scalable. 
	    			I was the designer and one of the programmers on the team. </p></Item.Description>
      			</Item.Content>

        	</Item>
        	<Item>
	        	<Item.Image size='medium' src='/images/fps.png' />

      			<Item.Content>
	      			<Item.Header>FPS Prototype</Item.Header>
	        		<Item.Meta>
		     			<span className='Language'>C#</span>
		      			<span className='Tech'>Unity</span>
		      			<span className='Tech'>Blender</span>
					</Item.Meta>
	    			<Item.Description><p>The FPS prototype I made was a shorter, game-jam style project that primarily served to familiarize myself with first person cameras, 3D tools, as well as 3D modelling.
	    			The end product was functional and quite fun to play. I might return to the project to iterate further at some point. </p></Item.Description>
      			</Item.Content>

        	</Item>
        </Item.Group>
        </Container>
      </div>
    );
  }
}
 
export default Projects;