import React from 'react';
import Button from '@mui/material/Button';
import "../App.css";
import Styles from "../Modules/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
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
                            <li className={Styles.navItem}><NavLink className={Styles.textDeco}  activeclassname="active"  to="/">Home</NavLink></li>
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
                    <div className={Styles.menuIcon} onClick={()=> setToggle(!toggle)}>
                        <MenuIcon fontSize='large' />
                    </div>
                </nav>
                <div className={toggle? Styles.openMegaMenu : Styles.closeMegaMenu}>
                    <ul className={Styles.menuLinks}>
                        <li className={Styles.menuItem}><NavLink className={Styles.textDeco} onClick={()=>setToggle(!toggle)} to="/">Home</NavLink></li>
                        <li className={Styles.menuItem}><NavLink className={Styles.textDeco} onClick={()=>setToggle(!toggle)}to="/products">Products</NavLink></li>
                        <li className={Styles.menuItem}><NavLink className={Styles.textDeco} onClick={()=>setToggle(!toggle)} to="/about">About</NavLink></li>
                        <li className={Styles.menuItem}><NavLink className={Styles.textDeco} onClick={()=>setToggle(!toggle)}to="/contact">Contact</NavLink></li>
                        <li className={Styles.menuItem}><NavLink className={Styles.textDeco} onClick={()=>setToggle(!toggle)} to="/login">Login</NavLink></li>
                        <li className={Styles.menuItem}><NavLink className={Styles.textDeco} onClick={()=>setToggle(!toggle)} to="/signup">Signup</NavLink></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Navbar;