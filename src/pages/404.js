import React, { useEffect, useState } from "react";
Error.getLayout = (page) => page;

export default function Error() {
  const [img, setImg] = useState("https://http.cat/404");
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
    <a href="/">
      <div className="grid h-screen place-items-center">
        <div>
          <h1 className="text-center heading">
            Click Anywhere to Return to About Page
          </h1>
          <img src={img} alt="404 Missing Page" />
        </div>
      </div>
    </a>
  );
}
