import { imgSrc } from "@/const/AppResource";
import { formatNumber } from "@/shared/utils";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CustomButton from "../Buttons/CustomButton";

function ModalAfterPayment(props) {
  const { show, handleClose } = props;
  const baseUrlImg = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;

  const proServiceData = {
    id: "34",
    name: "Chọn ngày tốt 3 tháng",
    description: "Gói Xem ngày tốt 3 tháng iOS",
    numb: "0",
    price: "100000",
    currency: "VND",
    store_id: "lichviet.xemngaytot.3months",
    numb_m: "3",
    app_id: null,
    premium_groups: "2",
    platform: "2",
    original_price: "150000",
    place_show_ad: "1",
    purchase_type: "2",
    store_id_android: null,
    image_purchased:
      "/upload/lichviet/2023-06/07/premium_type/1686107308_XuOc3.png",
    img_height_purchased: "",
    img_width_purchased: "",
    image_nopurchase:
      "/upload/lichviet/2023-06/07/premium_type/1686107308_i3ONa.png",
    img_width: "",
    img_height: "",
    status: "1",
    create_by: null,
    create_time: "2023-01-17 15:24:11",
    modify_by: null,
    modify_time: "2023-01-17 15:24:11",
    app_version: "9.0.0:9.6.1",
    img_purchased_web: null,
    image_background: null,
    image_promote: null,
    img_height_promote: null,
    img_width_promote: null,
    image_promote_purchased: null,
    img_height_promote_purchased: null,
    img_width_promote_purchased: null,
  };

  return (
    <Modal className="modal-after-payment" show={show} onHide={handleClose}>
      <div
        className="pc-18px bold"
        style={{ textAlign: "center", textTransform: "uppercase" }}
      >
        Modal title
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div
          className="d-flex flex-column service-info-container"
          // style={{ gap: "5px", color: "#000" }}
        >
          <div>
            Mã đăng ký: <span className="bold">LV1683175647309</span>
          </div>
          <div>
            Gói dịch vụ: <span className="bold">{proServiceData.name}</span>
          </div>
          <div>
            Giá dịch vụ:{" "}
            <span className="bold">{formatNumber(proServiceData.price)}</span>
          </div>
          <div>
            Hạn sử dụng: <span className="bold">{}</span>
          </div>
          <div>
            Hình thức thanh toán: <span className="bold">ONEPAY</span>
          </div>
          <div>
            Trạng thái thanh toán:{" "}
            <span className="bold" style={{ color: "#27BE84" }}>
              Thành công
            </span>
          </div>
          <img
            className="after-payment-background"
            src={imgSrc.imgPaymentSuccessBackground}
          />
        </div>
        <div className="d-flex flex-column align-items-end flex-grow-1" style={{ width: "170px" }}>
          <img className="image-purchase" src={baseUrlImg + proServiceData.image_purchased} />
          <span className="regular">{formatNumber(proServiceData.price)}</span>
          <span className="regular">Chọn ngày tốt</span>
          <span className="regular">99.000</span>
          <div className="d-flex flex-row w-100">
            <CustomButton
              borderRadius="4px"
              background="#35C03C"
              showBorder={false}
              // width="150px"
              // paddingLeft="20px"
              // paddingRight="20px"
              height="40px"
              color="white"
              text="XEM GÓI KHÁC"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalAfterPayment;
