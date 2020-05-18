import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'
import NavBar from './components/NavBar'
import Projects from './components/Projects'


function App() {

 

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
      <NavBar />
      <Projects /> 
      <Button variant='contained' color='primary' >PUSH ME</Button>
      </div>
    </React.Fragment>
    
  );
}

export default App;
