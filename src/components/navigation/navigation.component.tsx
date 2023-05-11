import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import Search from '../search/search.component';
import Logo from '../../assets/TechMart.png';
import Favorite from '../../assets/favorite.svg';
import Cart from '../../assets/shopping-bag.svg';

const Navigation = () => {
    // The header should contain: Logo + search bar + Favorites menu + Cart menu

    return (
        <div className="navigation-container">
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img src={Logo} alt="logo" />
                </Link>
                {/* Search bar in the middle */}
                <Search />
                <div className="nav-links-container">
                    <Link className="nav-link" to="/favorite">
                        {/* Favorite */}
                        <img src={Favorite} alt="favorite" />
                    </Link>
                    <Link className="nav-link" to="/cart">
                        {/* Cart */}
                        <img src={Cart} alt="cart" />
                    </Link>
                    {/* <CartIcon /> */}
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Navigation;
