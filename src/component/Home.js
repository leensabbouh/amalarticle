import React from "react";

function Home({ navbar }) {
  return (
    <div className=" relative flex flex-col items-center justify-between img-cover-main text-center ">
      <div className="overlay absolute bg-[#80298f]"></div>
      <div className="flex flex-col justify-between p-8 z-10">
        {navbar}
        <div className="max-w-[80%] my-28 m-auto secondary-color-yellow text-header">
          <h1 className="text-[2.2em] font-bold my-10 ">
            منظمات المجتمع المدني السوري شريكات في سلب النساء اجازة الأمومة
          </h1>
          <p className="text-[2em] text-[#4abea3] font-bold">
            تحقيق أمل حميدوش
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
