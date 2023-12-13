import TitleHeader from "@/components/Title";
import { imgSrc } from "@/const/AppResource";
import IconLeftLine from "../../../../public/icons/IconLeftLine";

const sampleData = ["11", "22", "", "", "5", "", "", "", "99"];

const Line = () => {
  return (
    <div
      style={{
        background: "red",
        height: "2px",
        width: "70px",
        transform: "rotate(150deg)",
        position: "absolute",
        top: "0px"
        // zIndex: "0",
      }}
    />
  );
};

const NgaySinh = () => {
  return (
    <div style={{ position: "relative" }}>
      <Line />
      <div
        className="ngay-sinh"
        style={{ zIndex: "1", position: "absolute" }}
      ></div>
    </div>
  );
};

export const SoDoGiaiDoanCuocDoi = () => {
  return (
    <div className="so-do-giai-doan-cuoc-doi">
      <div
        className="d-flex flex-row justify-content-between"
        style={{ padding: "20px" }}
      >
        <NgaySinh />
      </div>

      {/* <IconLeftLine/> */}
    </div>
  );
};
