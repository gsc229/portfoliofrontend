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
import FeaturedProjects from './components/FeaturedProjects'
import TeamProjects from './components/TeamProjects'
import CourseProjects from './components/CourseProjects'
import PersonalProjects from './components/PersonalProjects'


import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)

function App() {
  const [visible, setVisible] = useState(false)
  const [activeItem, setActiveItem] = useState()
  const [projects, setProjects] = useState()
  
  const featured_projects = projects ? projects.filter(proj=> proj.featured) : ""

  console.log('Featured project : ',featured_projects)
  console.log("PROJECTS: ", projects)
  useEffect(() => {
    axiosWithAuth()
    .get('/projects/')
    .then(res=>{
      console.log(res)
      setProjects(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);
  return (
    <React.Fragment>  
      <NavBar setVisible={setVisible} />
      <Route path='/' component={TopMenu}/>
         
      <Sidebar.Pushable as={Segment}> 
        <SideBar visible={visible} setVisible={setVisible}/>    
        <Sidebar.Pusher dimmed={visible} > 
        
          
              <Switch>
                <Route path='/featured-projects' render={(props)=> <FeaturedProjects props={props} featured_projects={featured_projects} />  } />
                <Route path='/team-projects' render={(props)=> <TeamProjects props={props} team_projects={"none"} />  } />
                <Route path='/course-projects' render={(props)=> <CourseProjects props={props} course_projects={"none"} />  } />
                <Route path='/personal-projects' render={(props)=> <PersonalProjects props={props} personal_projects={"none"} />  } />
                <Route path='/all-projects' render={()=> <Projects projects={projects} />  } />
              </Switch>
            
                
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      
    </React.Fragment>
    
  );
}



export default App;
