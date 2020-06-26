import React from 'react';
import {Link} from 'react-scroll'
import {Button} from 'semantic-ui-react'
import '../styles/css/navbar.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar = ({setVisible, visible, props}) => {

  const openSideBar = ()=>{
    
    
    setVisible(true)
  }
  
  return (
    <div fixed inverted id='nav-bar' className='nav-bar'>
      <div className='left-controls'>
        <Link 
        to='top-banner'
        smooth={true}
        duration={1000}
        >
          <h1>Greg Cameron</h1>
        </Link>
        
      </div>

      <div className='right-controls'>
      <Link 
        to='top-menu-scroll-to'
        smooth={true}
        duration={1000}
        onClick={()=> props.history.push('/') }
        >
          <h1>Projects</h1>
        </Link>
        {visible ? <Button inverted color='grey'>X</Button> 
        : /* <<< RY OPERATROR  */
        <Button
          as={Link}
          to='top-banner'
          
          smooth={true}
          offset={-50}
          duration={800}       
          inverted color='grey' 
          onClick={openSideBar} 
        >
          More Stuff
        </Button>}


      </div>

      
    </div>
  );
}

export default NavBar;
