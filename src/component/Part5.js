import React from "react";
import Avarage from "./Avarage";
import Text2 from "./text-ar/Text2";

function Part5({tt,av,te}) {
  return (
    <div className="dir-ltr my-5 text-center">
      <h2 className="text-xl text-header font-bold my-3">{tt}
      </h2>
      {te}
      {av}
    </div>
  );
}

export default Part5;
