import { createPaymentTransaction, fetchServicesList, fetchUserDetail } from "@/api/apiRequest";
import { imgSrc } from "@/const/AppResource";
import { onepayResult } from "@/const/const";
import { AuthContext } from "@/context/authContext";
import { formatNumber, openDeepLinkApp } from "@/shared/utils";
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
  const premiumTypeId = localStorage.getItem("premiumTypeId");

  const moveToServicesPage = () => {
    router.push("/lich-van-nien/nang-cap-lich-viet-pro");
  };

  useEffect(() => {
    const getPremiumServiceInfo = async () => {
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
      const { numb_m } = premiumService;
      const today = moment();
      const expiryDate = today
        .add(parseInt(numb_m), "months")
        .format("DD-MM-YYYY");
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
      console.log("[userData]:", userData);
      
      if (token_login) {
        try {
          const newUserData = await fetchUserDetail({ token_login });
          if (!_.isEmpty(newUserData)) {
            const tempData = { ...newUserData, token_login };
            console.log("[tempData]:",tempData);
            updateUserData(tempData);
            // updateUserData(newUserData);
          }
        } catch (err) {
          console.error("Failed to fetch user data:", err);
        }
      }
    };

    // thanh toan thanh cong thi cap nhat thong tin goi moi
    if (isPaymentSuccess) {
      updateNewUserData();
    }
  }, [isPaymentSuccess]);

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
        {isPaymentSuccess && (
          <span className="regular" style={{ fontSize: "14px" }}>
            HSD: {currentPremiumService?.expiryDate}
          </span>
        )}
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
          {isPaymentSuccess && (
            <div className="service-info">
              Hạn sử dụng:{" "}
              <span className="semi-bold">
                {currentPremiumService?.expiryDate}
              </span>
            </div>
          )}

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
              onClick={moveToServicesPage}
            />
            <CustomButton
              borderRadius="4px"
              background="#35C03C"
              showBorder={false}
              height="40px"
              color="white"
              text={isPaymentSuccess ? "SỬ DỤNG NGAY" : "ĐĂNG KÝ LẠI"}
              onClick={
                isPaymentSuccess
                  ? openDeepLinkApp
                  : () => {
                      createPaymentTransaction({
                        premiumTypeId,
                        userData,
                        router,
                      });
                    }
              }
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalAfterPayment;

// http://next.lichviet.org/ket-qua-mua-goi?vpc_SecureHash=280235FAF633076EE3DAEAE0E4C52A823C87142B9B67B72FA1ADE2A4D9E50956&vpc_MerchTxnRef=LV1709116026762&result=success&package_name=G%C3%B3i%20xem%20ng%C3%A0y%20t%E1%BB%91t%206%20th%C3%A1ng%20web&price=168000&channel=ONEPAY&service_id=2&image_purchased=%2Fupload%2Flichviet%2F2023-06%2F07%2Fpremium_type%2F1686107368_M3GCG.png&original_price=290000&numb_m=6&numb=0&service_name=L%E1%BB%8Bch%20Vi%E1%BB%87t%20Pro%20-%20Ng%C3%A0y%20t%E1%BB%91t&end_time=2040-05-27%2014:39:45
// http://next.lichviet.org/ket-qua-mua-goi?vpc_SecureHash=79CA1AE73E4BC6B10BA742CC56244DAC10A38CFABFA46C91C3B9595E5CE291AD&vpc_MerchTxnRef=LV1709116538321&result=success&package_name=G%C3%B3i%20xem%20ng%C3%A0y%20t%E1%BB%91t%201%20n%C4%83m%20web&price=230000&channel=ONEPAY&service_id=2&image_purchased=%2Fupload%2Flichviet%2F2023-06%2F07%2Fpremium_type%2F1686107415_VaY1L.png&original_price=490000&numb_m=12&numb=0&service_name=L%E1%BB%8Bch%20Vi%E1%BB%87t%20Pro%20-%20Ng%C3%A0y%20t%E1%BB%91t&end_time=2041-05-27%2014:39:45