import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer';

//向外暴露store
export default createStore(reducer,applyMiddleware(thunk))