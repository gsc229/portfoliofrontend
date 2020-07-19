import React, {useState} from 'react'
import { Menu, Divider, ItemMeta } from 'semantic-ui-react'
import {filter} from './menuHelpers' // filters based on type of project and type of tech selected (react or django)


const TopMenu = ({setFiltered, filtered, projects}) => {

  const [activeType, setActiveType] = useState('a')
  const [activeTech, setActiveTech] = useState("")

 
  const handleTechClick = (tech) => {
    if(tech === activeTech){
      setActiveTech("")
      filter(activeType, null, setActiveType, setFiltered, filtered, projects)
    } else{
      setActiveTech(tech)
      filter(activeType, tech, setActiveType, setFiltered, filtered, projects)
    }
  }

 const handleTypeClick = (type) => {
   filter(type, '', setActiveType, setFiltered, filtered, projects)
   setActiveTech('')
 }
  
  const types= [
  { 
    key: 'all', 
    active: activeType === 'a', 
    name: 'All', 
    onClick: () => {handleTypeClick('a')}, 
    color: 'yellow', 
    style: {color: 'black'}
  },
  { 
    key: 'team-projects', 
    active: activeType === 't', 
    name: 'Team Projects', 
    onClick: () => {handleTypeClick('t')}, 
    color: 'purple' , 
    style: {color: 'black'}  
  },
  { 
    key: 'course-projects', 
    active: activeType === 'c', 
    name: 'Course Projects', 
    onClick: () => {handleTypeClick('c') },
    color: 'blue' , 
    style: {color: 'black'} 
  },
  { 
    key: 'personal-projects', 
    active: activeType === 'p', 
    name: 'Personal Projects', 
    onClick: () => {handleTypeClick('p') },
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
