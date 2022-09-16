import axios from "axios";
const TOKEN = "cchffs2ad3i4bkk55neg"
export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})