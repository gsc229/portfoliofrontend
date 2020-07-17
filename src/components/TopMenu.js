import React, {useState} from 'react'
import { Menu, Divider } from 'semantic-ui-react'



const TopMenu = ({setFiltered, filtered, projects, props}) => {

  const [activeType, setActiveType] = useState('a')
  

  const filter = (project_type, language=null) => {
    
    const type_key = {
      'a': 'all',
      'f': 'featured',
      't':'Team Project',
      'c':'Course Project',
      'p':'Personal Day Project'
    }
    const type = type_key[project_type]
    
    
    if(type==='all'){      
      filtered = projects
    } else if(type === 'featured'){
      filtered = projects.filter(project=>project.featured)
    } else{
      setFiltered(projects.filter(project=>project.project_type===type))
    }

    if(language){}

    setActiveType(project_type)    
    setFiltered(filtered)
     
    props.history.push('/')
  }

  const types= [
    { key: 'all', active: activeType === 'a', name: 'All', onClick: () => filter('a'), color: 'yellow', style: {color: 'black'}},
    { key: 'team-projects', active: activeType === 't', name: 'Team Projects', onClick: () => filter('t'), color: 'purple' , style: {color: 'black'}  },
    { key: 'course-projects', active: activeType === 'c', name: 'Course Projects', onClick: () => filter('c'),color: 'blue' , style: {color: 'black'} },
    { key: 'personal-projects', active: activeType === 'p', name: 'Personal Projects', onClick: () => filter('p'),color: 'green' , style: {color: 'black'} }
  ]

  const technologies = [

  ]
  
   
  return (
    <div>
      <Menu id='top-menu' inverted items={types} />
    </div>
  )

}

export default TopMenu
