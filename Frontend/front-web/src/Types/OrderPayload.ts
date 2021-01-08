import OrderLocationData from './OrderLocationData';

type ProductId = {
    id: number;
}

type OrderPayload = {
    products: Array<ProductId>;
} & OrderLocationData; //Realiza uma merge com OrderLocationData

export default OrderPayload;