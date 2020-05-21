import React, {useEffect, useState} from 'react';
import axiosWithAuth from "../utils/axiosWithAuth"
//import Project from './Project'
import ProjectCard from './ProjectCard';

const Projects = () => {

  const [projects, setProjects] = useState([])
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
    : (<p>There are no projects to show yet</p>)
    }
    </div>
  );
}

export default Projects;
