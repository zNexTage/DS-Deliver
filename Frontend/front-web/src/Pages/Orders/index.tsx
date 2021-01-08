import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

import "./style.css";

import StepsHeader from './Components/StepsHeader'
import ProductsList from './Components/ProductsList'
import Product from '../../Types/Product'
import OrderLocationData from '../../Types/OrderLocationData'
import ProductsApi from '../../API/ProductsApi'
import OrderLocation from './Components/OrderLocation'
import OrderSummary from './Components/OrderSummary'
import Footer from "../../Components/Footer";
import Helpers from './Helpers';
import OrderApi from '../../API/OrderApi';

function Orders(): JSX.Element {
    const [listProducts, setListProducts] = useState<Array<Product>>([]);
    const [selectedProducts, setSelectedProducts] = useState<Array<Product>>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    useEffect(() => {
        ProductsApi.fetchProducts()
            .then((response) => {
                setListProducts(response.data);
            })
            .catch((err) => {
                toast.warning('Erro ao listar produtos!');
            })
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = Helpers.checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));

        const payload = {
            ...orderLocation!,
            products: productsIds
        }

        OrderApi.saveOrder(payload)
            .then((response) => {
                toast.error(`Pedido enviado com sucesso! N° ${response.data.id}`);
                setSelectedProducts([]);
            })
            .catch(() => {
                toast.warning('Erro ao enviar pedido');
            });
    }

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList
                    listProducts={listProducts}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation
                    onChangeLocation={(location) => {
                        setOrderLocation(location)
                    }}
                />
                <OrderSummary
                    onSubmit={handleSubmit}
                    amount={selectedProducts.length}
                    totalPrice={totalPrice}
                />
            </div>
            <Footer />
        </>
    );
}

export default Orders;