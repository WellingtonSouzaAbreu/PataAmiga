import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import MenuSidebar from '../components/MenuSidebar'

const isLogged = () => {
    // window.alert(!!localStorage.getItem('userData'))
    return !!localStorage.getItem('userData')
}

const PrivateRoute = props => isLogged()
    ? <MenuSidebar><Route {...props} /></MenuSidebar>
    : <Redirect to="/login" />

export default PrivateRoute
