import TitleHeader from "@/components/Title";
import IconQuoteMark from "../../../../public/icons/IconQuoteMark";

const sampleData = ["11", "22", "", "", "5", "", "", "", "99"];

const SoDoGiaiMaNgaySinh = () => {
  return (
    <div className="grid-container">
      {sampleData.map((conSo, index) => (
        <div key={index} className={`grid-item ${conSo && "haveNumber"}`}>
          {conSo}
        </div>
      ))}
    </div>
  );
};

export const GiaiMaNgaySinh = () => {
  return (
    <>
      <TitleHeader title={"Giải mã ngày sinh"} />
      <div className="tshCard d-flex flex-column align-items-center">
        <SoDoGiaiMaNgaySinh />
        <button className="day-now d-block my-2" style={{ padding: "" }}>
          Xem chi tiết
        </button>
      </div>
    </>
  );
};
