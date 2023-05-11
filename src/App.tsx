import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './components/navigation/navigation.component';
import './App.scss';
import { CartProvider } from './context/cart.context';
const App = () => {
    // The header should contain: Logo + search bar + Favorites menu + Cart menu
    return (
        <CartProvider>
            <div className="container">
                <Navigation />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/favorite" element={<Store />} />
                    <Route path="/cart" element={<About />} /> */}
                    </Routes>
                </div>
            </div>
        </CartProvider>
    );
};

export default App;
