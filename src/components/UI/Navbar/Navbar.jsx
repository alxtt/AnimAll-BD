import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="logo"></div>
            <div className="navbar__links">
                <Link to="/posts">О сайте</Link>
                <Link to="/about">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
