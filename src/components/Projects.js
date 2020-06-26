import React from 'react'
import {Dimmer, Loader, Image, Segment, Card} from 'semantic-ui-react'
import {Link} from 'react-scroll'
//import Project from './Project'
import ProjectCard from './ProjectCard';

import '../styles/css/projects.css'

const Projects = ({projects, props}) => {

  return (
    <div class='all-projects-container'>    
      {projects ? 
      
      <Card.Group centered>      
        
          {projects.map((project)=>(<ProjectCard  props={props} key={project.id} project={project} />))}
        
      </Card.Group>
     
    : (    
      
      <Segment id='spinner'>        
        <Dimmer active>
          <Loader inverted>Loading</Loader>
        </Dimmer>
        <Image src="" />
      </Segment>
      
      )
    }
    </div>
  );
}

export default Projects;
