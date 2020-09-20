import React from 'react'
import {Advertisement, Image, Container, Header, Item} from 'semantic-ui-react'
import {Link} from 'react-scroll'
import profilePic from '../images/lambda_profile_pic.jfif'
import useWindowDimensions from '../custom_hooks/useWindowDimensions'
import '../styles/css/banner.css'

export default function FeaturedProjects({featured_projects, visible, setVisible, props}) {
  
  const contactClick = (target)=>{
    props.history.push(target)
    setVisible(false)
  }

  const {height, width} = useWindowDimensions()
  
  return (
    <div
    style={{height: `${height}px`}} 
    id="top-banner" 
    unit='billboard'>
      <div className="photo-credit">
        <p>Photographer: Mario Konang: &nbsp; <a href='https://gregs-nasa-apod.netlify.app/'>NASA Photo Of The Day 4/7/20</a></p>
      </div>
      <Container id='banner-inner-container'>        
        {/* <Image src={profilePic} circular size='medium' centered /> */}
        
        <div id='banner-inner-right' centered='true'>
          
          <div className='header-container'>
            <Header size='huge'>
  						<h1>Hi. I'm <strong>Greg Cameron</strong>.</h1>
  					</Header>
            <p>
            And this is my &nbsp;
            <strong>
            <Item
            className="scrolly" 
            as={Link}
            href="#"
            to='top-menu-scroll-to'
            smooth={true}              
            duration={800}   
            name='portfolio'
            id='portfolio'
            onClick={()=>contactClick('/')}>
            Portfolio.
            </Item> 
            </strong>
            &nbsp;
            Please take a look around. &nbsp;&nbsp;
            <strong>
            <Item
            className="scrolly" 
            as={Link}
            href="#"
            to='top-menu-scroll-to'
            smooth={true}              
            duration={800}   
            name='contact'
            id='contact'
            onClick={()=>contactClick('/contact')}>
              Contact me 
            </Item>       
            </strong>
            &nbsp; if you have any questions!
            </p>          
          </div>
        </div>
        
      </Container>
    </div>
  )
}

