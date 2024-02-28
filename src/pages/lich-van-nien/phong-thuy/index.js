import { SendContact } from "@/components/LandingPage/SendContact";
import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";

export default function PhongThuy({}) {
  return (
    <>
      <MetaHead />
      <div className="chon-ngay-tot-container">
        <div className="pt-4" style={{ backgroundColor: "#FCF4DF" }}>
          <img src={imgSrc.phongThuyBanner1} className="w-100" />
          {/* <img src={imgSrc.phongThuyBanner2} className="w-100" /> */}

          <SendContact
            bannerImg={imgSrc.phongThuyBanner4}
            className="w-100 mx-0"
            backgroundColor="#FFFFE9"
            buttonTitle="ĐĂNG KÝ TƯ VẤN"
          />
          <div className="w-100 px-3 pt-3 pb-3">
            <img src={imgSrc.phongThuyBanner3} className="w-100" />
          </div>
        </div>
      </div>
    </>
  );
}
