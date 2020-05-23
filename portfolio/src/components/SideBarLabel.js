import React from 'react'
import {Divider, Form, Label} from 'semantic-ui-react'
export default function SideBarLabel() {
  return (
    <Form>
    <Form.Field inline>      
      <Label 

      pointing='left'>
      That name is taken!
      </Label>
    </Form.Field>
    

    
  </Form>
  )
}
