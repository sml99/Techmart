import { useContext, createContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { Product } from '../routes/home/Home';

interface Props {
    children: ReactNode;
}

interface ProductsProvider {
    filtredProducts: Product[];
    setSearch: (search: string) => void;
}
export const ProductsContext = createContext({} as ProductsProvider);

export const useProduct = () => useContext(ProductsContext);

export const ProductsProvider = (props: Props) => {
    const { children } = props;
    const [products, setProducts] = useState<Product[]>([]);
    const [filtredProducts, setfiltredProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState('');
    const value = { filtredProducts, setSearch };

    useEffect(() => {
        //fetch products
        getProducts();
    }, []);
    useEffect(() => {
        //fetch products
        setfiltredProducts(products.filter((product) => product.title.toLowerCase().includes(search)));
    }, [search, products]);

    const getProducts = useCallback(async () => {
        const data = await fetch('https://dummyjson.com/products');
        setProducts((await data.json()).products);
    }, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
