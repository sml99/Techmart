import { useState, useEffect, useContext } from 'react';
import CardsContainer from '../../components/card-container/cards-container.component';
import data from '../../data/data.json';
import { useCart } from '../../context/cart.context';
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
    const [products, setProducts] = useState(data.products);
    // const { getItemQuantity, incItemQuantity, decItemQuantity, removeItem } = useCart();

    useEffect(() => {
        //fetch products
    });

    return (
        <>
            <CardsContainer products={products} />
        </>
    );
};

export default Home;
