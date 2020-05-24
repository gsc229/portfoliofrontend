import React from 'react';
import {Card, Image} from 'semantic-ui-react'

//import '../../../../portfoliobackend/media/photos/2020/05/17/market_ave_3.jpg'

export default function ProjectCard({project, props}) {
  const colors = {
      'Course Project': 'blue',
      'Personal Day Project': 'green',
      'Team Project': 'purple'
  }
  // Generate random colors
  const rand = Math.ceil(Math.random() * 7)
  // card info:
  const {back_end_repo, website, top_photo, created_at, description, front_end_repo, project_type, responsibilities, roles, technologies, title} = project
  
  
  return (
    
          <Card onClick={()=>props.history.push(`/project/${project.id}`)} color={colors[project_type]} extra={website}>
            <Image src={top_photo} />
            <Card.Content>
              <Card.Header>{title}</Card.Header>
      
            </Card.Content>
            <Card.Content extra>
              <a>
                <p>{project_type}</p>
              </a>
            </Card.Content>
          </Card>
  );
}

