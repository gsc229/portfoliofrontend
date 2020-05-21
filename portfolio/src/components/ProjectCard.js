import React from 'react';


//import '../../../../portfoliobackend/media/photos/2020/05/17/market_ave_3.jpg'

export default function ProjectCard({project}) {
  const url = 'http://localhost:8000'
  const photo_base =  '../../../../portfoliobackend' // production only. 
  const {back_end_repo, top_photo, created_at, description, front_end_repo, project_type, responsibilities, roles, technologies, title} = project
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        {technologies.map(tech=>(<p>{tech}</p>))}
        <img src={`${top_photo}`} alt=""/>
    </div>
  );
}

