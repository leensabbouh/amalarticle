import React from "react";
import Home from "./Home";
import Text1 from "./text-ar/Text1";
import Part5 from "./Part5";
import Part2 from "./Part2";
import Text3 from "./text-ar/Text3";
import Text4 from "./text-ar/Text4";
import Text5 from "./text-ar/Text5";
import Text6 from "./text-ar/Text6";
import Text8 from "./text-ar/Text8";
import Text9 from "./text-ar/Text9";
import Text12 from "./text-ar/Text12";
import Text11 from "./text-ar/Text11";
import Text10 from "./text-ar/Text10";
import Part from "./Part";
import YesOrNoP from "./YesorNoP";
import NavbarE from "./NavbarE";
function English() {
  return (
    <div>
      <Home navbar={<NavbarE />} />
      <Text1 />
      <Part5 />
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
      <Part2 />

      <Part
        chart={
          <YesOrNoP
            titles=" هل هناك عقد عمل موثق بينك وبين الجمعية/المنظمة التي تعملين بها؟"
            datas={[
              ["الخيار", "النسبة"],
              ["نعم", 0.716],
              ["لا", 0.246],
              ["لا أعرف", 0.038],
            ]}
          />
        }
        text={<Text8 />}
      />

      <Part
        chart={
          <YesOrNoP
            titles="هل لديك نسخة مصورة من عقد العمل؟"
            datas={[
              ["الخيار", "النسبة"],
              ["نعم", 0.567],
              ["لا", 0.418],
              ["لا أعرف", 0.005],
              ["وثيقة تطوع", 0.01],
            ]}
          />
        }
        text={<Text9 />}
      />
      <Text10 />
      <Text11 />
      <Text12 />
    </div>
  );
}

export default English;
