import React from 'react'
import {Create, SimpleForm, ImageField, TextField, NumberField} from "react-admin"

function CreateElement(props) {
  return (
    <Create title='Create an element' {...props}>
        <SimpleForm>
            <TextField source='title'/>
            <ImageField source='image'/>
            <ImageField source='specialistPhoto' />
            <NumberField source='price' />
            <NumberField source='rating' />
            <TextField source='specialist.name' />
        </SimpleForm>

    </Create>
  )
}

export default CreateElement