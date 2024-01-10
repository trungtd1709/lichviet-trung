import { ContactChuyenGia } from "@/components/ChonNgayTot/ContactChuyenGia";
import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";
import { Container } from "react-bootstrap";

const sharedStyle = {
  background: "#FDF9EE",
  // paddingLeft: "5%",
  // paddingRight: "5%",
  // paddingTop: "10px",
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
  const videoSrc = "https://www.youtube.com/embed/iuhoiXknBQc";
  return (
    <div className="video-container">
      <iframe
        style={{ borderRadius: "6px" }}
        width={"100%"}
        height="100%"
        src={videoSrc}
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

export default function Home({}) {
  return (
    <>
      <MetaHead />
      <div className="chon-ngay-tot-container">
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
        <ChonNgayTotBlock
          imgSrc={imgSrc.chonNgayTotBanner6}
          background="linear-gradient(180deg, #FBFFF6 0%, #FAFFEF 100%)"
          showBorderTop={true}
        />
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
    </>
  );
}
