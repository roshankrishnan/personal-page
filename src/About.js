import React, { Component } from "react";
import { Container } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <div>
      	<Container text>
	        <h2>About me</h2>
	        <p>I'm a recent graduate from UC Berkeley with a background in Computer Science and Cognitive Science, specifically Artifical Intelligence, Machine Learning (Data Science), and Computational Theory. 
	        My interest in Artificial Intelligence stems from engaging with ideas of Epistemology from modern Philosophy that could not be explored outside of the theoretical realm until recently. As the creation of a truly intelligent computational system slowly becomes a matter of when and not if, I think that an interdisciplinary approach is essential to staying at the forefront of innovation.
	        </p>
	        <p>
	        I also have experience with software engineering at all levels of the stack. My interest in engineering is mainly in interactive applications like video games and more recently I have enjoyed working with the graphics pipeline. As a result of working on projects in these areas, I am comfortable working with large codebases in Python, Java, C#, and C/C++ as well as game engines like Unity.
	        </p>
        </Container>
      </div>
    );
  }
}
 
export default About;