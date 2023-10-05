//A products state (array of products objects)
//A form with; input fields for name, price, and discription, and a submit button to add products to the products state
/*Products
you need:
A products state (array of products objects)
A form with; input fields for name, price, and discription, and a submit button to add products to the products state
Logic to add new products:
create a function named addProduct which will be triggered upon form submission.  inside addProduct, prevent the default form behavior using event.preventDefault(). Collect the values from the input (you may need to create a local state for each input) and form a new product object. use the setProducts function (from useState) to add this new product to the products state. After adding the product, clear the input feilds by ressetting the loval states.
UseEffect Logic:
import useEffect from react.  Create a useEffect that listens for changes in the products state.  inside this useEffect, conole.log a message like 'A new product has been added!' followed by the updated products state */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [discription, setDiscription] = useState("");
    
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/products")
        .then((res) => setProducts(res.data));
    }, []);
    
    const addProduct = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/products", {
            name,
            price,
            discription,
        })
        .then((res) => {
            setProducts([...products, res.data]);
            setName("");
            setPrice(0);
            setDiscription("");
        });
    };
    
    return (
        <div>
        <h1>Products</h1>
        <form onSubmit={addProduct}>
            <p>
            <label>Name</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            </p>
            <p>
            <label>Price</label>
            <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />
            </p>
            <p>
            <label>Description</label>
            <input
                type="text"
                onChange={(e) => setDiscription(e.target.value)}
                value={discription}
            />
            </p>
            <input type="submit" />
        </form>
        {products.map((product, idx) => (
            <p key={idx}>
            <Link to={`/products/${product._id}`}>{product.name}</Link>
            </p>
        ))}
        </div>
    );
};

export default Products;
