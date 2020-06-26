import React from 'react'
import semUI from '../images/semantic-ui.png'
import matUi from '../images/material-ui.png'
import matZ from '../images/materialize.png'
import styledC from '../images/styled-components.png'
import reactRtr from '../images/react-router-red.png'
import jinja from '../images/jinja-logo.png'
import cloudinary from '../images/cloudinary_logo_for_white_bg.svg'
import digO from '../images/digital-ocean.png'
export default function TechLegend({tech}) {
    
    
    return (
        <div>
            
            {tech === 'Python' && <i id="python" className="devicon-python-plain-wordmark skill-logo"></i> }
            {tech === 'Django' && <i id="django" className="devicon-django-plain-wordmark skill-logo"></i> }
            {tech === 'Postgres' && <i id="postgres" className="devicon-postgresql-plain-wordmark colored skill-logo"></i> }
            {tech === 'Bootstrap' && <i className="devicon-bootstrap-plain-wordmark colored skill-logo"></i> }
            {tech === 'Heroku' && <i className="devicon-heroku-plain-wordmark colored skill-logo"></i> }
            {tech === 'Amazon Web Services' && <i className="devicon-amazonwebservices-plain-wordmark colored skill-logo"></i> }
            
            {tech === 'Node' && <i id="node" className="devicon-nodejs-plain-wordmark skill-logo"></i> }
            {tech === 'Express' && <i className="devicon-express-original-wordmark skill-logo"></i> }
            {tech === 'MongoDB' && <i className="devicon-mongodb-plain-wordmark colored skill-logo"></i>}
            {tech === 'Mongoose' && <div id="mongoose" className="mongoose skill-logo">Mongoose</div> }
            {tech === 'React with hooks' && <i id="react" className="devicon-react-original-wordmark colored skill-logo"><p>+ Hooks</p></i> }
            {tech === 'React with classNamees' && <i id="react" className="devicon-react-original-wordmark colored skill-logo"><p>(classes)</p></i> }
            {tech === 'Sass' && <i className="devicon-sass-original colored skill-logo"></i> }     
            {tech === 'CSS 3' && <i className="devicon-css3-plain-wordmark colored skill-logo"></i> }
            {tech === 'Less' && <i className="devicon-less-plain-wordmark colored skill-logo"></i> }
            {tech === 'HTML 5' && <i className="devicon-html5-plain-wordmark skill-logo"></i> }
            {tech === 'Axios' && <i id="axios" className="skill-logo"><p>Axios HTTP API</p></i> }
            {tech === 'Cloudinary' && <img id="cloudinary" className="skill-logo" src={cloudinary} alt=""/> }
            {tech === 'React Router' && <img id="react-router" src={reactRtr} alt="" className="skill-logo"/> }
            {tech === 'Styled Components' && <img id="styled-components" src={styledC} className="skill-logo" alt=""/>}
            {tech === 'Jinja' && <img id="jinja" alt="_images/jinja-logo.png" className="align-center skill-logo" src={jinja}/> }
            {tech === 'Semantic UI' && <img src={semUI} className="ui mini right spaced image skill-logo" alt="" /> }
            {tech === 'Material UI' &&  <img src={matUi} className="ui mini right spaced image skill-logo" alt="" /> }
            {tech === 'Materialize' &&  <img src={matZ} className="ui mini right spaced image skill-logo" alt="" /> }
            {tech === 'Digital Ocean' && <img id="digital-ocean" src={digO} className="skill-logo" alt=""/> }
    
        </div>
    )
}


/* 
    ('Python', 'Python'),     
    ('Django','Django'),      
    ('React with hooks','React with hooks'),     
    ('React with classes','React with classes'),       
    ('React Router','React Router'),      
    ('JavaScript','JavaScript'),   
    ('Node','Node'),      
    ('Express','Express'),    
    ('MongoDB','MongoDB'),       
    ('Mongoose','Mongoose'),      
    ('Angular','Angular'),       
    ('Postgres','Postgres'),       
    ('Bootstrap','Bootstrap'),     
    ('Heroku','Heroku'),
    ('Amazon Web Services','Amazon Web Services'),
    ('Digital Ocean','Digital Ocean'),    
    ('Jinja','Jinja'),    
    ('Styled Components','Styled Components'),
    ('CSS 3','CSS 3'),    
    ('Material UI','Material UI'),//
    ('Semantic UI', 'Semantic UI'), //       
    ('Materialize','Materialize'), //
    ('Sass','Sass'),
    ('Less','Less'),    
    ('HTML 5','HTML 5'),    
    ('Axios','Axios'),
    ('Cloudinary', 'Cloudinary')
    ('None','None')

*/