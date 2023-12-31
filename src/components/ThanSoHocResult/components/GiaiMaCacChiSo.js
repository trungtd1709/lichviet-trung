import TitleHeader from "@/components/Title";
import ConSo from "./ConSo";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetConSoData } from "@/redux/slices/thanSoHocSlice";

const { imgSrc } = require("@/const/AppResource");

const GiaiMaCacChiSo = (props) => {
  // const { giaiMaChiSoData = [] } = props;
  const giaiMaChiSoData = useSelector((state) => state.thanSoHoc.topics);

  return (
    <>
      {giaiMaChiSoData && giaiMaChiSoData?.length > 0 && (
        <div style={{ marginBottom: "35px" }}>
          <TitleHeader className={"mb-0"} title={"GIẢI MÃ CÁC CHỈ SỐ"} />
          <div style={{ fontStyle: "italic", marginBottom: "15px",marginTop:'8px' }}>
            (Click vào từng ô để xem luận giải chi tiết)
          </div>
          <div
            className="d-flex flex-row justify-content-start justify-content-md-between flex-wrap"
            style={{ gap: "25px" }}
          >
            {giaiMaChiSoData?.map((item, index) => {
              const { title, so } = item;
              if (so) {
                return <ConSo key={index} {...item} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default GiaiMaCacChiSo;
