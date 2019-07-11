import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import FacultyHome from './facultys-home'
import FacultyAddAndUpdate from './facultys-addAndUpdate'
import FacultyDetail from './facultys-detail'

import './facultys.less'

/**
 * 院系管理
 */
export default class Facultys extends React.Component{
    render (){
        return (
            <Switch>
                <Route path='/facultys' component={FacultyHome} exact/>{/*路径完全匹配*/}
                <Route path='/facultys/addAndUpdate' component={FacultyAddAndUpdate}/>
                <Route path='/facultys/detail' component={FacultyDetail}/>
                <Redirect to='/facultys'/>
            </Switch>
        )
    }
}
