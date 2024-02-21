import { ChonGoiPro } from "@/components/LandingPage/ChonGoiPro";
import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";
import { appColor } from "@/const/appColor";

export default function GiaiMaNgaySinh({}) {
  //   useAuth();

  return (
    <>
      <MetaHead />
      <div className="chon-ngay-tot-container">
        <div style={{ backgroundColor: "white" }}>
          <img src={imgSrc.tuVi1} className="w-100" />
          <ChonGoiPro />
          <div className="d-flex justify-content-center">
            <img
              className="landingPageImgBanner"
              src={imgSrc.tuVi2}
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
