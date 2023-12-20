import { useSelector } from "react-redux";
import { SoDoGiaiDoanCuocDoi } from "./SoDoGiaiDoanCuocDoi";
import { ThanSoHocTextContent } from "./ThanSoHocTextContent";
import { useEffect } from "react";

const GiaiDoanCuocDoiDetail = (props) => {
  const giaiDoanCuocDoiData = useSelector(
    (state) => state.thanSoHoc.giaiDoanCuocDoi
  );

  const { chart, data } = giaiDoanCuocDoiData;
  useEffect(() => {
    console.log(giaiDoanCuocDoiData);
    debugger;
  }, [giaiDoanCuocDoiData]);

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "20px" }}
      >
        <div className="giai-doan-cuoc-doi-img-container">
          <SoDoGiaiDoanCuocDoi chart={chart} />
        </div>
      </div>
      <ThanSoHocTextContent data={data} />
    </>
  );
};

export default GiaiDoanCuocDoiDetail;
