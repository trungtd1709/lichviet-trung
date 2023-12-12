import IconProfile from "../../../public/icons/IconProfile";
import IconQuoteMark from "../../../public/icons/IconQuoteMark";
import TitleHeader from "../Title";
import ConSo from "./components/ConSo";
import NgayCaNhan from "./components/NgayCaNhan";

const ThanSoHocResult = (props) => {
  return (
    <div
      className="than-so-hoc-result"
      // style={{background:"red"}}
    >
      <div className="tshCard d-flex flex-row">
        <div className="avatar">
          <IconProfile />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-column" style={{ gap: "8px" }}>
              <span className="personalInfo">Name</span>
              <span className="personalInfo">11/11/1111</span>
            </div>
            <IconQuoteMark />
          </div>
          <span className="mt-3">
            "Mọi thành công đều cần một bắt đầu. Tự tin để mở đầu cho một thành
            công sắp tới."
          </span>
        </div>
      </div>
      <TitleHeader title={"NGÀY CÁ NHÂN"} />
      <div className="tshCard d-flex flex-column">
        <div className="d-flex flex-row justify-content-center w-100 mb-3 ">
          <NgayCaNhan />
        </div>
        <span className="bold-18">
          24/11/2023 - Ngày cá nhân của bạn là số 8
        </span>
        <div className="d-flex flex-column border-top my-3">
          <span className="mt-3">
            "Mọi thành công đều cần một bắt đầu. Tự tin để mở đầu cho một thành
            công sắp tới."
          </span>
        </div>
      </div>
      <TitleHeader title={"GIẢI MÃ CÁC CHỈ SỐ"} />
      <div className="d-flex flex-row">
        <ConSo />
      </div>
    </div>
  );
};

export default ThanSoHocResult;
