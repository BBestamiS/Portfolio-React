import React from "react";
import Rive from 'rive-react'
import '../styles/animation-style.scss'
import loading from '../animations/loading.riv'
function Animation() {
    return (
        <div className="rive-div">
            <div id='animate-size' >
                <Rive src={loading} />
            </div>
        </div>
    );
}

export default Animation;