import axios from 'axios';

// const searchImages= () => {

// }

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        // Authorization: 'you're key will go here'
    }
});