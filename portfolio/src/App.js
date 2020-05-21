import React from 'react';
import {Image} from 'semantic-ui-react'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import 'semantic-ui-css/semantic.min.css'


function App() {



  return (
    <React.Fragment>     
      <div className="App">
      <NavBar />
      <Image
        src='./images/cloudinary.jpg'
        as='a'
        size='medium'
        href='http://google.com'
        target='_blank'
      />
      <img src={'./images/cloudinary.jpg'} alt=""/>
      <Projects /> 
      
      </div>
    </React.Fragment>
    
  );
}

export default App;
