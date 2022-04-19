import React from "react";
import '../styles/nav-style.scss'

function Nav() {
    return (
        <div className="nav-article">
            <div className="navbar">
                <div className="nav-items">
                    <div className="logo"></div>
                    <div className="nav-link-div">
                        <a href="https://www.reactjs.org">Projects</a>
                        <a href="https://www.reactjs.org">Social</a>
                        <a href="https://www.reactjs.org">Contact</a>
                        <a href="https://www.reactjs.org">About</a>
                    </div>
                </div>
                <div className="nav-bg"></div>
            </div>
        </div>
    )
}
export default Nav;