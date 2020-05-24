import React from 'react'
import {Advertisement, Image, Container, Header} from 'semantic-ui-react'
import profilePic from '../images/lambda_profile_pic.jfif'
import '../styles/css/banner.css'

export default function FeaturedProjects({featured_projects, ...props}) {
  console.log(featured_projects, props)
  const first = featured_projects[0]
  return (
    <Advertisement id="top-banner" unit='billboard'>
      <Container id='banner-inner-container'>
        
        <Image src={profilePic} circular size='medium' centered />
        <container id='banner-inner-right' centered>
          <Header size='huge'>
						<h1>Hi. I'm <strong>Greg Cameron</strong>.</h1>
					</Header>
          <p>
          And this is my <a class="scrolly" href="#portfolio"><strong>Portfolio</strong></a>
          Feel free to take a look around.<br></br>
          <a class="scrolly" href="#contact">Contact me</a> if you have any questions!
          </p>          
        </container>
      </Container>
    </Advertisement>
  )
}
