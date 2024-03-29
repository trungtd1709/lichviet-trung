import { YeuToPhongThuy } from "@/components/LandingPage/PhongThuyChuyenGia/YeuToPhongThuy";
import { SendContact } from "@/components/LandingPage/SendContact";
import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";

export default function PhongThuyChuyenGia({}) {
  return (
    <>
      <MetaHead />
      <div className="chon-ngay-tot-container">
        <div className="" style={{ backgroundColor: "#FCF4DF" }}>
          <img src={imgSrc.phongThuyChuyenGiaBanner1} className="w-100" />
          {/* <img src={imgSrc.phongThuyBanner2} className="w-100" /> */}

          <SendContact
            bannerImg={imgSrc.phongThuyChuyenGiaBanner4}
            className="w-100 mx-0"
            backgroundColor="#FFFFE9"
            buttonTitle="ĐĂNG KÝ TƯ VẤN"
          />
          <div className="w-100 px-3 pt-3 pb-3">
            <img src={imgSrc.phongThuyChuyenGiaBanner3} className="w-100" />
          </div>
          {/* <YeuToPhongThuy/> */}
        </div>
      </div>
    </>
  );
}
