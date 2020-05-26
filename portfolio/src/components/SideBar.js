//import { useBooleanKnob } from '@stardust-ui/docs-components'
import React, {useState } from 'react'
import {  Menu, Sidebar } from 'semantic-ui-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SidebarExampleSidebar = ({visible, setVisible}) => {
  
  const [activeItem, setActiveItem] = useState()

  
  const handleItemClick = (e)=>{
    
    setActiveItem(e.target.id)
    
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
              active={activeItem === 'resume'} 
              onClick={handleItemClick}
              href='https://resume.io/r/l8u6bawut' 
              >
                <FontAwesomeIcon  className='sidebar-icon'  icon={['far', 'file-pdf']} />&nbsp;
                <br/><br/><p>Resume</p>
            </Menu.Item >

            <Menu.Item 
              as='a' 
              name='contact'
              id='contact'
              active={activeItem === 'contact'}
              onClick={handleItemClick}
              >
                <FontAwesomeIcon  className='sidebar-icon' icon={['far', 'paper-plane']} />&nbsp;
                <br/><br/><p>Contact</p>
            </Menu.Item>

            <Menu.Item 
              as='a'
              href='https://www.linkedin.com/in/greg-cameron-90488b30/' 
              name='linked-in'
              id='linked-in'
              active={activeItem === 'linked-in'}
              onClick={handleItemClick}
              >
                <FontAwesomeIcon className='sidebar-icon social'  icon={['fab', 'linkedin']} />
            </Menu.Item>

            <Menu.Item 
              as='a'
              href='https://github.com/gsc229' 
              name='git-hub'
              id='git-hub'
              active={activeItem === 'git-hub'}
              onClick={handleItemClick}
              >
                <FontAwesomeIcon className='sidebar-icon social'  icon={['fab', 'github-square']} />
            </Menu.Item>

       </Sidebar>
      
  )
}

export default SidebarExampleSidebar