import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Products from "./components/Products/Products";
import { ProductProvider } from "./context/ProductContext/ProductState";
import {UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <UserProvider>
            <ProductProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="/Products" element={<Products/>} />
                    </Routes>
                </Router>
                <Footer />
            </ProductProvider>
        </UserProvider>

    );
};

export default App;

