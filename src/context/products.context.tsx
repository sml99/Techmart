import { useContext, createContext, useEffect, useState, useCallback, ReactNode } from 'react';

export const ProductsContext = createContext([]);

export const useProduct = () => useContext(ProductsContext);

interface Props {
    children: ReactNode;
}

export const ProductsProvider = (props: Props) => {
    const { children } = props;
    const [products, setProducts] = useState([]);
    const value = products;
    useEffect(() => {
        //fetch products
        getProducts();
    });

    const getProducts = useCallback(async () => {
        const data = await fetch('https://dummyjson.com/products');
        setProducts((await data.json()).products);
    }, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
