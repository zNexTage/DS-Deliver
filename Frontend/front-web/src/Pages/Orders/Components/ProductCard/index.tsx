import "./style.css" 
import Product from "../../../../Types/Product";

type Props = {
    product: Product
}

function formatPrice(price:number) {
    const formatter = new Intl.NumberFormat("pt-BR", {
        style:'currency',
        currency:"BRL"
    })

    return formatter.format(price)
}

function ProductCard({ product }: Props): JSX.Element {
    return (
        <div className="order-card-container">
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img 
            alt={product.name}
            src={product.imageUri}
            className="order-card-image" />
            <h3>
                {formatPrice(product.price)}
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