import Product from "../../../../Types/Product";
import ProductCard from "../ProductCard"
import Helpers from '../../Helpers'
import "./style.css"

type Props = {
    listProducts: Array<Product>;
    selectedProducts: Array<Product>;
    onSelectProduct: (product: Product) => void;
}

function ProductsList({ listProducts, onSelectProduct, selectedProducts }: Props): JSX.Element {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {
                    listProducts.map((product) => (
                        <ProductCard
                            key={`${product.id}`}
                            product={product}
                            isSelected={Helpers.checkIsSelected(selectedProducts, product)}
                            onSelectProduct={onSelectProduct} />
                    ))
                }
            </div>
        </div>
    );
}

export default ProductsList;