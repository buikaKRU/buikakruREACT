import axios from 'axios'


const axiosGet = axios.create({
    baseURL: 'http://localhost:8888/data-buikakru/wp-json/wp/v2/posts?categories=2'
    });

export default axiosGet;
