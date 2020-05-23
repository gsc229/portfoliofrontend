import React from 'react'
import {Segment, Dimmer, Image, Loader} from 'semantic-ui-react'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects({featured_projects, ...props}) {
  console.log(featured_projects, props)
  return (
    <div>
      <h1>Featured Projects</h1>
      {featured_projects ? featured_projects.map((project)=>(<ProjectCard key={project.id} project={project} />))
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
  )
}
