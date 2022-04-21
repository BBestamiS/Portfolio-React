import { Link, useLocation } from "react-router-dom";
import React from "react";
import '../styles/nav-style.scss'
import { useState, useEffect } from "react";

function GetLink(props) {
    const path = props.path;
    const linkPath = props.linkPath;
    const linkName = props.linkName;



    const changeStateTrue = (e) => {
        e.target.style.backgroundColor = "#27f579";
        props.setCursor(true)
    }
    const changeStateFalse = (e) => {
        e.target.style.backgroundColor = "transparent";
        props.setCursor(false)

    }
    return (
        path == linkPath ? <Link onMouseEnter={changeStateTrue} onMouseOut={changeStateFalse} to={"/"} >Main</Link> : <Link onMouseEnter={changeStateTrue} onMouseOut={changeStateFalse} to={linkPath} >{linkName}</Link>
    )
}

function Nav(props) {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div id="nav-article">
            <div id="navbar">
                <div className="nav-items">
                    <div className="logo"></div>
                    <div id="nav-link-div">
                        <GetLink path={path} linkPath={"/projects"} linkName={"Projects"} setCursor={props.setCursor} cursor={props.cursor} />
                        <GetLink path={path} linkPath={"/social"} linkName={"Social"} setCursor={props.setCursor} cursor={props.cursor} />
                        <GetLink path={path} linkPath={"/contact"} linkName={"Contact"} setCursor={props.setCursor} cursor={props.cursor} />
                        <GetLink path={path} linkPath={"/about"} linkName={"About"} setCursor={props.setCursor} cursor={props.cursor} />
                    </div>
                </div>
                <div className="nav-bg"></div>
            </div>
        </div>
    )

}
export default Nav;