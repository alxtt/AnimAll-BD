import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="logo"></div>
            <div className="navbar__links">
                <Link to="/posts">Homepage</Link>
                <Link to="/about">Dashboard</Link>
            </div>
        </div>
    );
};

export default Navbar;
