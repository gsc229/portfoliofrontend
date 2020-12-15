//import { useBooleanKnob } from '@stardust-ui/docs-components'
import React from 'react'
import {Menu, Sidebar} from 'semantic-ui-react'
import {Link} from 'react-scroll'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SidebarExampleSidebar = ({visible, setVisible, props}) => {

  const contactClick = (e)=>{
    
    props.history.push('/contact')
    setVisible(false)
  }

  return (
        
      <Sidebar
        id='side-bar'
        as={Menu}
        animation='push'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        direction='right'
        visible={visible}
        width='thin'
      > 
          
        <Menu.Item 
          as='a' 
          name='resume'
          id='resume'
          
          
          href='https://resume.io/r/aGZi2coDT' 
          >
            <FontAwesomeIcon  className='sidebar-icon'  icon={['far', 'file-pdf']} />&nbsp;
            <br/><br/><p>Resume</p>
        </Menu.Item >

        <Menu.Item 
          as={Link}
          to='top-menu-scroll-to'
          smooth={true}              
          duration={800}   
          name='contact'
          id='contact'
          
          onClick={contactClick}
          >
            <FontAwesomeIcon className='sidebar-icon' icon={['far', 'paper-plane']} />&nbsp;
            <br/><br/><p>Contact</p>
        </Menu.Item>

        <Menu.Item 
          as='a'
          href='https://www.linkedin.com/in/greg-cameron-90488b30/' 
          name='linked-in'
          id='linked-in'
          
          
          >
            <FontAwesomeIcon className='sidebar-icon social'  icon={['fab', 'linkedin']} />
        </Menu.Item>

        <Menu.Item 
          as='a'
          href='https://github.com/gsc229' 
          name='git-hub'
          id='git-hub'
          >
            <FontAwesomeIcon className='sidebar-icon social'  icon={['fab', 'github-square']} />
        </Menu.Item>
       </Sidebar>
      
  )
}

export default SidebarExampleSidebar