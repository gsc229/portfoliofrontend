import React, {useState, useEffect} from 'react'
import axiosWithAuth from './utils/axiosWithAuth'
import {Route} from 'react-router-dom'
import {Sidebar, Segment, Container, Item} from 'semantic-ui-react'
import {Link} from 'react-scroll'
import 'semantic-ui-css/semantic.min.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import NavBar from './components/NavBar'
import TopMenu from './components/TopMenu'
import SideBar from './components/SideBar'
import FeaturedProjectSection from './components/FeaturedProjectSection'
import Projects from './components/Projects'
import ProjectView from './components/ProjectView'
import TopBanner from './components/TopBanner'
import Contact from './components/Contact'
import './styles/css/main.css'
import './styles/css/current_project.css'
// add all off the fontawesome categories to the library
library.add(fab, far, fas)

function App() {
  
  const [visible, setVisible] = useState(false)
  const [projects, setProjects] = useState()
  const [filtered, setFiltered] = useState()
  const [reFetch, callRefetch] = useState(false)
  const featured_projects = projects ? projects.filter(proj=> proj.featured) : ""
  console.log('featured_project: ', featured_projects)

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
      <Route path='/' render={(props)=> 
      <NavBar props={props} setVisible={setVisible} visible={visible} callRefetch={callRefetch} />   } />
      

      <Sidebar.Pushable className='main-container' as={Segment}> 
      {/* SIDEBAR */}
      <Route path='/' render={(props)=>
      <SideBar props={props} visible={visible} setVisible={setVisible}/> } />
        <Sidebar.Pusher dimmed={visible} >
      
            {/* BANNER */}
            <Route path='/' render={(props)=> 
              <TopBanner props={props} visible={visible} setVisible={setVisible} />
            }/>


            {/* FEATURED SECTON */}

            {featured_projects.length > 0 &&
            <FeaturedProjectSection projects={projects} />}



            {/*TOP MENU DUMMY DIV */}
            <div id='top-menu-scroll-to' ></div>         
            <Container id='main-projects-container'>
                {/* TOP MENU */}
                {filtered && <Route exact path='/' render={(props)=>
                <TopMenu setFiltered={setFiltered} props={props} filtered={filtered} projects={projects}/>}/>}
        
                {/* PROJECTS */}
                <Route exact path='/' render={(props)=> 
                <Projects props={props} projects={filtered} />} />
                
                {/* PROJECT */}
                <Route path='/project/:id' render={(props)=> 
                <ProjectView projects={projects} props={props} />} />

                {/* CONTACT */}
                <Route path='/contact' render={(props)=>
                <Contact  props={props} />}/>
            </Container>
                  
        </Sidebar.Pusher>
      </Sidebar.Pushable> 
    </React.Fragment> 
  );
}



export default App;
