import React, { useEffect, useState } from "react";
Error.getLayout = (page) => page;

export default function Error() {
  const [img, setImg] = useState("https://i.pinimg.com/originals/2c/d5/f9/2cd5f95facd32432677a2a7f75391468.jpg");
  const fetchImage = async () => {
    const res = await fetch("https://http.cat/404");
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };
  useEffect(() => {
    try {
      fetchImage();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <a className = 'h-screen flex justify-center bg-orange-200' href="/">
          <img src={img} alt="404 Missing Page" />
    </a>
  );
}
