import React from "react";

function Home({ navbar,t }) {
  return (
    <div className=" relative flex flex-col items-center justify-between img-cover-main text-center ">
      <div className="overlay absolute bg-[#80298f]"></div>
      <div className="flex flex-col justify-between p-8 z-10">
        {navbar}
        <div className="max-w-[80%] my-28 m-auto secondary-color-yellow text-header">
          <h1 className="text-[2.2em] font-bold my-10 ">{t}
          </h1>
          <p className="text-[1.5em] text-[#4abea3] font-bold">
            تحقيق <br/>
            أمل حميدوش
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
