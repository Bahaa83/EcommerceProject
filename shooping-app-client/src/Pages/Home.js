import React, { Fragment, useEffect } from 'react';
import LandingPage from "./LandingPage";
import "../App.css";
import ProductsList from "../Components/ProductsList";
import axios from "axios";
import { useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        fitchData();
    }, [])
    
    const fitchData =  () => {
        axios.get("http://localhost:3004/products")
            .then(resp => {
                setProducts(resp.data)
                setFilter(resp.data)
            })
            .catch(erro => console.log(erro))
            
    }
    const filterProducts = (keyWord) => {
        if (keyWord === "All")
            {
            setFilter(products);
            }
        else
            {
            const newProducts = products.filter((item) =>
            item.category === keyWord
        );
        setFilter(newProducts);
            }
    }
    return (
        <Fragment>
            
            <LandingPage />
            <div className="container">
                <ProductsList products={filter} filterHandller ={filterProducts}/>
            </div>
            
        </Fragment>
    )
}
export default Home;
