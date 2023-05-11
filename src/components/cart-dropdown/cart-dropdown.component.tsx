import { useCart } from '../../context/cart.context';
import { useProduct } from '../../context/products.context';
import { Product } from '../../routes/Home';
import MiniCard from '../mini-card/mini-card.component';
import { Button } from '@chakra-ui/react';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useCart();
    const { products } = useProduct();

    const items = products.filter((product: Product) => cartItems.includes(product.id));
    return (
        <div className="cart-dropdown-container">
            <p>Cart</p>
            <div className="cart-items">
                {cartItems && items.map((item) => <MiniCard key={item.id} product={item} />)}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;
