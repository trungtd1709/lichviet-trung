import Link from "next/link";
import CustomButton from "../Buttons/CustomButton";
import { useRouter } from "next/router";

const { imgSrc } = require("@/const/AppResource");

const ImgChonGoi = ({ imgSrc }) => {
  return <img className="col-4" src={imgSrc} style={{ cursor: "pointer" }} />;
};

export const ChonGoiPro = () => {
  const router = useRouter();
  return (
    <div
      className="chon-ngay-tot-block d-flex flex-column"
      style={{
        borderTop: "1px solid #CCC",
        // ...sharedStyle,
        background: "linear-gradient(180deg, #FBFFF6 0%, #FAFFEF 100%)",
        // ...addtionalStyle,
      }}
    >
      <span
        className="mulish pc-20px extra-bold"
        style={{ color: "#2B8C4B", textAlign: "center" }}
      >
        ĐĂNG KÝ ĐỂ NHẬN NGAY ƯU ĐÃI
      </span>
      <span
        className="mulish pc-20px extra-bold"
        style={{ color: "#C96E3B", textAlign: "center" }}
      >
        SỐ LƯỢNG CÓ HẠN
      </span>
      <div className="d-flex flex-row mt-2">
        <ImgChonGoi imgSrc={imgSrc.imgGoiBaThang} />
        <ImgChonGoi imgSrc={imgSrc.imgGoiSauThang} />
        <ImgChonGoi imgSrc={imgSrc.imgGoiMotNam} />
      </div>
      <span
        className="mulish pc-16px normal mt-3"
        style={{ color: "#606241", textAlign: "center" }}
      >
        Bạn có thể thanh toán qua Momo/ShopeePay.
      </span>
      <span
        className="mulish pc-16px normal"
        style={{
          color: "#239A2F",
          textAlign: "center",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Xem hướng dẫn tại đây
      </span>
      <div className="d-flex flex-row justify-content-between">
        <span
          onClick={() => {
            router.push("/dieu-khoan-su-dung");
          }}
          className="mulish pc-16px normal"
          style={{
            color: "#239A2F",
            textAlign: "center",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Điều khoản sử dụng
        </span>
        <span
          className="mulish pc-16px normal"
          style={{
            color: "#239A2F",
            textAlign: "center",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            router.push("/chinh-sach-bao-mat");
          }}
        >
          Chính sách bảo mật
        </span>
      </div>
    </div>
  );
};
