import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll'
import {Button, Container, Menu} from 'semantic-ui-react'
import '../styles/css/navbar.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavBar = ({setVisible}) => {


  return (
    <div fixed inverted id='nav-bar' className='nav-bar'>
      <Link 
      to='top-menu-scroll-to'
      smooth={true}
      duration={1000}
      >
        <h1>Greg Cameron</h1>
      </Link>
      <Button onClick={()=>{setVisible(true)}} >More Projects</Button>  
      <Link to='/featured-project' >Featured</Link>
    </div>
  );
}

export default NavBar;
