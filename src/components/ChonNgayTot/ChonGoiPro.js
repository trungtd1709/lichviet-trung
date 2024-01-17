import Link from "next/link";
import CustomButton from "../Buttons/CustomButton";
import { useRouter } from "next/router";
import { CallApiBackend } from "@/api/apiRequest";
import { isEmpty } from "lodash";
import { getLoggedUserData } from "@/shared/utils";
import ModalAfterPayment from "../Modal/ModalAfterPayment";
import { useState } from "react";
import axios from "axios";
import { apiListServicesReponseExample } from "@/const/const";

const { imgSrc } = require("@/const/AppResource");

export const ChonGoiPro = () => {
  const [modalShow, setModalShow] = useState(false);
  const [cacGoiNgayTot, SetCacGoiNgayTot] = useState(
    apiListServicesReponseExample.data[0].premiumTypes
  );
  const router = useRouter();

  const createPaymentTransaction = (premiumTypeId) => {
    if (isEmpty(getLoggedUserData())) {
      window.localStorage.setItem("link_redirect", "/mua-goi");
      router.push("/login");
    } else {
      const user = getLoggedUserData();
      const { token_login } = user;
      console.log(token_login);
      if (premiumTypeId) {
        CallApiBackend(
          { premium_type_id: premiumTypeId, channel: "onepay", token_login },
          "/api/payment/create_transaction",
          "POST",
          true
        ).then(function (response) {
          if (response.data.status == 1) {
            window.location.href = response.data.data;
          } else {
            alert(response.data.message);
          }
        });
      }
    }
  };

  const ImgChonGoi = ({ imgSrc, premium_type_id }) => {
    return (
      <img
        className="col-4"
        src={imgSrc}
        style={{ cursor: "pointer" }}
        onClick={() => {
          createPaymentTransaction(premium_type_id);
        }}
      />
    );
  };

  return (
    <>
      <ModalAfterPayment show={modalShow} setShow={setModalShow}  />
      <button
        onClick={() => {
          setModalShow(true);
        }}
      >
        test modal
      </button>
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
          {cacGoiNgayTot.map((goi, key) => {
            const { id, image_purchased, image_nopurchase } = goi;
            const baseImgUrl = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;
            const imgUrl = baseImgUrl + image_nopurchase;
            return (
              <ImgChonGoi key={key} premium_type_id={id} imgSrc={imgUrl} />
            );
          })}
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
    </>
  );
};
