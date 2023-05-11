import { Product } from './home/Home';
import Card from '../components/card/card.component';
const Product = (product: Product) => {
    return (
        <>
            <Card product={product}></Card>
        </>
    );
};

export default Product;
