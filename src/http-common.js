import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:800",
    headers:{
        "Content-type": "application/json"
    }
});