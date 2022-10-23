import axios from "axios";

async function httpGetRequest(url) {
    const response = await axios.get(url);
    return response.data;
}

export {httpGetRequest};