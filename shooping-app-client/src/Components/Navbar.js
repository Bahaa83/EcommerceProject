import React from 'react';
import Button from '@mui/material/Button';
import "../App.css";
import Styles from "../Modules/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Navbar = () => {
    const NavButton = styled(Button)({
        color: "#333",
        transition: "0.3s",
        borderColor: "#333",
        padding: "4px 6px",
        fontSize:"12px",
        "&:hover": {
            color: "white",
            backgroundColor: "black",
            borderColor: "white",
        }
    })
    return (
        <section>
            <div className='container'>
                <nav>
                    <h2 className={Styles.logo}>Shooping App</h2>
                    <div className={Styles.links}>
                        <ul className={Styles.navLinks}>
                            <li className={Styles.navItem}><NavLink className={Styles.textDeco} to="/">Home</NavLink></li>
                            <li className={Styles.navItem}><NavLink className={Styles.textDeco} to="/products">Products</NavLink></li>
                            <li className={Styles.navItem}><NavLink className={Styles.textDeco} to="/about">About</NavLink></li>
                            <li className={Styles.navItem}><NavLink className={Styles.textDeco} to="/contact">Contact</NavLink></li>
                        </ul>
                        <div className={Styles.navBtns}>
                            <NavButton href='/login' variant="outlined"  startIcon={<LoginIcon  fontSize="small" />}>Login</NavButton>
                            <NavButton href='/signup' variant="outlined" startIcon={<PersonAddIcon  fontSize="small"  />}>Signup</NavButton>
                            <NavButton href='/card' variant="outlined" startIcon={<AddShoppingCartIcon  fontSize="small"  />}>Card</NavButton>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}
export default Navbar;