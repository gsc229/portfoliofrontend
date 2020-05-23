import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'



const TopMenu = (props) => {

  const [activeItem, setActiveItem] = useState('f')
  console.log('activeItem TopMenu: ', activeItem)
  const cycleTo = (value) => {

    const key = {
      'f':'/featured-projects',
      't':'/team-projects',
      'c':'/course-projects',
      'p':'/personal-projects'

    }

    setActiveItem(value)
    props.history.push(key[value])
  }

  const items = [
    { key: 'featured', active: activeItem === 'f', name: 'Featured', onClick: () => cycleTo('f') },
    { key: 'team-projects', active: activeItem === 't', name: 'Team Projects', onClick: () => cycleTo('t') },
    { key: 'course-projects', active: activeItem === 'c', name: 'Course Projects', onClick: () => cycleTo('c') },
    { key: 'personal-projects', active: activeItem === 'p', name: 'Personal Projects', onClick: () => cycleTo('p') }
  ]
  
  console.log("TopMenu props: ",props)  
  
  
  return (<Menu items={items} />)

}

export default TopMenu
