import {
  CallApiBackend,
  createPaymentTransaction,
  fetchServicesList,
} from "@/api/apiRequest";
import { AuthContext } from "@/context/authContext";
import _, { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const { imgSrc } = require("@/const/AppResource");

export const ChonGoiPro = ({
  showBorderTop,
  background = "linear-gradient(180deg, #FBFFF6 0%, #FAFFEF 100%)",
  backgroundImage = imgSrc.flowerBg,
}) => {
  const [cacGoiNgayTot, setCacGoiNgayTot] = useState([]);
  const { updateUserData, userData } = useContext(AuthContext);

  console.log("[backgroundImage:]", backgroundImage);

  useEffect(() => {
    const getServicesList = async () => {
      const allServiceList = await fetchServicesList();
      // để tạm
      setCacGoiNgayTot(allServiceList[0]?.premiumTypes);
    };
    getServicesList();
  }, []);

  const router = useRouter();

  const ImgChonGoi = ({ imgSrc, premium_type_id, onClick }) => {
    return (
      <div className="col-4 img-chon-goi-wrapper">
        <img
          className="w-100"
          src={imgSrc}
          style={{ cursor: "pointer" }}
          onClick={onClick}
        />
      </div>
    );
  };

  return (
    <>
      <div
        className="chon-ngay-tot-block d-flex flex-column"
        style={{
          borderTop: showBorderTop ? "1px solid #CCC" : "0px solid #CCC",
          // background: background,
          backgroundImage: `url(${backgroundImage})`,
          // backgroundImage: backgroundImage,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
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
        <div className="d-flex flex-row my-3 align-items-center">
          {cacGoiNgayTot?.map((goi, key) => {
            const { id, image_purchased, image_nopurchase } = goi;
            const { premiums = [] } = userData || {};
            const isPremiumActive = !!_.find(premiums, { premium_type_id: id });
            const baseImgUrl = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;
            const imgPath = isPremiumActive
              ? image_purchased
              : image_nopurchase;
            const fullImgUrl = baseImgUrl + imgPath;
            return (
              <ImgChonGoi
                key={key}
                // premium_type_id={id}
                imgSrc={fullImgUrl}
                // onClick={() => {
                //   isPremiumActive
                //     ? alert("Bạn đã đăng ký gói này")
                //     : createPaymentTransaction(id);
                // }}
                onClick={() => {
                  createPaymentTransaction({
                    premiumTypeId: id,
                    router,
                  });
                }}
              />
            );
          })}
        </div>
        {/* <span
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
        </span> */}
        {/* <div className="d-flex flex-row justify-content-between">
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
        </div> */}
      </div>
    </>
  );
};
