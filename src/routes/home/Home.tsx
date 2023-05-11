import { useState, useEffect, useContext } from 'react';
import CardsContainer from '../../components/card-container/cards-container.component';
// import data from '../../data/data.json';
import { useCart } from '../../context/cart.context';
import { useProduct } from '../../context/products.context';
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
    return (
        <>
            <CardsContainer products={filtredProducts} />
        </>
    );
};

export default Home;
