import React, {useState, useEffect} from 'react'
import axiosWithAuth from './utils/axiosWithAuth'
import {Route, Switch} from 'react-router-dom'
import {Sidebar, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './styles/css/try.css'


import NavBar from './components/NavBar'
import TopMenu from './components/TopMenu'
import SideBar from './components/SideBar'
import Projects from './components/Projects'
import TopBanner from './components/TopBanner'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)

function App() {
  const [visible, setVisible] = useState(false)
  const [activeItem, setActiveItem] = useState()
  const [projects, setProjects] = useState()
  const [filtered, setFiltered] = useState()
  const featured_projects = projects ? projects.filter(proj=> proj.featured) : ""

  console.log('Featured project : ',featured_projects)
  console.log("PROJECTS: ", projects)

  useEffect(() => {
    axiosWithAuth()
    .get('/projects/')
    .then(res=>{
      console.log(res)
      setProjects(res.data)
      setFiltered(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);


  return (
    <React.Fragment>  
      <NavBar setVisible={setVisible} />
      
         
      <Sidebar.Pushable as={Segment}> 
        <SideBar visible={visible} setVisible={setVisible}/>    
        <Sidebar.Pusher dimmed={visible} > 
        
              <TopBanner featured_projects={featured_projects} />
              <Route path='/' render={()=><TopMenu setFiltered={setFiltered} projects={projects}  />}/>
              <Switch>
                
                <Route path='/' render={()=> <Projects projects={filtered} />  } />
              </Switch>
            
                
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      
    </React.Fragment>
    
  );
}



export default App;
