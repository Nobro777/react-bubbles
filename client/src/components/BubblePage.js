import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from './axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  
  useEffect(() => {
    axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then( res => {
      setColorList(res.data);
    })
    .catch( err => {console.log("error :", err)})
  },[props])

  return (
    <>
      <div style={{display:"flex", margin:"5% 0 0 0"}}>
        <ColorList props={props} colors={colorList} updateColors={setColorList} />
        <Bubbles colors={colorList} />
      </div>
    </>
  );
};

export default BubblePage;
