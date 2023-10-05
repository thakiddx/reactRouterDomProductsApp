import React from 'react';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/ProductsList';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={<Products products={products} setProducts={setProducts} />}
          />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

