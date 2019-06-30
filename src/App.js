/*
* 应用的跟组件*/
import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

export default class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>{/*只会匹配一个*/}
                    <Route path='/login' component={Login}/>
                    <Route path='/' component={Admin}/>
                </Switch>
            </BrowserRouter>
        )
    }
}