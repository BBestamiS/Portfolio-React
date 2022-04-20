import { Link, useLocation } from "react-router-dom";
import React from "react";
import '../styles/nav-style.scss'

function Nav() {
    const location = useLocation();
    const path = location.pathname;
    return (

        <div className="nav-article">
            <div className="navbar">
                <div className="nav-items">
                    <div className="logo"></div>
                    <div className="nav-link-div">
                        {path == "/projects" ? <Link to={"/"} >Main</Link> : <Link to={"/projects"} >Projects</Link>}
                        {path == "/social" ? <Link to={"/"} >Main</Link> : <Link to={"/social"} >Social</Link>}
                        {path == "/contact" ? <Link to={"/"} >Main</Link> : <Link to={"/contact"} >Contact</Link>}
                        {path == "/about" ? <Link to={"/"} >Main</Link> : <Link to={"/about"} >About</Link>}

                    </div>
                </div>
                <div className="nav-bg"></div>
            </div>
        </div>

    )
}
export default Nav;