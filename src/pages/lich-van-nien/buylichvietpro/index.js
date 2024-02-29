import { ChonGoiPro } from "@/components/LandingPage/ChonGoiPro";
import { SendContact } from "@/components/LandingPage/SendContact";
import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";

export default function Combo({}) {
  return (
    <>
      <MetaHead />
      <div className="chon-ngay-tot-container">
        <div className="" style={{ backgroundColor: "#FCF4DF" }}>
          <img src={imgSrc.comboBanner1} className="w-100" />
          <VideoBanner />
          <img src={imgSrc.comboBanner3} className="w-100" />
          <div style={{}}>
            <ChonGoiPro
              background=""
              backgroundImage={imgSrc.cloudBackGround}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const VideoBanner = () => {
  return (
    <div className="row px-4 py-3">
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <span
          className="mulish pc-20px extra-bold"
          style={{
            color: "#2B8C4B",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Chìa khóa khám phá vận mệnh, tự gỡ rối vấn đề cuộc sống
        </span>
        <span
          className="mulish pc-18px semi-bold mt-2"
          style={{
            color: "#C96E3B",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Với combo 5 gói dịch vụ Tử Vi - Phong Thủy tại Lịch Việt
        </span>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        {" "}
        <img src={imgSrc.comboBanner2} className="video-combo-ldp-banner" />
      </div>
    </div>
  );
};
