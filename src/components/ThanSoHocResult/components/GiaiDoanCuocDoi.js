import TitleHeader from "@/components/Title";
import _ from "lodash";
import { useSelector } from "react-redux";
import { SoDoGiaiDoanCuocDoi } from "./SoDoGiaiDoanCuocDoi";
import { useRouter } from "next/router";

export const GiaiDoanCuocDoi = (props) => {
  // const { giaiDoanCuocDoiData } = props;
  const router = useRouter();
  const giaiDoanCuocDoiData = useSelector(
    (state) => state.thanSoHoc.giaiDoanCuocDoi
  );
  const { chart } = giaiDoanCuocDoiData;

  return (
    <>
      {!_.isEmpty(chart) && (
        <>
          <TitleHeader title={"4 Giai Đoạn đỉnh cao cuộc đời"} />
          <div className="tshCard d-flex flex-column align-items-center">
            <div className="giai-doan-cuoc-doi-img-container">
              <SoDoGiaiDoanCuocDoi chart={chart} />
            </div>
            <button
              className="day-now d-block my-2"
              style={{ padding: "" }}
              onClick={() => {
                router.push("/than-so-hoc/4-giai-doan-dinh-cao-cuoc-doi");
              }}
            >
              Xem chi tiết
            </button>
          </div>
        </>
      )}
    </>
  );
};
