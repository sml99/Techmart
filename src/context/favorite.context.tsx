import { useContext, createContext, useState, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface FavsContext {
    favs: number[];
    isAdded: (id: number) => boolean;
    addItem: (id: number) => void;
    removeItem: (id: number) => void;
    isFavsOpen: boolean;
    setIsFavsOpen: (isIt: boolean) => void;
}

const FavsContext = createContext({} as FavsContext);

export const useFavs = () => useContext(FavsContext);

export const FavsProvider = (props: Props) => {
    const [isFavsOpen, setIsFavsOpen] = useState(false);

    const { children } = props;
    const [favs, setFavsItems] = useState<number[]>([]);

    const isAdded = (id: number) => favs.findIndex((el) => el === id) > -1;
    const addItem = (id: number) => setFavsItems(favs.concat(id));

    const removeItem = (id: number) => {
        setFavsItems(favs.filter((el) => el !== id));
    };

    return (
        <FavsContext.Provider value={{ favs, isAdded, addItem, removeItem, setIsFavsOpen, isFavsOpen }}>
            {children}
        </FavsContext.Provider>
    );
};
