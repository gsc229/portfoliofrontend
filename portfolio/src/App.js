import React, {useState, useEffect, createRef} from 'react'
import axiosWithAuth from './utils/axiosWithAuth'
import {Route, Switch} from 'react-router-dom'
import {Link} from 'react-scroll'
import {Sidebar, Segment, Container, Button, Sticky, Ref} from 'semantic-ui-react'
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
// add all off the fontawesome categories to the library
library.add(fab, far, fas)

function App() {
  const [visible, setVisible] = useState(false)
  const [activeItem, setActiveItem] = useState()
  const [projects, setProjects] = useState()
  const [filtered, setFiltered] = useState()
  const [reFetch, callRefetch] = useState(false)
  const featured_projects = projects ? projects.filter(proj=> proj.featured) : ""
  const contextRef = createRef()

  // fetch data
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
  }, [reFetch]);


  return (
    <React.Fragment>  
          <NavBar setVisible={setVisible} callRefetch={callRefetch} /> 
          <Sidebar.Pushable className='main-container' as={Segment}>                        
            <SideBar visible={visible} setVisible={setVisible}/>                            
            <Sidebar.Pusher dimmed={visible} >

                 
                    {/* BANNER */}
                    <TopBanner featured_projects={featured_projects} />
                    {/*TOP MENU */}
                    <div id='top-menu-scroll-to' ></div>            
      
                    <Container id='main-projects-container'>
  
                    
                    <Route path='/' render={(props)=>
                    <TopMenu setFiltered={setFiltered} props={props} filtered={filtered} projects={projects}/>}/> 
                    
  
                      <Switch>
                        {/* PROJECTS */}
                        <Route exact path='/' render={(props)=> 
                        <Projects props={props} projects={filtered} />  } />
        
                        <Route path='/project/:id' render={(props)=> 
                        <ProjectView projects={projects} props={props} />  } />
                      </Switch>
                    </Container>
                 
                  
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        
     
      {/* TEMP FOR DEV ONLY */}                   
      <div style={{height: '8000px'}}>
        <Link to='nav-bar' style={{top: '100%', position: 'relative'}}>TOP</Link>
      </div>
      <footer style={{background: 'black', height: '100px', width: '100%'}} id='footer'></footer>        
    </React.Fragment>
    
  );
}



export default App;
