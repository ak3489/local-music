let  veryAxiosConfig = {
    // 发生错误时，是否显示提示
    tip: true, // default

    // 如何显示提示，可以传入显示message的方法
    tipFn: (message) => { 
        console.log('tipFn message',message);
    },

    errorHandlers: {
        // 支持 400/401/403/404/405/413/414/500/502/504/任意其他 errno
        // 401: () => {}
        // 403: () => {}
        // ...
    },

    // 内置错误提示语言: 'zh-cn'/'en'
    lang: 'zh-cn', // default

    // 请求前的自定义操作
    beforeHook: (config) => { },

    // 请求后的自定义操作
    afterHook: (responce, isError) => { },

    // 从请求响应中获取错误状态，默认取errno
    // 如果传入的不是一个函数也会使用默认值
    getResStatus: (resData) => resData.code, // default

    // 从请求响应中获取错误消息，默认取errmsg
    // 如果传入的不是一个函数也会使用默认值
    getResErrMsg: (resData) => resData.msg, // default

    // 从请求响应中获取返回数据，默认取data
    // 如果传入的不是一个函数也会使用默认值
    getResData: (resData) => resData, // default

    // 是否开启取消重复请求
    cancelDuplicated: false, // default

    // 如果开启了取消重复请求，如何生成重复标识
    duplicatedKeyFn: (config) => `${config.method}${config.url}` // default
}
export default veryAxiosConfig