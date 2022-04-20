import React from "react";
import Rive from 'rive-react'
import '../styles/animation-style.scss'
import loading from '../animations/loading.riv'
function Animation() {
    return (
        <div className="rive-div">
            <Rive src={loading} />
        </div>
    );
}

export default Animation;