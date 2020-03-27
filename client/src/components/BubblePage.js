import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
 
  const getData = () => {
    axiosWithAuth()
      .get('/api/colors')
        .then(res => {
          console.log('res.data', res.data);
            setColorList(res.data)
        })
  }
  useEffect(() => {
    getData()
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getData={getData}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
