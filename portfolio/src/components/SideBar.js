//import { useBooleanKnob } from '@stardust-ui/docs-components'
import React, {useState} from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'

const SidebarExampleSidebar = ({visible, setVisible}) => {
  

  return (
   
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
        <Menu.Item as='a'>
          <Icon name='home' />
          Projects from courses
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='gamepad' />
          Team Projects
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='camera' />
          Day Projects
        </Menu.Item>
      </Sidebar>

      
    
  )
}

export default SidebarExampleSidebar