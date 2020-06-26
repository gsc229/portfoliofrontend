import React from 'react'
import {Advertisement, Image, Container, Header, Item} from 'semantic-ui-react'
import {Link} from 'react-scroll'
import profilePic from '../images/lambda_profile_pic.jfif'
import '../styles/css/banner.css'

export default function FeaturedProjects({featured_projects, visible, setVisible, props}) {
  
  const contactClick = (e)=>{
    
    props.history.push('/contact')
    setVisible(false)
  }
  return (
    <Advertisement id="top-banner" unit='billboard'>
      <Container id='banner-inner-container'>        
        <Image src={profilePic} circular size='medium' centered />
        <div id='banner-inner-right' centered>
          <Header size='huge'>
						<h1>Hi. I'm <strong>Greg Cameron</strong>.</h1>
					</Header>
          <p>
          And this is my <a className="scrolly" href="#portfolio"><strong>Portfolio</strong></a>
          Feel free to take a look around.<br></br>
          <Item
          className="scrolly" 
          as={Link}
          href="#"
          to='top-menu-scroll-to'
          smooth={true}              
          duration={800}   
          name='contact'
          id='contact'
          onClick={contactClick}>
            Contact me 
          </Item> 
          &nbsp; if you have any questions!
          </p>          
        </div>
      </Container>
    </Advertisement>
  )
}

