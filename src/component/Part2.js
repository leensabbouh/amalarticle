import React from "react";
import Map from "./Map";
import Text7 from "./text-ar/Text7";

function Part2() {
  return (
    <div className="dir-ltr my-9 text-center px-10">
      <h2 className="text-xl font-bold my-8">
        مزاجية المنظمات ومسؤولية الجهات المانحة{" "}
      </h2>
      <Text7 />
      <Map />
    </div>
  );
}

export default Part2;
