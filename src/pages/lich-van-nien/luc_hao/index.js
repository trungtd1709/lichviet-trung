import { ChonGoiPro } from "@/components/LandingPage/ChonGoiPro";
import { SendContact } from "@/components/LandingPage/SendContact";
import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";

export default function LucHao({}) {
  return (
    <>
      <MetaHead />
      <div className="chon-ngay-tot-container">
        <div className="" style={{ backgroundColor: "#FCF4DF" }}>
          <img src={imgSrc.lucHaoBanner1} className="w-100" />
          <div
            style={{
              background: "linear-gradient(180deg, #FBFFF7 0%, #FAFFEF 100%)",
            }}
          >
            <ChonGoiPro background="" />
          </div>
          <img src={imgSrc.lucHaoBanner2} className="w-100" />
          <div className="px-3">
            <div className="py-3 px-3" style={{background: "#FFFFE9"}}>
              <SendContact
                bannerImg={imgSrc.phongThuyBanner4}
                className="w-100 mx-0 mt-0"
                // backgroundColor="#FFFFE9"
              />
            </div>
          </div>
            <img src={imgSrc.lucHaoBanner3} className="w-100" />
        </div>
      </div>
    </>
  );
}
