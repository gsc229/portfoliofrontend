import React from 'react'
import {Image, Segment, Header, Divider, List} from 'semantic-ui-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGrav} from '@fortawesome/free-brands-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import '../styles/css/project_view.css'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
console.log('LIBRARY: ', library)



export default function ProjectView({projects, props}) {  
  const project = projects ? projects.filter(project=> project.id == props.match.params.id)[0] : "Wait for it, wait for it..."
  const {back_end_repo, website, web_icon, top_photo, created_at, description, front_end_repo,
         project_type, responsibilities, roles, technologies, title} = project
  const fa_web_icon = web_icon ? [web_icon.slice(0,3), web_icon.slice(7, web_icon.length)] : ""
  
  return (    
    <Segment className='project-view-container'>      
      <Header as='h1'>{title}</Header>
      <List divided relaxed>

        {front_end_repo && 
        <List.Item>
            <a href={front_end_repo} style={{textDecoration: 'none'}}>
            <FontAwesomeIcon size='lg' icon={['fab', 'github']} />&nbsp;Front End Repo
          </a>
          
        </List.Item>
        }

        {back_end_repo && 
        <List.Item>
          <a href={back_end_repo} style={{textDecoration: 'none'}}>  
            <FontAwesomeIcon size='lg' icon={['fab', 'github']} />&nbsp;Front End Repo
          </a>
        </List.Item>
        }
        
        <List.Item>
          <a href="https://market-ave.netlify.app/" style={{textDecoration: 'none'}}>
            <FontAwesomeIcon size='lg' icon={fa_web_icon} />
            &nbsp; Website</a>
        </List.Item>      
      </List>{/*END LINKS  */}
     
      <Image size='massive' src={top_photo} alt=""/>
      <Divider />

    </Segment>
    
  )
}
