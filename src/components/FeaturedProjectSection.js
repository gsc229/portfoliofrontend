import React from 'react'
import {Item, Container, Message, Icon, Grid} from 'semantic-ui-react'
import { Link } from 'react-scroll'
import ProjectView from './ProjectView'
import '../styles/css/featured_project_section.css'


const FeaturedProject = ({projects}) => {


  return (
    <div className='' id='featured-project-container' >
      <div className='container featured-project-header'>
      <h2>Check out what I'm working on now:</h2>
      <strong>
        <Item
        className="scrolly" 
        as={Link}
        href="#"
        to='top-menu-scroll-to'
        smooth={true}              
        duration={800}   
        name='portfolio'
        id='portfolio'>
        See all projects
        </Item> 
      </strong>
      </div>
       
      <ProjectView projects={projects}  featured={true} />
        
   
    
  </div>
)}

export default FeaturedProject
