import { Product } from '../../routes/Home';
import './card-container.styles.scss';
import Card from '../card/card.component';

interface Props {
    products: Product[];
}

const CardsContainer = (props: Props) => {
    const { products } = props;

    return (
        <div className="grid-container">
            {products?.map((product) => (
                <Card product={product} key={product.id} />
            ))}
        </div>
    );
};

export default CardsContainer;
