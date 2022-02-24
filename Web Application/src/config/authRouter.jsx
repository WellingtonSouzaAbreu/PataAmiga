import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Auth from '../pages/Auth'
import Main from '../pages/Main'

export default props =>
    <Switch>
        <Route exact path="/login" component={Auth} />
        <Route exact path="/main" component={Main} />
        <Redirect from="*" to="/login" />
    </Switch>