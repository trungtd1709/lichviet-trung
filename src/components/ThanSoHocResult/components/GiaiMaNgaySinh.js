import TitleHeader from "@/components/Title";
import _ from "lodash";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { SoDoGiaiMaNgaySinh } from "./SoDoGiaiMaNgaySinh";

export const GiaiMaNgaySinh = (props) => {
  // const { giaiMaNgaySinhData } = props;
  const router = useRouter();
  const giaiMaNgaySinhData = useSelector(
    (state) => state.thanSoHoc.giaiMaNgaySinh
  );

  const conSoGiaiMaNgaySinh = giaiMaNgaySinhData?.birthday?.con_so;
  return (
    <>
      {!_.isEmpty(giaiMaNgaySinhData) && (
        <>
          <TitleHeader title={"Giải mã ngày sinh"} />
          <div className="tshCard d-flex flex-column align-items-center">
            <SoDoGiaiMaNgaySinh conSoGiaiMaNgaySinh={conSoGiaiMaNgaySinh} />
            <button
              onClick={() => {
                router.push("/than-so-hoc/giai-ma-ngay-sinh");
              }}
              className="day-now d-block my-2"
              style={{ padding: "" }}
            >
              Xem chi tiết
            </button>
          </div>
        </>
      )}
    </>
  );
};
