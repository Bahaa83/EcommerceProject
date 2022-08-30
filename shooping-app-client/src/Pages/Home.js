import React, { Fragment } from 'react';
import LandingPage from "./LandingPage";
import "../App.css";
import Styles from "../Modules/Home.module.css";

const Home = () => {
    return (
        <Fragment>
            
            <LandingPage />
            <div className="container">
                <div id="Products" className={Styles.header}>
                    <h2>Latest Products</h2>
                </div>
            </div>
            
        </Fragment>
    )
}
export default Home;
