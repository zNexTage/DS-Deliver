import axios from "axios"
import api from './Api'

const ENDPOINT = "/products";

const ProductsApi = {
    fetchProducts: () =>{
        return axios(`${api.API_URL}${ENDPOINT}`);
    }
} 

export default ProductsApi;
