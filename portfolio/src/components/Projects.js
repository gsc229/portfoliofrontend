import React from 'react'
import {Dimmer, Loader, Image, Segment} from 'semantic-ui-react'
import axiosWithAuth from "../utils/axiosWithAuth"
//import Project from './Project'
import ProjectCard from './ProjectCard';

const Projects = ({projects}) => {

  


  return (
    <div className="all-projects-container">
      
      {projects ? projects.map((project)=>(<ProjectCard key={project.id} project={project} />))
    : (    
      <div>
      <Segment>        
        <Dimmer active>
          <Loader inverted>Loading</Loader>
        </Dimmer>
        <Image src="" />
      </Segment>
      </div>
      )
    }
    </div>
  );
}

export default Projects;
