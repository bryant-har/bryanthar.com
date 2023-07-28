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
    <>
      <div className="grid h-screen place-items-center">
        <div>
          <h1 className="text-center heading">
            <a href="/about/">Click Here to Return to About Page</a>
          </h1>
          <img src={img} alt="404 Missing Page" />
        </div>
      </div>
    </>
  );
}
