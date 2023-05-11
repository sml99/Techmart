import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import Search from '../search/search.component';
import Logo from '../../assets/TechMart.png';
import Favorite from '../../assets/favorite.svg';
import Cart from '../../assets/shopping-bag.svg';
import { useCart } from '../../context/cart.context';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { useFavs } from '../../context/favorite.context';
import FavesDropdown from '../fav-dropdown/faves-dropdown.component';

const Navigation = () => {
    // The header should contain: Logo + search bar + Favorites menu + Cart menu
    const { isCartOpen, setIsCartOpen } = useCart();
    const { isFavsOpen, setIsFavsOpen } = useFavs();
    const handleCart = (isCartOpen: boolean) => {
        setIsCartOpen(!isCartOpen);
        setIsFavsOpen(false);
    };
    const handleFavs = (isFavsOpen: boolean) => {
        setIsFavsOpen(!isFavsOpen);
        setIsCartOpen(false);
    };

    return (
        <div className="navigation-container">
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img src={Logo} alt="logo" />
                </Link>
                {/* Search bar in the middle */}
                <Search />
                <div className="nav-links-container">
                    <div
                        className="nav-link"
                        onClick={() => {
                            handleFavs(isFavsOpen);
                        }}
                    >
                        {/* Favorite */}
                        <img src={Favorite} alt="favorite" />
                    </div>
                    <div
                        className="nav-link"
                        onClick={() => {
                            handleCart(isCartOpen);
                        }}
                    >
                        {/* Cart */}
                        <img src={Cart} alt="cart" />
                    </div>
                    {/* <CartIcon /> */}
                </div>
                {isCartOpen && <CartDropdown />}
                {isFavsOpen && <FavesDropdown />}
            </div>
            <Outlet />
        </div>
    );
};

export default Navigation;
