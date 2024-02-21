import { ChonGoiPro } from "@/components/LandingPage/ChonGoiPro";
import { ContactChuyenGia } from "@/components/LandingPage/ContactChuyenGia";
import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";
import { appColor } from "@/const/appColor";
import { youtubeVideoUrl } from "@/const/const";
import { useAuth } from "@/shared/customHooks/useAuth";

const SeperateLine = ({ style }) => {
  return (
    <div
      style={{
        width: "50%",
        height: "1px",
        backgroundColor: "#CCCCCC",
        ...style,
      }}
    />
  );
};

const landingPageImgBanner = () =>{
    return <div></div>;
}

export default function GiaiMaNgaySinh({}) {
  //   useAuth();

  return (
    <>
      <MetaHead />
      <div className="chon-ngay-tot-container">
        <div style={{ backgroundColor: appColor.landingPageMainBg }}>
          <img src={imgSrc.landingPageImgBanner1} className="w-100" />
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ marginBottom: "15px", marginTop: "15px" }}
          >
            <img style={{ height: "50px" }} src={imgSrc.btnDangKyNgayYellow} />
            <SeperateLine style={{ marginTop: "30px" }} />
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "30px" }}
          >
            <img className="landingPageImgBanner" src={imgSrc.landingPageImgBanner2} style={{ width: "80%" }} />
          </div>
          <div
            className="d-flex flex-column align-items-center justify-content-start"
            style={{ marginTop: "20px" }}
          >
            <SeperateLine style={{ marginBottom: "25px" }} />
            <img className="landingPageImgBanner" src={imgSrc.landingPageImgBanner3} style={{ width: "70%" }} />
          </div>
          <div
            className="d-flex flex-column align-items-center justify-content-start"
            style={{
              background: `url(${imgSrc.landingPageImgBanner4})`,
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            //   marginTop: "40px",
            }}
          >
            <SeperateLine style={{ marginTop: "30px" }} />
            <ChonGoiPro background="transparent" />
          </div>
        </div>
      </div>
    </>
  );
}
