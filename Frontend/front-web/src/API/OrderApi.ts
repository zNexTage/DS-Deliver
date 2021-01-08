import axios from "axios"
import OrderPayload from "../Types/OrderPayload";
import API from './Api';

const ENDPOINT = '/orders';

const OrderApi = {
    saveOrder: (orderPayload: OrderPayload) => {
        return axios.post(`${API.API_URL}${ENDPOINT}`, orderPayload);
    }
}

export default OrderApi;