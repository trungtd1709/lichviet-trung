import { CallApiBackend, fetchServicesList } from "@/api/apiRequest";
import { getLoggedUserData } from "@/shared/utils";
import _, { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import ModalAfterPayment from "../Modal/ModalAfterPayment";

const { imgSrc } = require("@/const/AppResource");

export const ChonGoiPro = () => {
  const [cacGoiNgayTot, setCacGoiNgayTot] = useState([]);
  useEffect(() => {
    const getServicesList = async () => {
      const allServiceList = await fetchServicesList();
      // để tạm
      setCacGoiNgayTot(allServiceList[0]?.premiumTypes);
    };
    getServicesList();
  }, []);

  const userData = useMemo(() => {
    return getLoggedUserData();
  }, []);

  const router = useRouter();

  const createPaymentTransaction = (premiumTypeId) => {
    if (isEmpty(getLoggedUserData())) {
      window.localStorage.setItem("link_redirect", "/mua-goi");
      router.push("/login");
    } else {
      const { token_login } = userData;
      // console.log(token_login);
      if (premiumTypeId) {
        CallApiBackend(
          { premium_type_id: premiumTypeId, channel: "onepay", token_login },
          "/api/payment/create_transaction",
          "POST",
          true
        ).then(function (response) {
          if (response.data.status == 1) {
            localStorage.setItem("premiumTypeId", premiumTypeId);
            window.location.href = response.data.data;
          } else {
            alert(response.data.message ?? response.data.msg);
          }
        });
      }
    }
  };

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
        <div className="d-flex flex-row my-3 align-items-center">
          {cacGoiNgayTot.map((goi, key) => {
            const { id, image_purchased, image_nopurchase } = goi;
            const { premiums = [] } = userData;
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
                  createPaymentTransaction(id);
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
