/**
 * redux库的主模块
 *  1、createStore() : 接收的参数为reducer函数，返回一个store对象
 *  2、combineReducers()
 */

/**
 * 根据指定的reducer函数创建一个指定store对象并返回
 * @param reducer
 * @returns {{getState: getState, dispatch: dispatch, subscribe: subscribe}}
 */
export function createStore(reducer) {
    //初始化，值为调用reducer函数返回的结果(外部指定的默认值)
    let state = reducer(undefined,{type : '@@redux/init'})
    //用来存储监听state更新回调
    const listeners = []

    function getState() {
        return state
    }

    /**
     * 分发action，出发reducer调用，产生新的state
     * 1、触发reducer调用，得到新的state
     * 2、保存新的state
     * 3、调用所有已存在的监视回调函数
     * @param action
     */
    function dispatch(action) {
        const newState = reducer(state,action)
        state = newState
        listeners.forEach(listener => listener())
    }

    /**
     * 绑定内部state改变的监听回调
     * @param listener
     */
    function subscribe(listener) {
        //保存到缓存listener的容器数组中
        listeners.push(listener)
    }

    //返回state
    return {
        getState,
        dispatch,
        subscribe
    }
}

/**
 * 整合传入参数对象中的多个reducer的函数，返回一个新的reducer
 * 新的reducer管理的总状态 ： ｛r1 : state1,r2 : state2｝
 * @param reducers
 * @returns {Function}
 */
export function combineReducers(reducers) {
    return (state,action) => {

    }
}