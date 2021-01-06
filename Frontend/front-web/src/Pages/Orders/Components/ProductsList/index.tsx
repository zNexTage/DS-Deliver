import Product from "../../../../Types/Product";
import ProductCard from "../ProductCard"
import "./style.css"

type Props = {
    listProducts: Array<Product>
}

function ProductsList({ listProducts }: Props): JSX.Element {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {
                    listProducts.map((product)=> <ProductCard key={`${product.id}`} product={product}/> )
                }
            </div>
        </div>
    );
}

export default ProductsList;