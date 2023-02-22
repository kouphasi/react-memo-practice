import React, { memo } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const DogAPI = memo(() => {
  const [image_url, setImage_url] = useState("");
  useEffect(() => {
    const fetch_api = async () => {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setImage_url(response.data.message);
    };
    fetch_api();
  }, []);
  return (
    <div>
      <div>dogAPI</div>
      <img src={image_url} alt="" />
    </div>
  );
});

export default DogAPI;
