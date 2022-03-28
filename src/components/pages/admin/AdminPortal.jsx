import React from 'react'
import {Admin, Resource} from "react-admin"
import restProvider from "ra-data-simple-rest"
import ElementList from '../../elements/ElementList'
import CreateElement from '../../elements/CreateElement'
import EditElement from '../../elements/EditElement'
import UserList from '../../users/UserList'
import CreateUser from '../../users/CreateUser'
import EditUser from '../../users/EditUser'

function AdminPortal() {
  return <Admin dataProvider={restProvider("http://localhost:3000")}>
          <Resource name="elements" 
            list={ElementList} 
            create={CreateElement} 
            edit={EditElement} />

          <Resource name="users" 
            list={UserList} 
            create={CreateUser} 
            edit={EditUser} />

        </Admin>
        

    
}

export default AdminPortal