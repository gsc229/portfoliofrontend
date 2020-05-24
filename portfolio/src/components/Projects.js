import React from 'react'
import {Dimmer, Loader, Image, Segment, Card} from 'semantic-ui-react'
import axiosWithAuth from "../utils/axiosWithAuth"
//import Project from './Project'
import ProjectCard from './ProjectCard';

const Projects = ({projects}) => {


  return (
    <div class='all-projects-container'>    
      {projects ? 
      <Card.Group centered>
      {projects.map((project)=>(<ProjectCard key={project.id} project={project} />))}
      </Card.Group>
    : (    
      
      <Segment>        
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
