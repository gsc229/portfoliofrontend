import React from 'react';
import {Image} from 'semantic-ui-react'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import 'semantic-ui-css/semantic.min.css'
import btr from  './images/bt_real_estate.jpg'

function App() {
  return (
    <React.Fragment>     
      <div className="App">
      <NavBar />
      <Image
        src={btr}
        as='a'
        size='small'
        href='#'
        target='_blank'
      />
      <img src='https://www.thechunkychef.com/wp-content/uploads/2016/09/Salted-Chocolate-Chip-Cookies-11-410x270.jpg' alt=""/>
      <img src={btr} alt=""/>
      <Projects /> 
      </div>
    </React.Fragment>
    
  );
}

export default App;
