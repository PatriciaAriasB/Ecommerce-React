import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Products from "./components/Products/Products";
import { ProductProvider } from "./context/ProductContext/ProductState";

const App = () => {
    return (
        <ProductProvider>
            <Router>
                <Header />
                <Products />
                <Routes>
                    <Route path="/" element={<Footer />} />
                </Routes>
            </Router>
            <Footer/>
       
        </ProductProvider>

    );
};

export default App;

