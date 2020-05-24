import React, {useState, useEffect} from 'react'
import axiosWithAuth from './utils/axiosWithAuth'
import {Route, Switch} from 'react-router-dom'
import {Link} from 'react-scroll'
import {Sidebar, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './styles/css/main.css'


import NavBar from './components/NavBar'
import TopMenu from './components/TopMenu'
import SideBar from './components/SideBar'
import Projects from './components/Projects'
import ProjectView from './components/ProjectView'
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
              {/* BANNER */}
              <TopBanner featured_projects={featured_projects} />
              {/*TOP MENU */}
              <Route path='/' render={(props)=>
              <TopMenu setFiltered={setFiltered} props={props} filtered={filtered} projects={projects}/>}/>

              <Switch>
                {/* PROJECTS */}
                <Route path='/' render={()=> 
                <Projects projects={filtered} />  } />
                <Route path='/project/:id' render={()=> 
                <ProjectView projects={projects} />  } />
              </Switch>
                
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <div style={{height: '8000px'}} >
        <Link to='nav-bar' style={{top: '100%', position: 'relative'}}>TOP</Link>
      </div>
      <footer style={{background: 'black', height: '100px', width: '100%'}} id='footer'></footer>        
    </React.Fragment>
    
  );
}



export default App;
