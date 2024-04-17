import axios from "axios";

// const searchApi = axios.create({
//     baseURL: "https://us1.locationiq.com/v1/search",
//     params: {
//         format:"json",
//         key: "pk.39b97d14f45df0662101ece11f302d74",
//     }
// }) 
const params = {
    format:"json",
    key: "pk.39b97d14f45df0662101ece11f302d74",
}

const searchApi = `https://us1.locationiq.com/v1/search?${new URLSearchParams(params)}`
export default searchApi;