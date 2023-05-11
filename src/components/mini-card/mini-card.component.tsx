import { Product } from '../../routes/Home';
import { Heading, Text, Image, CardBody, Stack, Card, Divider } from '@chakra-ui/react';
import './mini-card.styles.scss';

interface Props {
    product: Product;
}

const MiniCard = (props: Props) => {
    const { product } = props;
    return (
        <div className="mini-cart-container">
            <div className="mini-cart">
                <div className="image-container">
                    <img src={product.thumbnail} alt={product.title} />
                </div>

                <div className="text-container">
                    <h3 className="title">{product.title}</h3>
                    <p>{product.description.substring(0, 20) + '...'}</p>
                </div>
            </div>
            <Divider />
        </div>
    );
};

export default MiniCard;
