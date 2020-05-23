//import { useBooleanKnob } from '@stardust-ui/docs-components'
import React, {useState} from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Button} from 'semantic-ui-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import SidebarLabel from './SideBarLabel'
const SidebarExampleSidebar = ({visible, setVisible}) => {
  
  const [activeItem, setActiveItem] = useState()

  const handleItemClick = (e)=>{
    
    setActiveItem(e.target.id)
    console.log(activeItem)
    console.log("HHHHHHIIIIIIIIII!!!!!!!", e.target.id, e.target)
  }
  
 

  return (
      <div>
        
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width='thin'
        > 
          <button onClick={()=>alert('CLICKED')} >TEST BUTTON</button>
          <Menu.Item 
            as='a'
            name='course-projects'
            id='team-projects' 
            active={activeItem === 'team-projects'} 
            onClick={handleItemClick}  
            >      
            Projects from courses
          </Menu.Item>
          <Menu.Item 
            as='a' 
            name='team-projects'
            id='team-projects'
            active={activeItem === 'team-projects'} 
            onClick={handleItemClick} 
             >
          <FontAwesomeIcon icon="people-carry" />
            Team Projects
          </Menu.Item >
          <Menu.Item 
            as='a' 
            name='day-projects'
            id='day-projects'
            active={activeItem === 'day-projects'}
            onClick={()=>alert('HHHHHHEEEEEEYYYYYY!!!!!!')} 
            >
            <Icon name='camera' />
            Day Projects
          </Menu.Item>
        </Sidebar>
      </div>
  )
}

export default SidebarExampleSidebar