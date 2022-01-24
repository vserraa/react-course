import axios from "axios";

const KEY = "AIzaSyDC4NbI_pKiE715aFeDOtuCv3xzk76tl4g";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResult: 5,
        key: KEY
    }
});