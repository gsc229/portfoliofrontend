import React, {useState} from 'react';
import {Image, Sidebar, Segment, Header} from 'semantic-ui-react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Projects from './components/Projects'
import 'semantic-ui-css/semantic.min.css'
import btr from  './images/bt_real_estate.jpg'

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <React.Fragment>     
      <div className="App" style={{"height": "1000px"}}>
      <NavBar setVisible={setVisible} />
      <Sidebar.Pushable as={Segment}> 
      <Sidebar.Pusher>
      <SideBar visible={visible} setVisible={setVisible}/>         
        <Segment basic>      
          <Projects /> 
        </Segment>
      </Sidebar.Pusher>
      </Sidebar.Pushable>
      </div>
    </React.Fragment>
    
  );
}

export default App;
