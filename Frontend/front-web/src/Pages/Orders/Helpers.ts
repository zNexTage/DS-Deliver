import Product from '../../Types/Product'

const Helpers = {
    checkIsSelected: (selectedProducts: Array<Product>, product: Product) => {
        return selectedProducts.some(item => item.id === product.id)
    },
    formatPrice: (price: number) => {
        const formatter = new Intl.NumberFormat("pt-BR", {
            style: 'currency',
            currency: "BRL"
        })

        return formatter.format(price)
    }
}

export default Helpers;