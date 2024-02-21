import { SendContact } from "@/components/LandingPage/SendContact";
import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";

export default function PhongThuy({}) {
  return (
    <>
      <MetaHead />
      <div className="chon-ngay-tot-container">
        <div className="px-5 pt-4" style={{ backgroundColor: "#FCF4DF" }}>
          <img src={imgSrc.phongThuyBanner1} className="w-100" />
          {/* <img src={imgSrc.phongThuyBanner2} className="w-100" /> */}
          <SendContact />
          <img src={imgSrc.phongThuyBanner3} className="w-100" />
        </div>
      </div>
    </>
  );
}
