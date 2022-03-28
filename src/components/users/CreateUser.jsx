import React from 'react'
import {Create, SimpleForm,EmailField, TextField,} from "react-admin"

function CreateUser(props) {
  return (
    <Create title='Create a user' {...props}>
        <SimpleForm>
            <TextField source='name'/>
            <EmailField source='email' />
        </SimpleForm>

    </Create>
  )
}

export default CreateUser