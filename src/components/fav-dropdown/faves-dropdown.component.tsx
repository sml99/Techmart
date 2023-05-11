import { useProduct } from '../../context/products.context';
import { Product } from '../../routes/Home';
import MiniCard from '../mini-card/mini-card.component';
import { useFavs } from '../../context/favorite.context';
import { Button, Divider } from '@chakra-ui/react';

const FavesDropdown = () => {
    const { favs } = useFavs();
    const { products } = useProduct();

    const items = products.filter((product: Product) => favs.includes(product.id));
    console.log(items);
    return (
        <div className="cart-dropdown-container">
            <p>Favorites</p>
            <br />
            <div className="cart-items">{favs && items.map((item) => <MiniCard key={item.id} product={item} />)}</div>
            {/* <Button>GO TO CHECKOUT</Button> */}
        </div>
    );
};

export default FavesDropdown;
