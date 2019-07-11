import axios from 'axios'
import qs from 'qs';
import {notification} from "antd";

const key = 'keepOnlyOne';
/**
 *  接口请求数据时执行的方法
 *  接受参数为请求的路径apiUrl、请求接口配置参数configObj
 *
 * @param {String} apiUrl            用户传入的请求路径
 * @param {Object} configObj        用户传入的接口参数
 */
function getDataFromServer(apiUrl, configObj) {
    //用户传入的接口配置参数
    let {
        method = 'GET',
        params = {},
        data = {},
        timeout = 50000
    } = configObj;

    /**
     * 返回的Promise对象含有then、catch方法
     */
    return new Promise(function (resolve, reject) {
        const token = window.sessionStorage.getItem('token') || '';
        axios({
            url: apiUrl,
            method: method,
            params: params,
            data: qs.stringify(data),
            timeout: timeout,
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'token': token
            }
        }).then(function (response) {
            if(response){
                if(response.data && response.data.code === 200){
                    resolve(response);
                }else{
                    notification.warning({
                        message: '提示',
                        description:response.data.msg,
                    });
                }
            }else {
                //处理特殊的情况就是response返回什么也没有
                notification.error({
                    key,
                    message: '操作失败',
                    description: '服务器错误'
                });
                resolve(response);
            }
        }).catch(function (error) {
            notification.error({
                key,
                message: '操作失败',
                description: '网络异常,请稍后重试'
            });
            reject(error);
        })
    })
}

//登录
export function doLogin(configObj) {
    return getDataFromServer('/user/loginVerify', configObj);
}

export function getCampusList(configObj) {
    return getDataFromServer('/user/list',configObj)
}