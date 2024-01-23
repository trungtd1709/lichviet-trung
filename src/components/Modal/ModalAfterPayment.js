import { fetchServicesList, fetchUserDetail } from "@/api/apiRequest";
import { imgSrc } from "@/const/AppResource";
import { onepayResult } from "@/const/const";
import { AuthContext } from "@/context/authContext";
import { formatNumber } from "@/shared/utils";
import _ from "lodash";
import moment from "moment";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import CustomButton from "../Buttons/CustomButton";

function ModalAfterPayment(props) {
  const { show, queryParams } = props;
  const { updateUserData, userData } = useContext(AuthContext);
  const router = useRouter();
  const { result, vpc_MerchTxnRef } = queryParams;
  const [currentPremiumService, setCurrentPremiumService] = useState({});
  const baseUrlImg = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;

  useEffect(() => {
    const getPremiumServiceInfo = async () => {
      const premiumTypeId = localStorage.getItem("premiumTypeId");
      if (!premiumTypeId) {
        router.push("/");
      }

      const services = await fetchServicesList();
      const allPremiumServices = services.flatMap((service) => {
        const { icon, premiumTypes } = service;
        return premiumTypes.map((premiumType) => ({ ...premiumType, icon }));
      });
      let premiumService = _.find(allPremiumServices, {
        id: premiumTypeId,
      });
      const today = moment();
      const expiryDate = today.add(3, "months").format("DD-MM-YYYY");
      premiumService.expiryDate = expiryDate;
      if (!_.isEmpty(premiumService)) {
        setCurrentPremiumService(premiumService);
      }
    };
    getPremiumServiceInfo();
  }, []);

  const isPaymentSuccess = useMemo(() => {
    if (result === onepayResult.success) {
      return true;
    } else {
      return false;
    }
  }, []);

  useEffect(() => {
    const updateNewUserData = async () => {
      const { token_login } = userData;
      if (token_login) {
        try {
          const newUserData = await fetchUserDetail({ token_login });
          if (!_.isEmpty(newUserData)) {
            const tempData = { ...newUserData, token_login, test: "test" };
            updateUserData(tempData);
            // updateUserData(newUserData);
          }
        } catch (err) {
          console.error("Failed to fetch user data:", err);
        }
      }
    };
    if (isPaymentSuccess) {
      updateNewUserData();
    }
  }, [isPaymentSuccess, userData]);

  const addtionalServiceInfo = ({ style, className }) => {
    return (
      <div
        className={`addtional-service-info ${" "} ${className}`}
        style={style}
      >
        <div className="d-flex flex-row justify-content-between w-100 align-items-center mt-2">
          <span className="semi-bold" style={{ fontSize: "20px" }}>
            {formatNumber(currentPremiumService?.price)}
          </span>
          <span
            className="normal"
            style={{
              color: "#BCBCBC",
              fontSize: "16px",
              textDecoration: "line-through",
            }}
          >
            {formatNumber(currentPremiumService?.original_price)}
          </span>
        </div>

        <span className="semi-bold" style={{ fontSize: "16px" }}>
          {currentPremiumService?.name}
        </span>
        <span className="regular" style={{ fontSize: "14px" }}>
          HSD: {currentPremiumService?.expiryDate}
        </span>
      </div>
    );
  };

  return (
    <Modal className="modal-after-payment" show={show} centered>
      <div className="modal-title bold">
        {isPaymentSuccess
          ? "ĐĂNG KÝ DỊCH VỤ THÀNH CÔNG"
          : "ĐĂNG KÝ DỊCH VỤ KHÔNG THÀNH CÔNG"}
      </div>
      <div className="d-flex flex-column-reverse flex-md-row justify-content-between w-100">
        <div className="service-info-container">
          <div className="service-info">
            Mã đăng ký: <span className="semi-bold">{vpc_MerchTxnRef}</span>
          </div>
          <div className="service-info">
            Gói dịch vụ:{" "}
            <span className="semi-bold">{currentPremiumService?.name}</span>
          </div>
          <div className="service-info">
            Giá dịch vụ:{" "}
            <span className="semi-bold">
              {formatNumber(currentPremiumService?.price)} đ
            </span>
          </div>
          <div className="service-info">
            Hạn sử dụng:{" "}
            <span className="semi-bold">
              {currentPremiumService?.expiryDate}
            </span>
          </div>
          <div className="service-info">
            Hình thức thanh toán: <span className="semi-bold">ONEPAY</span>
          </div>
          <div className="service-info">
            Trạng thái thanh toán:{" "}
            {isPaymentSuccess ? (
              <span className="semi-bold" style={{ color: "#27BE84" }}>
                Thành công
              </span>
            ) : (
              <span className="semi-bold" style={{ color: "#DD3331" }}>
                Không thành công
              </span>
            )}
          </div>
        </div>
        <div
          className="d-flex flex-row flex-md-column align-items-end flex-grow-1"
          style={{ gap: "8px" }}
        >
          <div className="image-purchase-container">
            <img
              className="image-purchase "
              src={baseUrlImg + currentPremiumService.icon}
            />
            {addtionalServiceInfo({
              className: "disapear-md",
            })}
          </div>
        </div>
      </div>
      <div className="modal-payment-footer">
        <img
          className="img-after-payment-background"
          src={
            isPaymentSuccess
              ? imgSrc.imgPaymentSuccessBackground
              : imgSrc.imgPaymentFailureBackground
          }
        />
        <div className="d-flex flex-column justify-content-start align-items-end">
          {addtionalServiceInfo({
            style: { width: "180px" },
            className: "disapear-sm",
          })}
          <div className="button-container" style={{ gap: "30px" }}>
            <CustomButton
              borderRadius="4px"
              background="#35C03C"
              showBorder={false}
              height="40px"
              color="white"
              // text="QUAY LẠI TRANG CHỦ"
              text="XEM GÓI KHÁC"
              onClick={() => {
                router.push("/lich-van-nien/nang-cap-lich-viet-pro");
              }}
            />
            <CustomButton
              borderRadius="4px"
              background="#35C03C"
              showBorder={false}
              height="40px"
              color="white"
              text={isPaymentSuccess ? "SỬ DỤNG NGAY" : "ĐĂNG KÝ LẠI"}
              // onClick={handleClose}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalAfterPayment;
