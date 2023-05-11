import { useContext, createContext, useState, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface CartItem {
    id: number;
    quantity: number;
}

interface CartContext {
    getItemQuantity: (id: number) => number;
    incItemQuantity: (id: number) => void;
    decItemQuantity: (id: number) => void;
    removeItem: (id: number) => void;
}

const CartContext = createContext({} as CartContext);

export const useCart = () => useContext(CartContext);

export const CartProvider = (props: Props) => {
    const { children } = props;
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const getItemQuantity = (id: number) => cartItems.find((el) => el.id === id)?.quantity || 0;

    const incItemQuantity = (id: number) => {
        setCartItems((currItems) => {
            const foundItem = currItems.find((item) => item.id === id);
            if (foundItem) {
                return currItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
            } else {
                return [...currItems, { id, quantity: 1 }];
            }
        });
    };
    function decItemQuantity(id: number) {
        setCartItems((currItems) => {
            const foundItem = currItems.find((item) => item.id === id);
            if (foundItem) {
                const updatedItem = { ...foundItem, quantity: foundItem.quantity - 1 };
                if (updatedItem.quantity === 0) {
                    return currItems.filter((item) => item.id !== id);
                } else {
                    return currItems.map((item) => (item.id === id ? updatedItem : item));
                }
            } else {
                return currItems;
            }
        });
    }

    const removeItem = (id: number) => {
        cartItems.filter((el) => el.id !== id);
    };

    return (
        <CartContext.Provider value={{ getItemQuantity, incItemQuantity, decItemQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
