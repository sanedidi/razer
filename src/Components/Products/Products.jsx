import React, { useEffect, useState } from "react";
import Mouse from "../Mouse/Mouse";
import axios from "axios";
import  KeyBoard  from "../KeyBoard/KeyBoard";
import HeadPhone from "../HeadPhone/HeadPhone";

const Products = () => {
  const [data, setData] = useState({
    mice: [],
    laptop: [],
    keyboard: [],
    headsets: [],
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get("https://razer-api.onrender.com/devices");
    setData((prev) => {
      return {
        ...prev,
        mice: data.filter((product) => product.category === "MICE"),
        laptop: data.filter((product) => product.category === "Laptop"),
        keyboard: data.filter((product) => product.category === "Keyboards"),
        headsets: data.filter((product) => product.category === "Headsets"),
      };
    });
  };
  console.log(data);
  return (
    <div>
      <Mouse mice={data.mice} />
      <KeyBoard keyboard={data.keyboard} />
      <HeadPhone headsets={data.headsets} />
    </div>
  );
};

export default Products;
