import React, { useState, useEffect } from "react";
import axios from "axios";
export function APIDemo2() {
  // Jsx coding
  const [publish, setPublish] = useState([]);
  const [imgurl, setImgurl] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => {
        console.log(response.data);
        setPublish([...response.data]);
      });
  }, []);

  // const urlVariable = () => {
  //   return;
  // };
  return (
    // HTML coding
    <div>
      APIDemo - trying to fetch images
      <div>
        {/* <button onClick={urlVariable}>Images</button> */}
        {publish.map((post) => (
          <img src={post.url} alt="" />
        ))}
      </div>
    </div>
  );
}
