import React, { Fragment, useEffect } from 'react';
import LandingPage from "./LandingPage";
import "../App.css";
import Styles from "../Modules/Home.module.css";
import FilterTool from '../Components/FilterTool';
import ProductsList from "../Components/ProductsList";
import axios from "axios";
import { useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fitchData();
    }, [])
    
    const fitchData =  () => {
        axios.get("http://localhost:3004/products")
            .then(resp => setProducts(resp.data))
            .catch(erro => console.log(erro))
            .finally(console.log(products))
    }
    return (
        <Fragment>
            
            <LandingPage />
            <div className="container">
                <div id="Products" className={Styles.header}>
                    <h2>Latest Products</h2>
                </div>
                <FilterTool />
                <ProductsList products={products}/>
                
            </div>
            
        </Fragment>
    )
}
export default Home;
