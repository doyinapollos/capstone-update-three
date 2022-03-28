import React from 'react'
import {Edit, SimpleForm, ImageField, TextField, NumberField} from "react-admin"

function EditElement(props) {
  return (
    <Edit title='Edit element' {...props}>
        <SimpleForm>
        <TextField disabled source='id'/>
            <TextField source='title'/>
            <ImageField source='image'/>
            <ImageField source='specialistPhoto' />
            <NumberField source='price' />
            <NumberField source='rating' />
            <TextField source='specialist.name' />
        </SimpleForm>

    </Edit>
  )
}

export default EditElement