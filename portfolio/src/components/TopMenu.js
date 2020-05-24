import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'



const TopMenu = ({setFiltered, projects}) => {

  const [activeItem, setActiveItem] = useState('a')
  console.log('activeItem TopMenu: ', activeItem)
  const cycleTo = (value) => {
    const key = {
      'a': 'all',
      'f': 'featured',
      't':'Team Project',
      'c':'Course Project',
      'p':'Personal Day Project'
    }
    const type = key[value]
    console.log('type: ',type)
    let filtered
    if(type==='all'){
      filtered = projects
    } else if(type === 'featured'){
      filtered = projects.filter(project=>project.featured)
    } else{
      filtered = projects ? projects.filter(project=>project.project_type===type) : ''
    }

    setActiveItem(value)
    setFiltered(filtered)
    console.log(filtered)
    //props.history.push(key[value])
  }

  const items = [
    { key: 'all', active: activeItem === 'a', name: 'All', onClick: () => cycleTo('a') },
    { key: 'team-projects', active: activeItem === 't', name: 'Team Projects', onClick: () => cycleTo('t') },
    { key: 'course-projects', active: activeItem === 'c', name: 'Course Projects', onClick: () => cycleTo('c') },
    { key: 'personal-projects', active: activeItem === 'p', name: 'Personal Projects', onClick: () => cycleTo('p') }
  ]
  
  
  
  
  return (<Menu items={items} />)

}

export default TopMenu
