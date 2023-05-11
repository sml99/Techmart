import { Product } from '../../routes/home/Home';
import { Grid } from '@chakra-ui/react';
import Card from '../card/card.component';
import { CartItem, useCart } from '../../context/cart.context';

interface Props {
    products: Product[];
}

const CardsContainer = (props: Props) => {
    const { products } = props;
    const { cartItems, isAdded, addItem, removeItem } = useCart();
    console.log(cartItems);

    return (
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {products?.map((product) => (
                <Card product={product} isAdded={isAdded} addItem={addItem} removeItem={removeItem} key={product.id} />
            ))}
        </Grid>
    );
};

export default CardsContainer;
