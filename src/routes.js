import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Edit from './pages/Edit';
import New from './pages/New'

export default function Routes(){

    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/edit" component={Edit}/>
            <Route path="/new" component={New}/>
        </Switch>
        
        </BrowserRouter>
    )
}
