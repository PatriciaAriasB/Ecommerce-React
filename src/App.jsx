import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />        
            <Routes>
                <Route path="/" element={<Footer />} />    
            </Routes>
        </Router>
    );
};

export default App;
