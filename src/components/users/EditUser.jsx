import React from 'react'
import {Edit, SimpleForm,EmailField, TextField} from "react-admin"

function EditUser(props) {
  return (
    <Edit title='Edit user' {...props}>
        <SimpleForm>
        <TextField disabled source='id'/>
            <TextField source='name'/>
            <EmailField source='email' />
        </SimpleForm>

    </Edit>
  )
}

export default EditUser