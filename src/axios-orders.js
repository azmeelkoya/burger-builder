import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://build-my-burger-82563.firebaseio.com/'
});

export default instance;