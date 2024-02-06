import React from "react";
import {NavLink} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState ,useEffect } from "react";
import Button from './Button';
import './NavBar.css';
import DiamondIcon from '@mui/icons-material/Diamond';

const NavBar=()=>{
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    window.addEventListener('resize',showButton);

    useEffect(() => {
            showButton();
           }, []);

    const STYLES={color:"#fff" , fontSize:"2rem"};

    return(
        <>
          <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="navbar-logo" onClick={()=>(setClick(false))}>
                TRVL <DiamondIcon className="diamond"/>
                </NavLink>
            <div className="menu-icon" onClick={()=>(setClick(!click))}>
                <span>{click ? <CloseIcon style={STYLES}/> : <MenuIcon style={STYLES}/>}</span>
            </div>
            <ul className={click ? 'navBarActive' : 'nav-menu'}>
                <li className="nav-items">
                    <NavLink to="/" className='nav-links' onClick={()=>(setClick(false))}>
                    Home
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/Service" className='nav-links' onClick={()=>(setClick(false))}>
                    Services
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/Product" className='nav-links' onClick={()=>(setClick(false))}>
                    Products
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/SignUp" className='signUp' onClick={()=>(setClick(false))}>
                    Sign-Up
                    </NavLink>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Sign-Up</Button>}
            </div>
            </nav>
        </>
    )
}

export default NavBar;

