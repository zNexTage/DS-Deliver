import "./style.css"
import Product from "../../../../Types/Product";
import Helpers from "../../Helpers";

type Props = {
    product: Product;
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}



function ProductCard({ product, onSelectProduct, isSelected }: Props): JSX.Element {
    return (
        <div
            onClick={() => onSelectProduct(product)}
            className={`order-card-container ${isSelected && 'selected'}`}>
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img
                alt={product.name}
                src={product.imageUri}
                className="order-card-image" />
            <h3>
                {Helpers.formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;