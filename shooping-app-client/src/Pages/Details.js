import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Styles from "../Modules/Details.module.css";
import "../App.css";
import Star from "../Components/Star";
import { NavButton } from '../Components/Navbar';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Details = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getProductById();
  }, []);
  
  const getProductById = useCallback(async () => {
      await axios.get(`http://localhost:3004/products/${id}`)
      .then(pro => setProductDetails(pro.data))
      .catch(error => console.log(error))
      .finally(() => setLoading(true));
    
  },[id]) 
  const Loading = () => {
    return (
      <Fragment>
        <div className={Styles.content}>
          <Skeleton className={Styles.image} width={350} height={350} />
          <div className={Styles.detailsInfo}>
          <Skeleton width={350} height={350} />
        </div>
        </div>

      </Fragment>
    )
  }

  const ShowProductDetails = () => {
    return (
      <Fragment>
        <div className={Styles.content}>
          <div className={Styles.image}>
              <img src={productDetails.image} alt="ProductImage"/>
          </div>
          <div className={Styles.detailsInfo}>
              <h2>{productDetails.category}</h2>
              <p className={Styles.title}>{productDetails.title}</p>
              <div className={Styles.rating}>
                <span className={Styles.rate}>Rating</span>
                <Star rate={ productDetails.rating.rate} />
              </div>
            <p className={Styles.price}>{productDetails.price} $</p>
            <p className={Styles.description}>{productDetails.description}</p>
            <div className={Styles.infoBtns}>
              <NavButton variant="outlined">Add to Card</NavButton>
              <NavButton variant="outlined">Go to Card</NavButton>
            </div>
          </div>

        </div>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <div className='container'>
        {loading ? <ShowProductDetails/> : <Loading/>}
      </div>
      
    </Fragment>
  )
}
export default Details;
