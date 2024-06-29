import React from "react";
import './Navbar.css'
const Navbar = ({setcodeType, activeButton, setactiveButton}) => {
    return <>
    
    <div className="navbar">
        <button onClick = {()=> {setcodeType('html'); setactiveButton('html')}} className={ activeButton === 'html' ? 'active-button the-button' : 'the-button' }>HTML code</button>
        <button onClick = {()=> {setcodeType('css'); setactiveButton('css')}} className={ activeButton === 'css' ? 'active-button the-button' : 'the-button' }>CSS code</button>
        <button onClick = {() => {setcodeType('js'); setactiveButton('js')}} className={ activeButton === 'js' ? 'active-button the-button' : 'the-button' }> JS code</button>
    </div>
    </>
};

export default Navbar;