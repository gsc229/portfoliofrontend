import React from 'react'
import {Image, Segment, Header, List, Container, Grid, Popup, Icon, Button} from 'semantic-ui-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../styles/css/project_view.css'

import TechLegend from './TechLegend'



export default function ProjectView({projects, props, featured=false}) {  
  let project
  console.log({projects})
  if(featured){
    project = projects.find(project=> project.featured)
  }
  else if(projects){
    project = projects.filter(project=> project.id.toString() === props.match.params.id)[0]
  } else project = "Wait for it, wait for it..."
  
  const {back_end_repo, website, web_icon, top_photo, description, front_end_repo, responsibilities, roles, technologies, title} = {...project}
  
  const fa_web_icon = web_icon ? [web_icon.slice(0,3), web_icon.slice(7, web_icon.length)] : ""
  


  return (    
    <Segment className='project-view-container'>
      {!featured && 
      <Button 
      labelPosition='left' 
      icon='left chevron' 
      content='Back' 
      onClick={()=>props.history.push('/')} 
      color='green' 
      /> }     
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
            <FontAwesomeIcon size='lg' icon={['fab', 'github']} />&nbsp;Back End Repo
          </a>
        </List.Item>
        }
        
        <List.Item>
          <Popup
            style={{backgroundColor: 'black', color: 'white'}}
            basic
            trigger={
              <Icon as='a' className='pop-up-a'  href={website} style={{textDecoration: 'none'}}>
              <FontAwesomeIcon size='lg' icon={fa_web_icon} />
              &nbsp; Website</Icon>
            }
         >
           <Popup.Content style={{textAlign: 'center'}} >
            <FontAwesomeIcon style={{color: 'orange', margin: '3px auto', fontSize: '15px'}} icon={['fas', 'info-circle']} /><br/>
           Please note that some apps are not full-scale procuction apps. After clicking this link, it may hang 10-15 seconds before the server<br/>"wakes up".
           </Popup.Content>
         </Popup>
            
          
        </List.Item>      
      </List>{/*END LINKS  */} 


      <Container className='info-container'>
        <Grid stackable columns={2} relaxed='very'>
          <Grid.Column>
          <Popup
            style={{backgroundColor: 'black', color: 'white'}}
            basic
            trigger={
              <Image href={website} className='view-image' size='huge' src={top_photo} alt=""/>
            }
         >
           <Popup.Content style={{textAlign: 'center'}} >
            <FontAwesomeIcon style={{color: 'orange', margin: '3px auto', fontSize: '15px'}} icon={['fas', 'info-circle']} /><br/>
           Please note that some apps are not full-scale procuction apps. After clicking this link, it may hang 10-15 seconds before the server<br/>"wakes up".
           </Popup.Content>
         </Popup>
          
          
          
          </Grid.Column>
          <Grid.Column>
            {description && <div style={{margin: '20px 0'}}><h3>About: </h3><p style={{paddingRight: '20px'}}>{description}</p></div>}
            {roles && <div style={{margin: '20px 0'}}><h3>Roles: </h3><p style={{paddingRight: '20px'}}>{roles}</p></div>}
            {responsibilities && <div style={{margin: '20px 0'}}><h3>Responsibilities: </h3><p style={{paddingRight: '20px'}}>{responsibilities}</p></div>}
            <h3>Technologies: </h3>

            <div id='tech-container'>
            {technologies &&               
              technologies.map(tech=>(
                               
              <TechLegend key={`${project.id} + ${tech}`} tech={tech} />
                
              ))
            }
           
            </div>
            
          </Grid.Column>
        </Grid>        
      </Container>
    </Segment>
    
  )
}
