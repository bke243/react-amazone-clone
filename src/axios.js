import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-e-clone-d0002.cloudfunctions.net/api",
    //baseURL: "http://localhost:5001/e-clone-d0002/us-central1/api",
});

export default instance;