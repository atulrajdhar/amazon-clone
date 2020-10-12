import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-9e662/us-central1/api" // URL of the cloud function
});

export default instance;