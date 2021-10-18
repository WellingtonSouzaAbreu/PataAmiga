import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'

import Adoptions from '../pages/Adoptions'
import Donations from './../pages/Donations'
import Events from './../pages/Events'
import Complaints from './../pages/Complaints'
import Home from './../pages/Home'
import Collaborators from './../pages/Collaborators'
import Animals from './../pages/Animals'
import TemporaryHome from './../pages/TemporaryHome'
import Interesteds from './../pages/Interesteds'

export default props =>
    <Switch>
        <Route exact path="/login" component={() => <h1>Login</h1>} />
        <Route exact path="/adocoes" component={Adoptions} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/doacoes" component={Donations} />
        <Route exact path="/eventos" component={Events} />
        <Route exact path="/denuncias" component={Complaints} />
        <Route exact path="/colaboradores" component={Collaborators} />
        <Route exact path="/animais" component={Animals} />
        <Route exact path="/interessados" component={Interesteds} />
        <Route exact path="/lar-temporario" component={TemporaryHome} />
        <Redirect from="*" to="/home" />
    </Switch>