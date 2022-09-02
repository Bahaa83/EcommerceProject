import React, { Fragment } from 'react';
import Product from "./Product";
import "../App.css";
import Styles from "../Modules/ProductsList.module.css";

const ProductsList = ({ products }) => {
    console.log(products)
    const productlist = products.map((product) => (
            
            <Product key={product.id} product={product}/>
    ))
return (
    <Fragment>
        <div className='container'>
            <div className={Styles.content}>
                {productlist}
            </div>
        </div>
        
    </Fragment>
)
}

export default ProductsList;
