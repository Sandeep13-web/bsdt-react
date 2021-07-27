import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Registration from './component/registration';
import Dashboard from './component/dashboard';
import Detail from './component/detail';
import Header from './component/header';

function Routes({isAuth , logOut}) {

    if(!isAuth){
        return <Redirect to='/login' />;
    }
    return (
        <>
        <Header logOut={logOut}  />
            <Switch>
                <Route path='/' component={Dashboard} exact />
                <Route path='/add-student' component={Registration} exact />
                <Route path='/student-details' component={Detail} exact />
            </Switch>

        </>
    )
}

export default Routes
