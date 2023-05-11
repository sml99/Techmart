import { useContext, createContext, useState, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export interface CartItem {
    id: number;
    // quantity: number;
}

interface CartContext {
    cartItems: number[];
    isAdded: (id: number) => boolean;
    addItem: (id: number) => void;
    removeItem: (id: number) => void;
    isCartOpen: boolean;
    setIsCartOpen: (isIt: boolean) => void;
}

const CartContext = createContext({} as CartContext);

export const useCart = () => useContext(CartContext);

export const CartProvider = (props: Props) => {
    const { children } = props;
    const [cartItems, setCartItems] = useState<number[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const isAdded = (id: number) => cartItems.findIndex((el) => el === id) > -1;
    const addItem = (id: number) => setCartItems(cartItems.concat(id));

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter((el) => el !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, isAdded, addItem, removeItem, isCartOpen, setIsCartOpen }}>
            {children}
        </CartContext.Provider>
    );
};
