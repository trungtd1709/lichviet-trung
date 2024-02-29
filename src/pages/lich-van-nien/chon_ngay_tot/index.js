import { ChonGoiPro } from "@/components/LandingPage/ChonGoiPro";
// import { DoiNguChuyenGia } from "@/components/LandingPage/ChonNgayTot/doiNguChuyenGia";
import { ContactChuyenGia } from "@/components/LandingPage/ContactChuyenGia";
import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";
import { youtubeVideoUrl } from "@/const/const";
import { useAuth } from "@/shared/customHooks/useAuth";

const sharedStyle = {
  background: "#FDF9EE",
};

const ChonNgayTotBlock = ({
  imgSrc,
  background,
  addtionalStyle,
  showBorderTop,
}) => {
  return (
    <div
      className="chon-ngay-tot-block"
      style={{
        borderTop: showBorderTop ? "1px solid #CCC" : null,
        ...sharedStyle,
        background: background ?? "#FDF9EE",
        ...addtionalStyle,
      }}
    >
      <img src={imgSrc} className="w-100" />
    </div>
  );
};

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="video-container">
      <iframe
        style={{ borderRadius: "6px" }}
        width={"100%"}
        height="100%"
        src={youtubeVideoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

const ChonNgayTotVideoBlock = ({ background }) => {
  return (
    <div
      className="d-flex flex-column align-items-center chon-ngay-tot-video-block"
      style={{
        ...sharedStyle,
        borderTop: "1px solid #CCC",
        background: background ?? "#FDF9EE",
      }}
    >
      <img className="video-block-title" src={imgSrc.chonNgayTotVideoTitle} />
      <YoutubeEmbed />
    </div>
  );
};

const DoiNguChuyenGia = () => {
  return (
    <div className="row px-3 mx-0">
      <div
        className="d-flex flex-column align-items-center col-md-6"
        style={{ gap: "10px" }}
      >
        <span
          className="extra-bold"
          style={{ color: "#606241", fontSize: "20px" }}
        >
          ĐỘI NGŨ CHUYÊN GIA
        </span>
        <div
          style={{
            borderRadius: "38px",
            backgroundColor: "#E7E6C8",
            color: "#606241",
          }}
          className="py-1 px-4"
        >
          Hỗ trợ 24/7
        </div>
        <div>
          <ul className="pl-0" style={{ color: "#606241" }}>
            <li className="mt-1">
              Lịch Việt có đội ngũ chuyên gia đứng sau đảm bảo chất lượng phần
              mềm.
            </li>
            <li className="mt-2">
              Nếu vì bất cứ một lý do nào khiến bạn không hài lòng hoặc chưa có
              được kết quả như mong muốn, chuyên gia Lịch Việt cam kết sẽ hỗ trợ
              MIỄN PHÍ 24/7!
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center">
        <img src={imgSrc.chonNgayTotBannerChuyenGia} className="w-100" />
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div className="row px-5 mx-0">
      <div className="col-md-3 d-flex align-items-center">
        <img src={imgSrc.chonNgayTotChuyenGia} className="w-100" />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center col-md-9">
        <span
          // className="extra-bold"
          style={{
            color: "#4F4F4F",
            fontSize: "16px",
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "300",
          }}
        >
          Được nghiên cứu & phát triển bởi đội ngũ chuyên gia trên 15 năm kinh
          nghiệm,
        </span>
        <span
          style={{
            color: "#4F4F4F",
            fontSize: "16px",
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "300",
          }}
        >
          tính năng <span className="normal">&quot;Xem Ngày Tốt&quot;</span>{" "}
          giúp bạn xác định được{" "}
          <span className="normal">GIỜ ĐẸP - NGÀY TỐT</span> để tiến hành việc
          đại sự.
        </span>

        <img src={imgSrc.trangTri1} className="w-50 mt-3" />
      </div>
    </div>
  );
};

export default function ChonNgayTot({}) {
  // useAuth();

  return (
    <>
      <MetaHead />
      <div className="chon-ngay-tot-container">
        <div style={{ backgroundColor: "#FCF6E6" }}>
          {/* <DoiNguChuyenGia />
        <Description /> */}
          <img src={imgSrc.chonNgayTotBanner1} className="w-100" />
          <ChonNgayTotBlock imgSrc={imgSrc.chonNgayTotBanner2} />
          <ChonNgayTotBlock
            imgSrc={imgSrc.chonNgayTotBanner3}
            background="#FCF6E6"
          />
          <ChonNgayTotBlock imgSrc={imgSrc.chonNgayTotBanner4} />
          <ChonNgayTotBlock
            imgSrc={imgSrc.chonNgayTotBanner5}
            showBorderTop={true}
          />
          {/* <ChonNgayTotBlock
          imgSrc={imgSrc.chonNgayTotBanner6}
          background="linear-gradient(180deg, #FBFFF6 0%, #FAFFEF 100%)"
          showBorderTop={true}
        /> */}

          <ChonGoiPro />

          {/* ưu đãi đi kèm */}
          <ChonNgayTotBlock
            imgSrc={imgSrc.chonNgayTotBanner7}
            addtionalStyle={{ paddingBottom: "15px" }}
            showBorderTop={true}
          />
          <ContactChuyenGia />
          <ChonNgayTotVideoBlock showBorderTop={true} />
          <ChonNgayTotBlock
            showBorderTop={true}
            imgSrc={imgSrc.quyTrinhChamSocKhachHang}
            addtionalStyle={{
              paddingBottom: "15px",
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          />
        </div>
      </div>
    </>
  );
}
