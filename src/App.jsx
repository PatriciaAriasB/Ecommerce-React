import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Products from "./components/Products/Products";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";




const App = () => {
    return (
        <UserProvider>
            <ProductProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/register" element={<Register/>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/products" element={<Products />} />
                    </Routes>
                </Router>
                <Footer />
            </ProductProvider>
        </UserProvider>

    );
};

export default App;

