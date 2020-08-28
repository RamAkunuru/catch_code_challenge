import axios from 'axios';

export const BASE_URL = 'http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json';

const Api = {
    products: {
        getProducts() {
            return axios.get(`${BASE_URL}`);
        }
    }
};

export default Api;
