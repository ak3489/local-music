// request.js
import VeryAxios from 'very-axios'
// 此处 veryAxiosConfig, axiosConfig 未定义，下面会详细介绍 veryAxiosConfig
import veryAxiosConfig from './veryAxiosConfig';
let axiosConfig ={
    baseURL: process.env.BASEAPI,
}
const request = new VeryAxios(veryAxiosConfig, axiosConfig)

export default {
    albumList: (params) => request.GET('/music/albumList', params),
    albumDetails: (params) => request.GET('/music/albumDetails', params),

    singerList: (params) => request.GET('/music/singerList', params),
    singerPage: (params) => request.GET('/music/singerPage', params),
    // add: (params) => request.POST('/user', params),
    // update: (id, params) => request.PUT(`/user/${id}`, params),
    // delete: (id) => request.DELETE(`/user/${id}`),
    // deletes: (params) => request.DELETE(`/user/`, params),
    // upload: (params) => request.FORMDATA(`/user/`, params),
}