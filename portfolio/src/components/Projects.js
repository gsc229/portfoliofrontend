import React, {useEffect, useState} from 'react'
import {Dimmer, Loader, Image, Segment, Button} from 'semantic-ui-react'
import axiosWithAuth from "../utils/axiosWithAuth"
//import Project from './Project'
import ProjectCard from './ProjectCard';

const Projects = () => {

  const [projects, setProjects] = useState()
  
  console.log("PROJECTS: ", projects)
  useEffect(() => {
    axiosWithAuth()
    .get('/projects/')
    .then(res=>{
      console.log(res)
      setProjects(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);


  return (
    <div>
      <h1>Here are some projects I made recently</h1>
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
