import TitleHeader from "@/components/Title";
import IconQuoteMark from "../../../../public/icons/IconQuoteMark";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SoDoGiaiMaNgaySinh = ({ conSoGiaiMaNgaySinh = [] }) => {
  return (
    <div className="grid-container">
      {conSoGiaiMaNgaySinh.map((conSo, index) => (
        <div key={index} className={`grid-item ${conSo && "haveNumber"}`}>
          {conSo}
        </div>
      ))}
    </div>
  );
};

export const GiaiMaNgaySinh = (props) => {
  // const { giaiMaNgaySinhData } = props;
  const giaiMaNgaySinhData = useSelector(
    (state) => state.thanSoHoc.giaiMaNgaySinh
  );

  const conSoGiaiMaNgaySinh = giaiMaNgaySinhData?.birthday?.con_so;
  return (
    <>
      {giaiMaNgaySinhData && (
        <>
          <TitleHeader title={"Giải mã ngày sinh"} />
          <div className="tshCard d-flex flex-column align-items-center">
            <SoDoGiaiMaNgaySinh conSoGiaiMaNgaySinh={conSoGiaiMaNgaySinh} />
            <button className="day-now d-block my-2" style={{ padding: "" }}>
              Xem chi tiết
            </button>
          </div>
        </>
      )}
    </>
  );
};
