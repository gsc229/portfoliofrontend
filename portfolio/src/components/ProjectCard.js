import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react'

//import '../../../../portfoliobackend/media/photos/2020/05/17/market_ave_3.jpg'

export default function ProjectCard({project}) {
  const url = 'http://localhost:8000'
  const photo_base =  '../../../../portfoliobackend' // production only. 
  const {back_end_repo, website, top_photo, created_at, description, front_end_repo, project_type, responsibilities, roles, technologies, title} = project
  return (
    <Card onClick={()=>alert("hello")} extra={website}>
      <Image src={top_photo} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>

      </Card.Content>
      <Card.Content extra>
        <a href={website}>
          <p>{website}</p>
        </a>
      </Card.Content>
    </Card>
  );
}

