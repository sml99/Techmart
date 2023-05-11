import { Button, Divider } from '@chakra-ui/react';
import CardsContainer from '../components/card-container/cards-container.component';
import { useProduct } from '../context/products.context';
import { useEffect, useState } from 'react';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    images: string[];
}

const Home = () => {
    // Products page: for displaying computer hardware in shape of cards
    const { filtredProducts } = useProduct();
    const [prods, setProds] = useState<Product[]>();

    useEffect(() => {
        setProds(filtredProducts);
    }, [filtredProducts]);

    const handleSorting = (asc: boolean) => {
        setProds(filtredProducts.concat().sort((a, b) => (asc ? a.price - b.price : b.price - a.price)));
    };
    return (
        <>
            <Button w="50%" onClick={() => handleSorting(false)}>
                Sort by price ⬆️
            </Button>
            <Button w="50%" onClick={() => handleSorting(true)}>
                Sort by price ⬇️
            </Button>
            <Divider />
            <br />
            {prods && <CardsContainer products={prods} />}
        </>
    );
};

export default Home;
