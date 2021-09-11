import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'

import Adoptions from '../pages/Adoptions'
import Donations from './../pages/Donations'
import Events from './../pages/Events'
import Complaints from './../pages/Complaints'
// import ControlPanel from './../pages/ControlPanel'
import Collaborators from './../pages/Collaborators'
// import Configuration from './../pages/Configuration'
import Animals from './../pages/Animals'

export default props =>
    <Switch>
        <Route exact path="/adocoes" component={Adoptions} />
        <Route exact path="/doacoes" component={Donations} />
        <Route exact path="/eventos" component={Events} />
        <Route exact path="/denuncias" component={Complaints} />
        <Route exact path="/colaboradores" component={Collaborators} />
        <Route exact path="/animais" component={Animals} />
        <Redirect from="*" to="/" />
    </Switch>