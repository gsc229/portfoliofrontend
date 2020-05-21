import React from 'react';
import {Button} from 'semantic-ui-react'

const NavBar = ({setVisible}) => {


  return (
    <div>
      <h1>Navbar</h1>
      <Button onClick={()=>{setVisible(true)}} >More Projects</Button>      
    </div>
  );
}

export default NavBar;
