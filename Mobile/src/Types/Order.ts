import Product from "./Product";

type Order = {
    id:number;
    address:string;
    latitude:number;
    longitude:number;
    moment:string;
    status: string;
    products:Array<Product>;
    total:number;
}

export default Order;