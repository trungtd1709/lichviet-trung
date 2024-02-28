import { ChonGoiPro } from "@/components/LandingPage/ChonGoiPro";
import { SendContact } from "@/components/LandingPage/SendContact";
import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";

export default function PhongThuy({}) {
  return (
    <>
      <MetaHead />
      <div className="chon-ngay-tot-container">
        <div className="" style={{ backgroundColor: "#E1EAF6" }}>
          <img src={imgSrc.phongThuyBanner1} className="w-100" />
          <VideoBanner />

          {/* <div className="w-100 px-3 pt-3 pb-3"> */}
          <img src={imgSrc.phongThuyBanner3} className="w-100" />
          {/* </div> */}
          <ChonGoiPro />
        </div>
      </div>
    </>
  );
}

const VideoBanner = () => {
  return (
    <div className="row px-4 py-3">
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        {" "}
        <img src={imgSrc.phongThuyBanner2} className="video-phong-thuy-ldp-banner" />
      </div>
      <div className="col-md-6 d-flex align-items-center">
        <span
          className="mulish pc-18px semi-bold mt-2"
          style={{
            color: "#2B8C4B",
            textAlign: "start",
            textIndent: 0
          }}
        >
          Xem phong thủy tưởng chừng rất khó khăn & chỉ có các thày phong thủy mới làm được. Nhưng với tính năng Phong Thủy tại Lịch Việt, bạn có thể tự xem cho mình vô cùng đơn giản.
        </span>
      </div>
    </div>
  );
};
