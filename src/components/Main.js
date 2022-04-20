import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Animation from "./Animation";


import Corolla from "../images/Corolla.png";
import Corolla2 from "../images/Corolla2.png";
import Watches from "../images/Watches.png";
import Porsche from "../images/Porsche.png";
import DJI from "../images/DJI.png";
import Beats from "../images/Beats.png";
import MyPP from "../images/MyPP.png";
import yakitim from "../images/yakitim.png";
import unsplash from "../images/unsplash.png";
import desktop from "../images/desktop.png";
import entrance from "../images/entrance.png";
import webpage from "../images/webpage.png";
import '../styles/style.scss'

function Main() {


    useEffect(() => {

        axios.get('https://bbestamis-api.herokuapp.com/getlastphoto').then(response => {
            setLastPic(response.data.url);
            setLastPicLink(response.data.link);

        });
        axios.get('https://bbestamis-api.herokuapp.com/getstatus').then(response => {
            setUnsplashDownloads(response.data.downloads);
            setUnsplashViews(response.data.views);
        });

    }, []);
    const [lastPicLink, setLastPicLink] = useState(null);
    const [lastPic, setLastPic] = useState(null);
    const [unsplashDownloads, setUnsplashDownloads] = useState(null);
    const [unsplashViews, setUnsplashViews] = useState(null);
    if (lastPicLink && lastPic && unsplashDownloads && unsplashViews) {
        return (
            // Hi section start
            <div className="tamplate">

                <article id="main-article">
                    <div id="hi-div">
                        <div id="hi-main">
                            <div id="hi-main-info-div">
                                <h1>Hi, I’m Bestami</h1>
                                <p>I design beautiful websites</p>
                                <p>&</p>
                                <p>take awesome photos</p>
                            </div>
                            <article id="hi-photos-article">
                                <a
                                    target="_blank"
                                    href="https://unsplash.com/photos/S2CWsE_xHAk"
                                    id="first-pic-div"
                                >
                                    <img
                                        className="hi-pic"
                                        src={Watches}
                                        alt="unsplash"
                                    />
                                </a>

                                <a
                                    target="_blank"
                                    href="https://unsplash.com/photos/FxtsgEeTXPA"
                                    id="second-pic-div"
                                >
                                    <img
                                        className="hi-pic"
                                        src={Corolla2}
                                        alt="unsplash"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://unsplash.com/photos/fEtm1xCIyn0"
                                    id="third-pic-div"
                                >
                                    <img
                                        className="hi-pic"
                                        src={Porsche}
                                        alt="unsplash"
                                    />
                                </a>
                            </article>
                        </div>
                        <section id="hi-bg"></section>
                    </div>
                    {/* // Hi section end */}
                    {/* <!-- ProCreate section start --> */}
                    <div id="procreate-div">
                        <div id="procreate-main">
                            <div id="my-procreate-div">
                                <img
                                    id="my-procreate-pic"
                                    src={MyPP}
                                    alt="procreate-pic"
                                />
                                <div></div>
                            </div>
                            <article id="sample-pic">
                                <h1 id="procreate-text">ProCreate 🎨</h1>
                                <section id="procreate-section">
                                    <div className="procreate-sample-bg">
                                        <img
                                            className="procreate-pic"
                                            src={DJI}
                                            alt="procreate"
                                        />
                                    </div>
                                    <div className="procreate-sample-bg">
                                        <img
                                            className="procreate-pic"
                                            src={Beats}
                                            alt="procreate"
                                        />
                                    </div>
                                    <div className="procreate-sample-bg">
                                        <img
                                            className="procreate-pic"
                                            src={Corolla}
                                            alt="procreate"
                                        />
                                    </div>
                                </section>
                                <div id="sample-pic-text">
                                    <p>Art without&nbsp;</p>
                                    <p id="limits-text" >limits&nbsp;</p>
                                    <p>.</p>
                                </div>
                            </article>
                        </div>
                        <section id="procreate-bg"></section>
                    </div>

                    {/* <!-- ProCreate section end --> */}

                    {/* <!-- Unsplash section start --> */}
                    <div id="unsplash-div">
                        <div id="unsplash-main">
                            <div id="unsplash-info">
                                <p id="unsplash-text">Unsplash 📸</p>
                                <a target="_blank" href={lastPicLink} id="unsplash-last-photo">
                                    <img src={lastPic} alt="unsplash-last" />
                                </a>
                                <div id="unsplash-view-down-div">
                                    <div id="unsplash-views">
                                        <p id="stat-text">Views</p>

                                        <p id="stat-count">{unsplashViews}</p>
                                    </div>
                                    <div id="unsplash-down">
                                        <p id="stat-text">Downloads</p>

                                        <p id="stat-count">{unsplashDownloads}</p>
                                    </div>
                                </div>
                            </div>
                            <div id="unsplash-bg-pic">
                                <img src={unsplash} alt="unsplash-logo" />
                                <div id="unsplash-dot-bg"></div>
                            </div>
                        </div>
                        <section id="unsplash-bg"></section>
                    </div>
                    {/* <!-- Unsplash section end --> */}
                    {/* <!-- Webdev section start --> */}
                    <div id="dev-div">
                        <div id="dev-main">
                            <div id="dev-group">
                                <img id="first-dev-pic" src={webpage} alt="webpage" />
                                <div>
                                    <p>Dev</p>
                                    <p>🛠</p>
                                </div>
                                <img
                                    id="thirth-dev-pic"
                                    src={yakitim}
                                    alt="yakıtım"
                                />
                            </div>
                            <div id="dev-pic-group">
                                <img
                                    id="second-dev-pic"
                                    src={desktop}
                                    alt="sosyofi"
                                />
                                <img
                                    id="fourth-dev-pic"
                                    src={entrance}
                                    alt="entrance"
                                />
                            </div>
                        </div>
                        <section id="dev-bg">
                            <div></div>
                        </section>
                    </div>
                    {/* <!-- Webdev section end --> */}
                    <div id="bottom-div"></div>
                </article >

            </div >
        );
    } else {
        return (<Animation />)
    }

}
export default Main;