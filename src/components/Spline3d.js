import Spline from '@splinetool/react-spline';
import Git from '../3d/git.spline'
import '../styles/spline3d-style.scss'
import React, { useEffect, useRef } from 'react';
import { useState } from 'react'
import Animation from './Animation';
import { Link } from 'react-router-dom';

function useWindowSize() {
  const [size, setSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', handleResize);
  }, []);
  return size;
}

function Spline3d() {
  const [myObjPos, setMyObjPos] = useState(null);
  const [myCameraPos, setMyCameraPos] = useState(null);
  const [width, height] = useWindowSize();
  const camareAspectRatio = (1200 / window.innerWidth);
  function onLoad(spline) {

    const camera = spline.findObjectById('112c0ce8-2470-4e2f-b92a-2a9ad2b1405c')
    const obj = spline.findObjectById('d4d43fbc-8ed0-4b14-a6ca-acfbd8848c83')
    if (obj != null && camera != null) {
      // console.log(spline);
      if (camareAspectRatio > 0.8) {
        camera.scale.x = camareAspectRatio;
        camera.scale.y = camareAspectRatio;
      } else {
        camera.scale.x = 0.8;
        camera.scale.y = 0.8;

      }
      setMyCameraPos(camera)
      setMyObjPos(obj.position);
    }
  }
  if (width) {
    if (myCameraPos) {
      if (camareAspectRatio > 0.8) {
        myCameraPos.scale.y = camareAspectRatio
        myCameraPos.scale.x = camareAspectRatio
      }
    }
  }

  return (

    <div id='spline3d' >
      <div id='git-div' >
        <Spline scene={Git} onLoad={onLoad} id="spline" />
      </div>
    </div>
  );

}
export default Spline3d;