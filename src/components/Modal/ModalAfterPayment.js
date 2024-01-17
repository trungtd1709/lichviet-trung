import { imgSrc } from "@/const/AppResource";
import { formatNumber } from "@/shared/utils";
import { Modal } from "react-bootstrap";
import CustomButton from "../Buttons/CustomButton";
import { useMemo } from "react";
import { onepayResult } from "@/const/const";

function ModalAfterPayment(props) {
  const { show, setShow, result } = props;
  const baseUrlImg = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;

  const isPaymentSuccess = useMemo(() => {
    if (result === onepayResult.success) {
      return true;
    } else {
      return false;
    }
  });

  const proServiceData = {
    id: "2",
    name: "Lịch Việt Pro - Ngày tốt",
    create_by: "1",
    create_time: "2022-06-14 14:40:00",
    modify_by: "827357",
    modify_time: "2023-07-24 08:58:31",
    status: "1",
    content:
      '[\r\n{\r\n"icon":"http://cdn.lichviet.org/upload/lichviet/service/ngay_tot/noads.svg",\r\n"title":"Tắt quảng cáo",\r\n"description": "Mang lại trải nghiệm sử dụng nhanh, không bị gián đoạn và tối ưu nhất."\r\n},\r\n{\r\n"icon":"http://cdn.lichviet.org/upload/lichviet/service/ngay_tot/chonngaytot.svg",\r\n"title":"Mở khóa tính năng Chọn ngày tốt độc quyền",\r\n"description": "Dựa trên kiến thức tinh hoa cổ học phương Đông áp dụng cho thời hiện đại & thuật toán độc quyền từ các chuyên gia Lịch Việt."\r\n},\r\n{\r\n"icon":"http://cdn.lichviet.org/upload/lichviet/service/ngay_tot/family.svg",\r\n"title":"Sử dụng cho cả gia đình",\r\n"description": "Có thể thêm tối đa thông tin của 5 thành viên trong gia đình và sử dụng dịch vụ không giới hạn."\r\n},\r\n{\r\n"icon":"http://cdn.lichviet.org/upload/lichviet/service/ngay_tot/Hotro.svg",\r\n"title":"Ưu tiên hỗ trợ đa kênh",\r\n"description": "Ưu tiên hỗ trợ giải đáp thắc mắc và khắc phục lỗi từ đội ngũ Chăm Sóc Khách Hàng và trên các kênh liên lạc chính thức của Lịch Việt."\r\n}\r\n]',
    product_id: "lichviet.xemngaytot",
    icon: "/upload/lichviet/2023-05/22/service/1684723403_SOWCy.png",
    link: "lichviet://?screen=chon_ngay_tot",
    order_place: "1",
    type: "2",
    old_order_place: "4",
    thumb: "/upload/lichviet/2023-05/22/service/1684722755_uLyLA.png",
    metadata:
      '<a href="lichviet://?screen=buylichvietpro&service_id=9">\r\n <imgfullwidth src="http://cdn.lichviet.org/upload/lichviet/2023-06/10/photo/1686372548_WkqJR.jpg" height="302"; width="1148">\r\n<thongtin_user_theogoi></thongtin_user_theogoi>\r\n<imgfullwidth src="http://cdn.lichviet.org/upload/lichviet/2023/03/06/ngay_tot/1675307874_LLOTT.jpg" height="1342"; width="1241"></imgfullwidth>\r\n<imgfullwidth src="http://cdn.lichviet.org/upload/lichviet/2023/03/06/ngay_tot/1675307906_MWVPZ.jpg" height="747"; width="1241"></imgfullwidth>\r\n<a href=\'#danhsach_goipro\'>\r\n<animate_button background="http://cdn.lichviet.org/upload/lichviet/2023/03/06/ngay_tot/1674792485_oaq5e.jpg" buttonheight="102" backgroundheight="142" imgbutton="http://cdn.lichviet.org/upload/lichviet/photo/image_url/2023/01/13/1673598703_Adzfb.png" width="1241">\r\n</a>\r\n<imgfullwidth src="http://cdn.lichviet.org/upload/lichviet/2023/03/06/ngay_tot/1674792505_69ZjM.jpg" height="321"; width="1241"></imgfullwidth>\r\n<a href="https://youtu.be/FGHaInwEYE8&start_radio=1">\r\n<imgfullwidth src="http://cdn.lichviet.org/upload/lichviet/2023/03/06/ngay_tot/1674791986_H2pTJ.jpg" height="683"; width="1241">\r\n</a>\r\n<imgfullwidth src="http://cdn.lichviet.org/upload/lichviet/2023/03/06/ngay_tot/1674792024_QxObN.jpg" height="2316"; width="1241"></imgfullwidth>\r\n<imgfullwidth src="http://cdn.lichviet.org/upload/lichviet/2023/03/06/ngay_tot/1674792258_oc2e9.jpg" height="2344"; width="1241"></imgfullwidth>\r\n<danhsach_goipro src="http://cdn.lichviet.org/upload/lichviet/2023/03/06/ngay_tot/1674792298_Gc4EE.jpg" height="693"; width="1241"></danhsach_goipro>\r\n<p id=\'danhsach_goipro\'><a></a></p>\r\n <hotro_muagoi></hotro_muagoi>\r\n<float_button src="http://cdn.lichviet.org/upload/lichviet/2023/03/09/photo/image_url/1678344883_eE5z8.png"></float_button>',
    app_version: "9.0.0:9.6.1",
    group_id: "2",
    image_background: null,
    show_in_service_block: "1",
    premiumTypes: [
      {
        id: "37",
        name: "Chọn ngày tốt 3 tháng",
        description: "Gói Xem ngày tốt 3 tháng web",
        numb: "0",
        price: "100000",
        currency: "VND",
        store_id: "",
        numb_m: "3",
        app_id: null,
        premium_groups: "2",
        platform: "3",
        original_price: "150000",
        place_show_ad: "1",
        purchase_type: "2",
        store_id_android: null,
        image_purchased:
          "/upload/lichviet/2023-06/07/premium_type/1686107448_7Q8uK.png",
        img_height_purchased: "",
        img_width_purchased: "",
        image_nopurchase:
          "/upload/lichviet/2023-06/07/premium_type/1686107448_RUcXS.png",
        img_width: "",
        img_height: "",
        status: "1",
        create_by: null,
        create_time: "2023-01-17 15:24:11",
        modify_by: "2043035",
        modify_time: "2024-01-16 14:55:08",
        app_version: "",
        img_purchased_web: null,
        image_background: null,
        image_promote: null,
        img_height_promote: "",
        img_width_promote: "",
        image_promote_purchased: null,
        img_height_promote_purchased: "",
        img_width_promote_purchased: "",
      },
      {
        id: "35",
        name: "Chọn ngày tốt 6 tháng",
        description: "Gói xem ngày tốt 6 tháng web",
        numb: "0",
        price: "168000",
        currency: "VND",
        store_id: "",
        numb_m: "6",
        app_id: null,
        premium_groups: "2",
        platform: "3",
        original_price: "290000",
        place_show_ad: "1",
        purchase_type: "2",
        store_id_android: null,
        image_purchased:
          "/upload/lichviet/2023-06/07/premium_type/1686107368_M3GCG.png",
        img_height_purchased: "",
        img_width_purchased: "",
        image_nopurchase:
          "/upload/lichviet/2023-06/07/premium_type/1686107369_ypRsq.png",
        img_width: "",
        img_height: "",
        status: "1",
        create_by: null,
        create_time: "2023-01-17 15:24:11",
        modify_by: "2043035",
        modify_time: "2024-01-16 14:55:29",
        app_version: "",
        img_purchased_web: null,
        image_background: null,
        image_promote: null,
        img_height_promote: "",
        img_width_promote: "",
        image_promote_purchased: null,
        img_height_promote_purchased: "",
        img_width_promote_purchased: "",
      },
      {
        id: "36",
        name: "Chọn ngày tốt 1 năm",
        description: "Gói xem ngày tốt 1 năm web",
        numb: "0",
        price: "230000",
        currency: "VND",
        store_id: "",
        numb_m: "12",
        app_id: null,
        premium_groups: "2",
        platform: "3",
        original_price: "490000",
        place_show_ad: "1",
        purchase_type: "2",
        store_id_android: null,
        image_purchased:
          "/upload/lichviet/2023-06/07/premium_type/1686107415_VaY1L.png",
        img_height_purchased: "",
        img_width_purchased: "",
        image_nopurchase:
          "/upload/lichviet/2023-06/07/premium_type/1686108269_s2t2I.png",
        img_width: "",
        img_height: "",
        status: "1",
        create_by: null,
        create_time: "2023-01-17 15:24:11",
        modify_by: "2043035",
        modify_time: "2024-01-16 14:55:19",
        app_version: "",
        img_purchased_web: null,
        image_background: null,
        image_promote: null,
        img_height_promote: "",
        img_width_promote: "",
        image_promote_purchased: null,
        img_height_promote_purchased: "",
        img_width_promote_purchased: "",
      },
    ],
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal
      className="modal-after-payment"
      show={show}
      onHide={handleClose}
      centered
    >
      <div className="modal-title bold">
        {isPaymentSuccess
          ? "ĐĂNG KÝ DỊCH VỤ THÀNH CÔNG"
          : "ĐĂNG KÝ DỊCH VỤ KHÔNG THÀNH CÔNG"}
      </div>
      <div className="d-flex flex-column-reverse flex-md-row justify-content-between w-100">
        <div className="service-info-container">
          <div>
            Mã đăng ký: <span className="semi-bold">LV1683175647309</span>
          </div>
          <div>
            Gói dịch vụ:{" "}
            <span className="semi-bold">{proServiceData.name}</span>
          </div>
          <div>
            Giá dịch vụ:{" "}
            <span className="semi-bold">
              {formatNumber(proServiceData?.premiumTypes[0]?.price)} đ
            </span>
          </div>
          <div>
            Hạn sử dụng: <span className="semi-bold">{}</span>
          </div>
          <div>
            Hình thức thanh toán: <span className="semi-bold">ONEPAY</span>
          </div>
          <div>
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
          {/* <img
            className="img-after-payment-background"
            src={
              isPaymentSuccess
                ? imgSrc.imgPaymentSuccessBackground
                : imgSrc.imgPaymentFailureBackground
            }
          /> */}
        </div>
        <div
          className="d-flex flex-row flex-md-column align-items-end flex-grow-1"
          style={{ gap: "8px" }}
        >
          <div className="image-purchase-container">
            <img
              className="image-purchase "
              src={baseUrlImg + proServiceData.icon}
            />
            <div className="d-flex flex-column align-items-start justify-content-end flex-grow-1">
              <span className="semi-bold mt-2" style={{ fontSize: "20px" }}>
                {formatNumber(proServiceData.premiumTypes[0].price)}
              </span>

              <span className="semi-bold" style={{ fontSize: "16px" }}>
                Chọn ngày tốt
              </span>
              <span className="regular" style={{ fontSize: "14px" }}>
                HSD: 3 tháng
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="  modal-payment-footer">
        <img
          className="img-after-payment-background"
          src={
            isPaymentSuccess
              ? imgSrc.imgPaymentSuccessBackground
              : imgSrc.imgPaymentFailureBackground
          }
        />
        <CustomButton
          borderRadius="4px"
          background="#35C03C"
          showBorder={false}
          height="40px"
          color="white"
          // text="QUAY LẠI TRANG CHỦ"
          text="XEM GÓI KHÁC"
          onClick={handleClose}
        />
        <CustomButton
          borderRadius="4px"
          background="#35C03C"
          showBorder={false}
          height="40px"
          color="white"
          text={isPaymentSuccess ? "SỬ DỤNG NGAY" : "ĐĂNG KÝ LẠI"}
          onClick={handleClose}
        />
      </div>
    </Modal>
  );
}

export default ModalAfterPayment;
