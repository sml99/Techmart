// import Card from '../components/card/card.component';
import { useParams } from 'react-router-dom';
import { useProduct } from '../context/products.context';
import Card from '../components/card/card.component';

const Product = () => {
    const { id } = useParams<{ id: string }>();
    const { products } = useProduct();
    const product = products.find((p) => p.id === Number(id));
    return <>{product && <Card product={product} oneProduct={true} />};</>;
};

export default Product;
