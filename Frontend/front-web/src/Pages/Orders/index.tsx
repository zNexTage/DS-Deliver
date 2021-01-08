import "./style.css"
import StepsHeader from './Components/StepsHeader'
import ProductsList from './Components/ProductsList'
import { useEffect, useState } from "react";
import Product from '../../Types/Product'
import OrderLocationData from '../../Types/OrderLocationData'
import ProductsApi from '../../API/ProductsApi'
import OrderLocation from './Components/OrderLocation/OrderLocation'

function Orders(): JSX.Element {
    const [listProducts, setListProducts] = useState<Array<Product>>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        ProductsApi.fetchProducts()
            .then((response) => {
                setListProducts(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList listProducts={listProducts}/>
            <OrderLocation
            onChangeLocation={(location)=>{
                setOrderLocation(location)
            }}
            />
        </div>
    );
}

export default Orders;