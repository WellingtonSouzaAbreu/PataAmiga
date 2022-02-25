import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Main from '../components/MenuSidebar'

const isLogged = () => {
    // window.alert(!!localStorage.getItem('userData'))
    return !!localStorage.getItem('userData')
}

const PrivateRoute = props => isLogged()
    ? <Main><Route {...props} /></Main>
    : <Redirect to="/login" />

export default PrivateRoute
