import axios from "axios";

const KEY = "AIzaSyBs-_IcM-Fp2e1GfQPLxGAUfOBX9sMHRZ8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
