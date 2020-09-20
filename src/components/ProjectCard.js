import React from 'react';
import {Card, Image} from 'semantic-ui-react'
import { Link } from 'react-scroll';
import '../styles/css/main.css'

export default function ProjectCard({project, props}) {
  const colors = {
      'Course Project': 'blue',
      'Personal Day Project': 'green',
      'Team Project': 'purple'
  }
  
  // card info:
  const {website, top_photo, project_type,  title} = project
  /* const handleClick = () =>{
    window.scrollTo({
      
    })
  } */
  
  return (
        <Card 
          to='top-menu-scroll-to'
          smooth={true}
          duration={1000} 
          as={Link}  onClick={()=>props.history.push(`/project/${project.id}`)} color={colors[project_type]}>
          <Image src={top_photo} />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <p>{project_type}</p>
          </Card.Content>
        </Card>
          
  );
}

