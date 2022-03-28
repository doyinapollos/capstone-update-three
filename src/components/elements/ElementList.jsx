import React from 'react'
import {List, Datagrid, ImageField, TextField, NumberField, EditButton, DeleteButton} from "react-admin"


function ElementList(props) {
  return <List {...props}>
            <Datagrid>

                <TextField source='id' />
                <ImageField source='image' />
                <TextField source='title' />
                <ImageField source='specialistPhoto' />
                <NumberField source='price' />
                <NumberField source='rating' />
                <TextField source='specialist.name' />
                <EditButton basePath='/elements' />
                <DeleteButton basePath='/elements' />

            </Datagrid>

        </List>

    
  
}

export default ElementList