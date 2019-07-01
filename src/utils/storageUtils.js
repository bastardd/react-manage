import store from 'store'//跨浏览器存储
const USER_KEY = 'user_key';

export default {
    //保持user
    saveUser (user){
        store.set(USER_KEY,user)
    },

    //读取user
    getUser () {
        return store.get(USER_KEY) || {}
    },

    //删除user
    removeUser (){
        store.remove(USER_KEY)
    }
}