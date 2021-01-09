import axios, { AxiosPromise } from 'axios';
import Order from '../Types/Order';
import Api from './Api';

const ENDPOINT = '/orders';

const OrdersApi = {
    fetchOrders: (): AxiosPromise<Array<Order>> => {
        return axios(`${Api.API_URL}${ENDPOINT}`)
    },
    confirmDelivery: (orderId: number):AxiosPromise<any> => {
        return axios.put(`${Api.API_URL}${ENDPOINT}/${orderId}/delivered`)
    }
}

export default OrdersApi;