import { ChonGoiPro } from "@/components/LandingPage/ChonGoiPro";
import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";
import { appColor } from "@/const/appColor";

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

const landingPageImgBanner = () => {
  return <div></div>;
};

export default function GiaiMaNgaySinh({}) {
  //   useAuth();

  const chonGoiProDivId = "chon-goi-pro";

  const btnDkyNgayOnClick = () => {
    const element = document.getElementById(chonGoiProDivId);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
            <img
              style={{ height: "50px", cursor: "pointer" }}
              src={imgSrc.btnDangKyNgayYellow}
              onClick={btnDkyNgayOnClick}
            />
            <SeperateLine style={{ marginTop: "30px" }} />
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "30px" }}
          >
            <img
              className="landingPageImgBanner"
              src={imgSrc.landingPageImgBanner2}
              style={{ width: "80%" }}
            />
          </div>
          <div
            className="d-flex flex-column align-items-center justify-content-start"
            style={{ marginTop: "20px" }}
          >
            <SeperateLine style={{ marginBottom: "25px" }} />
            <img
              className="landingPageImgBanner"
              src={imgSrc.landingPageImgBanner3}
              style={{ width: "70%" }}
            />
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
            <ChonGoiPro background="transparent" id={chonGoiProDivId} />
          </div>
        </div>
      </div>
    </>
  );
}
