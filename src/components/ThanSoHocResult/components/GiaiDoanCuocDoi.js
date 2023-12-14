import TitleHeader from "@/components/Title";
import { imgSrc } from "@/const/AppResource";
import { SoDoGiaiDoanCuocDoi } from "./SoDoGiaiDoanCuocDoi";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const sampleData = ["11", "22", "", "", "5", "", "", "", "99"];

export const GiaiDoanCuocDoi = (props) => {
  // const { giaiDoanCuocDoiData } = props;
  const giaiDoanCuocDoiData = useSelector(state => state.thanSoHoc.giaiDoanCuocDoi);  
 
  return (
    <>
      <TitleHeader title={"4 Giai Đoạn đỉnh cao cuộc đời"} />
      <div className="tshCard d-flex flex-column align-items-center">
        <div className="giai-doan-cuoc-doi-img-container">
          {/* <img
            className="giai-doan-cuoc-doi-img w-100"
            src={imgSrc.giaiDoanCuocDoi}
          /> */}
          <SoDoGiaiDoanCuocDoi />
        </div>
        <button className="day-now d-block my-2" style={{ padding: "" }}>
          Xem chi tiết
        </button>
      </div>
    </>
  );
};
