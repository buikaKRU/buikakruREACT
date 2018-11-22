import axios from 'axios'


const axiosGet = axios.create({
    baseURL: 'http://data.buikakru.com/wp-json/wp/v2/posts?categories=2',
    });

export default axiosGet;