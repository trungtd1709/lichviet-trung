import { GiaiDoanCuocDoi } from "./components/GiaiDoanCuocDoi";
import GiaiMaCacChiSo from "./components/GiaiMaCacChiSo";
import { GiaiMaNgaySinh } from "./components/GiaiMaNgaySinh";
import NgayCaNhan from "./components/NgayCaNhan";
import { TongQuan } from "./components/TongQuan";

const ThanSoHocResult = (props) => {
  return (
    <div
      className="than-so-hoc-result"
      // style={{background:"red"}}
    >
      <TongQuan />
      <NgayCaNhan />
      <GiaiMaCacChiSo />
      <GiaiMaNgaySinh />
      <GiaiDoanCuocDoi />
    </div>
  );
};

export default ThanSoHocResult;
