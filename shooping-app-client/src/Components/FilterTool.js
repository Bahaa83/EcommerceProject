import React, { Fragment } from 'react';
import "../App.css";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Styles from "../Modules/Filter.module.css" ;

const FilterTool = () => {
    const FilterButton = styled(Button)({
        color: "#333",
        transition: "0.3s",
        border: "1px solid black",
        padding: "4px 6px",
        fontSize: "12px",
        "&:hover": {
            color: "white",
            backgroundColor: "black",
            borderColor: "white",
        },
    });
    return (
        <Fragment>
            <section id={Styles.Filters}>
                <div className='container'>
                    <div className={Styles.filtersBtns}>
                        <FilterButton>All</FilterButton>
                        <FilterButton>Men's Clothing</FilterButton>
                        <FilterButton>Women's Clothing</FilterButton>
                        <FilterButton>Electronics</FilterButton>
                        <FilterButton>Jewelery</FilterButton>

                    </div>
                </div>
            </section>
        </Fragment>
)
}
export default FilterTool;
