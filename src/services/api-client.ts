import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'eedc033e56da44bb958a69270cd241a1'
    }
})