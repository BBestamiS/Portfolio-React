import Spline from '@splinetool/react-spline';
import Git from '../3d/git.spline'
import '../styles/spline3d-style.scss'
import React, { useEffect } from 'react';
import { useState } from 'react'

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
  function onLoad(spline) {
    const camera = spline.findObjectById('00e46ed7-0378-45fd-946d-aca0a8a93189')
    const obj = spline.findObjectById('d4d43fbc-8ed0-4b14-a6ca-acfbd8848c83')
    if (obj != null && camera != null) {
      console.log(spline);
      const camareAspectRatio = (800 / window.innerWidth);
      if (camareAspectRatio > 0.8) {
        camera.scale.x = camareAspectRatio;
        camera.scale.y = camareAspectRatio;
      }
      setMyCameraPos(camera)
      setMyObjPos(obj.position);
    }
  }
  if (width) {
    // console.log(width)
    if (myCameraPos) {
      myCameraPos.scale.x = (800 / width)
      myCameraPos.scale.y = (800 / width)
    }
  }

  return (
    <div id='spline3d' >
      <div id='git-div'>
        <Spline scene={Git} onLoad={onLoad} id="spline" />
      </div>
    </div>
  );
}
export default Spline3d;