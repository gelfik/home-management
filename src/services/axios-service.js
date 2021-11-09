import axios from "axios";

const initAxios = () => {
    const $axios = axios.create({
        baseURL: 'https://dispex.org/api/vtest'
    })
    $axios.defaults.headers.post['Content-Type'] = 'application/json';
    $axios.defaults.headers.get['Content-Type'] = 'application/json';
    return $axios;
}

export default initAxios;