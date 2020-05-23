import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavBar = ({setVisible}) => {


  return (
    <div>
      <h1>Navbar</h1>
      <Button onClick={()=>{setVisible(true)}} >More Projects</Button>  
      <Link to='/featured-project' >Featured</Link>
    </div>
  );
}

export default NavBar;
