import { Product } from '../../routes/home/Home';
import { Grid } from '@chakra-ui/react';
import Card from '../card/card.component';

interface Props {
    products: Product[];
}

const CardsContainer = (props: Props) => {
    const { products } = props;

    return (
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {products?.map((product) => (
                <Card product={product} key={product.id} />
            ))}
        </Grid>
    );
};

export default CardsContainer;
