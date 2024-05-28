import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import { GlobalProvider } from "./context/GlobalState";
import Products from "./components/Products/Products";
import AddProduct from "./components/Products/AddProduct/AddProduct";

const App = () => {
    return (
        <GlobalProvider>
          

            <Router>
                <Header />
                <Products />
                <Routes>
                    <Route path="/" element={<Footer />} />
                    <Route path="/AddProduct" element={<AddProduct/>} />
                </Routes>
            </Router>
        </GlobalProvider>

    );
};

export default App;

