import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'



const TopMenu = ({setFiltered, filtered, projects, props}) => {

  const [activeItem, setActiveItem] = useState('a')
  

  

  const cycleTo = (value) => {
    
    const key = {
      'a': 'all',
      'f': 'featured',
      't':'Team Project',
      'c':'Course Project',
      'p':'Personal Day Project'
    }
    const type = key[value]
    
    
    if(type==='all'){      
      filtered = projects
    } else if(type === 'featured'){
      filtered = projects.filter(project=>project.featured)
    } else{
      filtered = projects ? projects.filter(project=>project.project_type===type) : ''
    }

    setActiveItem(value)
    
    setFiltered(filtered)
     
    props.history.push('/')
  }

  const items = [
    { key: 'all', active: activeItem === 'a', name: 'All', onClick: () => cycleTo('a'), color: 'yellow', style: {color: 'black'}},
    { key: 'team-projects', active: activeItem === 't', name: 'Team Projects', onClick: () => cycleTo('t'), color: 'purple' , style: {color: 'black'}  },
    { key: 'course-projects', active: activeItem === 'c', name: 'Course Projects', onClick: () => cycleTo('c'),color: 'blue' , style: {color: 'black'} },
    { key: 'personal-projects', active: activeItem === 'p', name: 'Personal Projects', onClick: () => cycleTo('p'),color: 'green' , style: {color: 'black'} }
  ]
  
   
  return (<Menu id='top-menu' inverted items={items} />)

}

export default TopMenu
