import TitleHeader from "@/components/Title";
import { imgSrc } from "@/const/AppResource";
import IconLeftLine from "../../../../public/icons/IconLeftLine";

const sampleData = ["11", "22", "", "", "5", "", "", "", "99"];

const Line = (props) => {
  const { additionalLineStyle } = props;
  return (
    <div
      style={{
        background: "white",
        height: "2px",
        width: "100px",
        transform: "rotate(150deg)",
        position: "absolute",
        ...additionalLineStyle,
      }}
    />
  );
};

const Circle = (props) => {
  const {
    additionalStyle,
    additionalLeftLineStyle,
    additionalRightLineStyle,
    left,
    right,
    longLeftLine,
    longRightLine,
    longLeftLineStyle,
    longRightLineStyle,
    className,
    number,
  } = props;
  return (
    <div style={{ position: "relative" }}>
      {left && <Line additionalLineStyle={additionalLeftLineStyle} />}
      {right && <Line additionalLineStyle={additionalRightLineStyle} />}
      {longLeftLine && <Line additionalLineStyle={longLeftLineStyle} />}
      {longRightLine && <Line additionalLineStyle={longRightLineStyle} />}
      <div
        className={className}
        style={{ zIndex: "1", position: "relative", ...additionalStyle }}
      >
        {number}
      </div>
    </div>
  );
};

export const SoDoGiaiDoanCuocDoi = (props) => {
  const { chart } = props;
  return (
    <div className="so-do-giai-doan-cuoc-doi">
      <div
        className="d-flex flex-row justify-content-center align-items-end"
        // style={{ height: "45px" }}
      >
        <Circle className="red" />
      </div>
      <div
        className="d-flex flex-row justify-content-center align-items-end"
        style={{ height: "55px" }}
      >
        <Circle className="green" />
      </div>
      <div
        className="d-flex flex-row align-items-end"
        style={{ padding: "0px 0px", height: "45px", position: "relative" }}
      >
        <div className="w-50 d-flex justify-content-center">
          {/* <OrangeCircle
            left={true}
            additionalLeftLineStyle={{
              transform: "rotate(40deg)",
              width: "80px",
              top: "-10px",
              left: "120px",
            }}
            additionalStyle={{ left: "20px" }}
          /> */}
          <Circle
            left={true}
            additionalLeftLineStyle={{
              transform: "rotate(40deg)",
              width: "80px",
              top: "-10px",
              left: "70px",
            }}
            additionalStyle={{ left: "20px" }}
            className="orange"
          />
        </div>
        <div className="w-50 d-flex justify-content-center">
          <Circle
            right={true}
            additionalRightLineStyle={{
              transform: "rotate(140deg)",
              width: "80px",
              top: "-10px",
              right: "70px",
            }}
            additionalStyle={{ right: "20px" }}
            className="orange"
          />
          {/* <OrangeCircle
            right={true}
            additionalRightLineStyle={{
              transform: "rotate(140deg)",
              width: "80px",
              top: "-10px",
              right: "120px",
            }}
            additionalStyle={{ right: "20px" }}
          /> */}
        </div>
      </div>
      <div
        className="d-flex flex-row justify-content-between align-items-end"
        style={{ padding: "0px", height: "45px" }}
      >
        <Circle
          right={true}
          longRightLine={true}
          longRightLineStyle={{
            transform: "rotate(130deg)",
            width: "200px",
            top: "-50px",
            left: "-30px",
          }}
          additionalRightLineStyle={{
            width: "100px",
            top: "-10px",
            right: "-70px",
          }}
          className="ngay-sinh"
        />
        <Circle
          left={true}
          right={true}
          additionalLeftLineStyle={{
            transform: "rotate(40deg)",
            width: "80px",
            top: "-10px",
            left: "-50px",
          }}
          additionalRightLineStyle={{
            transform: "rotate(140deg)",
            width: "80px",
            top: "-10px",
            right: "-50px",
          }}
          className="ngay-sinh"
        />
        <Circle
          left={true}
          additionalLeftLineStyle={{
            transform: "rotate(30deg)",
            width: "100px",
            top: "-10px",
            left: "-70px",
          }}
          longLeftLine={true}
          longLeftLineStyle={{
            transform: "rotate(50deg)",
            width: "200px",
            top: "-50px",
            right: "-30px",
          }}
          className="ngay-sinh"
        />
      </div>
      {/* <IconLeftLine/> */}
    </div>
  );
};
