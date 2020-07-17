import React, {useState} from 'react'
import { Menu, Divider, ItemMeta } from 'semantic-ui-react'
import TechIcon from './TechLegend'


const TopMenu = ({setFiltered, filtered, projects, props}) => {

  const [activeType, setActiveType] = useState('all')
  const [activeTech, setActiveTech] = useState("")


  const handleTypeClick = (type)=>{
    if(activeType==='all'){      
      filtered = projects
    } else if(activeType === 'featured'){
      filtered = projects.filter(project=>project.featured)
    } else{
      filtered = projects ? projects.filter(project=>project.project_type===activeType) : ''
    }
    setFiltered(filtered)
    setActiveType(type) 
    
  }

  const filter = () => {
    
    

    
    const filteredByTech = []
    filtered.map(item=>{
      if(activeTech === 'React'){
        if(item.technologies.indexOf('React with hooks') !== -1 || item.technologies.indexOf('React with classes') !== -1){
          filteredByTech.push(item)
        }
      }

      if(activeTech ==='Django'){
        if(item.technologies.indexOf){}
      }
    })
    

       
    
     
    props.history.push('/')
  }

  const handleTechClick = (tech) => {
    if(tech === activeTech){
      setActiveTech("")
    } else{
      setActiveTech(tech)
    }
    
    
  }
  
  const types= [
    { key: 'all', active: activeType === 'all', name: 'All', onClick: () => handleTypeClick('all'), color: 'yellow', style: {color: 'black'}},
    { key: 'team-projects', active: activeType === 'Team Project', name: 'Team Projects', onClick: () => handleTypeClick('Team Project'), color: 'purple' , style: {color: 'black'}  },
    { key: 'course-projects', active: activeType === 'Course Project', name: 'Course Projects', onClick: () => handleTypeClick('Course Project'),color: 'blue' , style: {color: 'black'} },
    { key: 'personal-projects', active: activeType === 'Personal Day Project', name: 'Personal Projects', onClick: () => handleTypeClick('Personal Day Project'),color: 'green' , style: {color: 'black'} }
  ]

  const fontSize = '40px'
 
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <Menu id='top-menu' inverted items={types} />
      <Menu stackable>
        <Menu.Item
          active={activeTech==='React'}
          onClick={()=> handleTechClick('React')}
          style={{hover: 'black'}}
        >
          <i style={{fontSize: fontSize, margin: 'auto', cursor: 'pointer'}} id="react" className="devicon-react-original-wordmark colored skill-logo"></i>
        </Menu.Item>
        <Menu.Item
          active={activeTech==='Django'}
          onClick={()=> handleTechClick('Django')}
        >
          <i style={{fontSize: fontSize, margin: 'auto', cursor: 'pointer'}} id="django" className="devicon-django-plain-wordmark skill-logo"></i>
        </Menu.Item>
      </Menu>
    </div>
  )

}

export default TopMenu
