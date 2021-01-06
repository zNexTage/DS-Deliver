import "./style.css"
import StepsHeader from './Components/StepsHeader'
import ProductsList from './Components/ProductsList'
import { useEffect, useState } from "react";
import Product from '../../Types/Product'
import ProductsApi from '../../API/ProductsApi'

function Orders(): JSX.Element {
    const [listProducts, setListProducts] = useState<Array<Product>>([]);

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
        </div>
    );
}

export default Orders;