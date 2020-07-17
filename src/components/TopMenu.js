import React, {useState} from 'react'
import { Menu, Divider, ItemMeta } from 'semantic-ui-react'
import TechIcon from './TechLegend'


const TopMenu = ({setFiltered, filtered, projects, props}) => {

  const [activeType, setActiveType] = useState('a')
  const [activeTech, setActiveTech] = useState("")

  const filter = (project_type, active_tech) => {
    
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
      filtered = projects ? projects.filter(project=>project.project_type===type) : ''
    }

    const filteredByTech = []
    
   if(active_tech){     
    {filtered && filtered.map(item=>{
      if(active_tech === 'React'){
        console.log('filter active_tech: ', active_tech)
        if(item.technologies.indexOf('React with hooks') !== -1 || item.technologies.indexOf('React with classes') !== -1){
          filteredByTech.push(item)
        }
      }

      if(active_tech ==='Django'){
        console.log('filter active_tech: ', active_tech)
        if(item.technologies.indexOf('Django') !== -1){
          filteredByTech.push(item)
        }
      }
    })}

    if(!filteredByTech.length){
      filtered = []
    }
  }

    setActiveType(project_type)    
    setFiltered(filteredByTech.length ? filteredByTech : filtered)
    
    //props.history.push('/')
  }

  const handleTechClick = (tech) => {
    if(tech === activeTech){
      setActiveTech("")
      filter(activeType, null)
    } else{
      setActiveTech(tech)
      filter(activeType, tech)
    }
  }
  
  const types= [
  { 
    key: 'all', 
    active: activeType === 'a', 
    name: 'All', 
    onClick: () => {
      filter('a', '')
      setActiveTech('')
    }, 
    color: 'yellow', 
    style: {color: 'black'}
  },
  { 
    key: 'team-projects', 
    active: activeType === 't', 
    name: 'Team Projects', 
    onClick: () => {
      filter('t', '')
      setActiveTech('')
    }, 
    color: 'purple' , 
    style: {color: 'black'}  
  },
  { 
    key: 'course-projects', 
    active: activeType === 'c', 
    name: 'Course Projects', 
    onClick: () => {
      filter('c', '')
      setActiveTech('')
    },
    color: 'blue' , 
    style: {color: 'black'} 
  },
  { 
    key: 'personal-projects', 
    active: activeType === 'p', 
    name: 'Personal Projects', 
    onClick: () => {
      filter('p', '')
      setActiveTech('')
    },
    color: 'green' , 
    style: {color: 'black'} 
  }
  ]

  const fontSize = '40px'
 
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
      <Menu 
      id='top-menu' 
      inverted items={types}
      style={{maringTop: '20px'}} />

      <Menu>
        <Menu.Item
          active={activeTech==='React'}
          onClick={()=> handleTechClick('React')}
          
          style={{backgroundColor: activeTech==='React' ? '#61DAFB' : 'white'}}
        >
          <i style={{fontSize: fontSize, margin: 'auto', cursor: 'pointer', color: activeTech === 'React' ? 'white' : ''}} id="react" className="devicon-react-original-wordmark colored skill-logo"></i>
        </Menu.Item>
        <Menu.Item
          active={activeTech==='Django'}
          onClick={()=> handleTechClick('Django')}
          style={{backgroundColor: activeTech==='Django' ? '#0EA44B' : 'white'}}
        >
          <i style={{fontSize: fontSize, margin: 'auto', cursor: 'pointer', color: activeTech === 'Django' ? 'white' : '#0EA44B' }} id="django" className="devicon-django-plain-wordmark skill-logo"></i>
        </Menu.Item>
      </Menu>
    </div>
  )

}

export default TopMenu
