import axios from 'axios';

class PrintifyAPI {
    static apiKey: string | undefined = process.env.REACT_APP_PRINTIFY_API_KEY;
    static storeId: string | undefined = process.env.REACT_APP_PRINTIFY_STORE_ID;
    static baseURL: string = 'https://api.printify.com/v1/';

    static async request(endpoint: string, method = 'get', data = {}, params = {}) {
        console.debug("Printify API Call:", endpoint, params, data);
        const url = `${this.baseURL}${endpoint}`;

        const headers = {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios({
                url,
                method,
                headers,
                params,
                data
            });
            return response.data;
        } catch (err) {
            console.error(`Error with Printify API request to ${endpoint}:`, err);
            throw err;
        }
    }

    // Example method to get products
    static async getProducts() {
        const endpoint = `/shops/${this.storeId}/products.json`;
        try {
            return await this.request(endpoint);
        } catch (err) {
            console.error("Error fetching products", err);
            throw err;
        }
    }


}

export default PrintifyAPI;
