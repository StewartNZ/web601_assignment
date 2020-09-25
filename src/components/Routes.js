import React from 'react'
import {Route, Switch} from 'react-router-dom'

import NotFound from '../pages/NotFound'

function Routes(props) {


    const mapped = props.pages.map(page => <Route key={page.path} exact path={page.path} component={page.pageComponent} />)

    return (
        <Switch>
            {mapped}

            <Route path="/" component={NotFound} />
        </Switch>
    )
}

export default Routes
