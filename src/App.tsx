import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './components/navigation/navigation.component';
import './App.scss';
import { CartProvider } from './context/cart.context';
import { ProductsProvider } from './context/products.context';
import { FavsProvider } from './context/favorite.context';
import Product from './routes/product.component';
const App = () => {
    // The header should contain: Logo + search bar + Favorites menu + Cart menu
    return (
        <ProductsProvider>
            <CartProvider>
                <FavsProvider>
                    <div className="container">
                        <Navigation />
                        <div className="content">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/product/:id" element={<Product />}></Route>
                                {/* <Route path="/favorite" element={<Store />} />
                    <Route path="/cart" element={<About />} /> */}
                            </Routes>
                        </div>
                    </div>
                </FavsProvider>
            </CartProvider>
        </ProductsProvider>
    );
};

export default App;
