import React from 'react';
import axios from 'axios'
import { Button, Form, Segment, Container, Header } from 'semantic-ui-react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../styles/css/contact.css'

export default function Contact() {


	return (
		<Container id='contact-container'> 
            
		    <Segment inverted>
            <Container id='form-header' textAlign='center'>
                <Header inverted as='h2'>What can I do for you?</Header>
                <Header inverted as='h3'>Use the form, or reach me at:&nbsp;&nbsp;<strong style={{color: "yellow"}}>gsc229@gmail.com</strong></Header>
            </Container>
    			<Form method='POST' action='https://formspree.io/gsc229@gmail.com'  inverted>
    				<Form.Group widths="equal">
    					<Form.Input required fluid label="Your name" name='name' placeholder="First & Last Name" />
    					<Form.Input required type='email' name='email' fluid label="Your email" placeholder="Enter a vailid email address" />
    				</Form.Group>
                    <Form.Input required label="Subject" name='message' placeholder="Enter subject" />
                    <Form.TextArea required label="Your message:" placeholder="Type away..."/>
    				
    				<Button type="submit">Send Message</Button>
                    <Button type="reset">Clear Form</Button>
    			</Form>
    		</Segment>
		</Container>
	);
}
