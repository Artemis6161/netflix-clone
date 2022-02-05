import axios from "axios";
// const endpoint = '/api/pool/';
const instance = axios.create({
baseURL:"https://api.themoviedb.org/3",
});
// instance.get('/foo-bar')
export default instance;