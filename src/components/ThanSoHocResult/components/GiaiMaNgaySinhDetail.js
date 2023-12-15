import { useSelector } from "react-redux";
import { SoDoGiaiMaNgaySinh } from "./SoDoGiaiMaNgaySinh";
import { ThanSoHocTextContent } from "./ThanSoHocTextContent";

const GiaiMaNgaySinhDetail = (props) => {
  const giaiMaNgaySinhData = useSelector(
    (state) => state.thanSoHoc.giaiMaNgaySinh
  );

  const conSoGiaiMaNgaySinh = giaiMaNgaySinhData?.birthday?.con_so;

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "35px" }}
      >
        <SoDoGiaiMaNgaySinh conSoGiaiMaNgaySinh={conSoGiaiMaNgaySinh} />
      </div>
      <ThanSoHocTextContent data={giaiMaNgaySinhData.birthday.data} />
    </>
  );
};

export default GiaiMaNgaySinhDetail;
