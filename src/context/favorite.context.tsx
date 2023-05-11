import { useContext, createContext, useState, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface FavsContext {
    favs: number[];
    isAdded: (id: number) => boolean;
    addItem: (id: number) => void;
    removeItem: (id: number) => void;
}

const FavsContext = createContext({} as FavsContext);

export const useFavs = () => useContext(FavsContext);

export const CartProvider = (props: Props) => {
    const { children } = props;
    const [favs, setCartItems] = useState<number[]>([]);

    const isAdded = (id: number) => favs.findIndex((el) => el === id) > -1;
    const addItem = (id: number) => setCartItems(favs.concat(id));

    const removeItem = (id: number) => {
        setCartItems(favs.filter((el) => el !== id));
    };

    return <FavsContext.Provider value={{ favs, isAdded, addItem, removeItem }}>{children}</FavsContext.Provider>;
};
