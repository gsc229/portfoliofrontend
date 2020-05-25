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
            
            {tech == 'Python' && <i id="python" class="devicon-python-plain-wordmark skill-logo"></i> }
            {tech == 'Django' && <i id="django" class="devicon-django-plain-wordmark skill-logo"></i> }
            {tech == 'Postgres' && <i id="postgres" class="devicon-postgresql-plain-wordmark colored skill-logo"></i> }
            {tech == 'Bootstrap' && <i class="devicon-bootstrap-plain-wordmark colored skill-logo"></i> }
            {tech == 'Heroku' && <i class="devicon-heroku-plain-wordmark colored skill-logo"></i> }
            {tech == 'Amazon Web Services' && <i class="devicon-amazonwebservices-plain-wordmark colored skill-logo"></i> }
            
            {tech == 'Node' && <i id="node" class="devicon-nodejs-plain-wordmark skill-logo"></i> }
            {tech == 'Express' && <i class="devicon-express-original-wordmark skill-logo"></i> }
            {tech == 'MongoDB' && <i class="devicon-mongodb-plain-wordmark colored skill-logo"></i>}
            {tech == 'Mongoose' && <div id="mongoose" class="mongoose skill-logo">Mongoose</div> }
            {tech == 'React with hooks' && <i id="react" class="devicon-react-original-wordmark colored skill-logo"><p>+ Hooks</p></i> }
            {tech == 'React with classes' && <i id="react" class="devicon-react-original-wordmark colored skill-logo"><p>(classes)</p></i> }
            {tech == 'Sass' && <i class="devicon-sass-original colored skill-logo"></i> }     
            {tech == 'CSS 3' && <i class="devicon-css3-plain-wordmark colored skill-logo"></i> }
            {tech == 'Less' && <i class="devicon-less-plain-wordmark colored skill-logo"></i> }
            {tech == 'HTML 5' && <i class="devicon-html5-plain-wordmark"></i> }
            {tech == 'Axios' && <i id="axios" class="skill-logo"><p>Axios HTTP API</p></i> }
            {tech == 'Cloudinary' && <img id="cloudinary" class="skill-logo" src={cloudinary} alt=""/> }
            {tech == 'React Router' && <img id="react-router" src={reactRtr} alt="" class="skill-logo"/> }
            {tech == 'Styled Components' && <img id="styled-components" src={styledC} class="skill-logo" alt=""/>}
            {tech == 'Jinja' && <img id="jinja" alt="_images/jinja-logo.png" class="align-center" src={jinja}/> }
            {tech == 'Semantic UI' && <img src={semUI} class="ui mini right spaced image"/> }
            {tech == 'Material UI' &&  <img src={matUi} class="ui mini right spaced image"/> }
            {tech == 'Materialize' &&  <img src={matZ} class="ui mini right spaced image"/> }
            {tech == 'Digital Ocean' && <img id="digital-ocean" src={digO} class="skill-logo" alt=""/> }
    
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