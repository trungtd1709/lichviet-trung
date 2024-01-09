import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";
import { Container } from "react-bootstrap";

const sharedStyle = {
  background: "#FDF9EE",
  paddingLeft: "5%",
  paddingRight: "5%",
  paddingTop: "10px",
};

const Block = ({ imgSrc }) => {
  return (
    <div
      style={{
        ...sharedStyle,
        background: "#FCF6E6",
      }}
    >
      <img src={imgSrc} className="w-100" />
    </div>
  );
};

export default function Home({}) {
  return (
    <>
      <MetaHead />
      {/* <Container className="mt-4"> */}
      <img src={imgSrc.test} className="w-100" />
      <div
        style={{
          ...sharedStyle,
        }}
      >
        <img src={imgSrc.test2} className="w-100" />
      </div>
      <div
        style={{
          ...sharedStyle,
          background: "#FCF6E6",
        }}
      >
        <img src={imgSrc.test3} className="w-100" />
      </div>
      <div
        style={{
          ...sharedStyle,
        }}
      >
        <img src={imgSrc.test4} className="w-100" />
      </div>
      <div
        style={{
          ...sharedStyle,
        }}
      >
        <img src={imgSrc.test5} className="w-100" />
      </div>
      <div
        style={{
          ...sharedStyle,
          background: "linear-gradient(180deg, #FBFFF6 0%, #FAFFEF 100%)",
        }}
      >
        <img src={imgSrc.test6} className="w-100" />
      </div>
      <div
        style={{
          ...sharedStyle,
          paddingBottom: "15px",
        }}
      >
        <img src={imgSrc.test7} className="w-100" />
      </div>
      <div
        style={{
          ...sharedStyle,
          paddingBottom: "15px",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <img src={imgSrc.quyTrinhChamSocKhachHang} className="w-100" />
      </div>
      {/* </Container> */}
    </>
  );
}
