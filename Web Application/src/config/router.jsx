import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'

import Adoptions from '../pages/Adoptions'
import Auth from '../pages/Auth'
import Donations from './../pages/Donations'
import Events from './../pages/Events'
import Complaints from './../pages/Complaints'
import Collaborators from './../pages/Collaborators'
import Animals from './../pages/Animals'
import TemporaryHome from './../pages/TemporaryHome'
import Interesteds from './../pages/Interesteds'
// import NotFound from './../pages/NotFound'

import PrivateRoute from './PrivateRoute'

export default props =>
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Auth} />
            <PrivateRoute exact path="/adocoes" component={Adoptions} />
            <PrivateRoute exact path="/doacoes" component={Donations} />
            <PrivateRoute exact path="/eventos" component={Events} />
            <PrivateRoute exact path="/denuncias" component={Complaints} />
            <PrivateRoute exact path="/colaboradores" component={Collaborators} />
            <PrivateRoute exact path="/animais" component={Animals} />
            <PrivateRoute exact path="/interessados" component={Interesteds} />
            <PrivateRoute exact path="/lar-temporario" component={TemporaryHome} />
            <Redirect from="*" to="/login" />
        </Switch>
    </BrowserRouter>