import CustomButton from "../Buttons/CustomButton";

const { imgSrc } = require("@/const/AppResource");

export const ContactChuyenGia = () => {
  return (
    <div className="d-flex flex-column align-items-center chon-ngay-tot-video-block xem-ngay-tot-cung-chuyen-gia">
      <div className="d-flex flex-row justify-content-center ">
        <img className="img-chuyen-gia mr-3" src={imgSrc.imgChuyenGia} />
        <div className="d-flex flex-column contact-chuyen-gia-container">
          <span
            className="mulish pc-20px extra-bold"
            style={{ color: "#2B8C4B", textAlign: "center" }}
          >
            XEM NGÀY TỐT 1-1
          </span>
          <span
            className="mulish pc-20px extra-bold"
            style={{ color: "#C96E3B", textAlign: "center" }}
          >
            CÙNG CHUYÊN GIA LỊCH VIỆT
          </span>
          <span
            className="mulish pc-16px semi-bold"
            style={{ color: "#606241" }}
          >
            Nếu bạn cần xem ngày gấp hoặc muốn nghe tư vấn trực tiếp, đăng ký
            ngay dịch vụ &quot;Xem ngày tốt 1-1 cùng chuyên gia&quot; qua 2 hình thức:
          </span>
          <div className="d-flex flex-row contact-button-container">
            <CustomButton
              textClassName="mulish pc-16px bold"
              background="linear-gradient(180deg, #FBFFF6 0%, #FAFFEF 100%)"
              borderColor="#14913D"
              imgSrc={imgSrc.iconPhone}
              text="GỌI ĐIỆN THOẠI"
              color="#606241"
              gap="6px"
            />
            <CustomButton
              textClassName="mulish pc-16px bold"
              background="linear-gradient(180deg, #FBFFF6 0%, #FAFFEF 100%)"
              borderColor="#0057DF"
              imgSrc={imgSrc.iconZalo}
              text="GỌI VIDEO ZALO"
              color="#606241"
              gap="6px"
            />
          </div>
          <span
            className="mulish pc-16px semi-bold"
            style={{ color: "#606241" }}
          >
            Vui lòng để lại số điện thoại để được Lịch Việt tư vấn và sắp xếp
            lịch trao đổi cùng chuyên gia:
          </span>
        </div>
      </div>
      <div className="xem-ngay-tot-cung-chuyen-gia-footer row">
        <img
          //   className="img-uu-dai-contact-chuyen-gia"
          className="col-md-6 px-0"
          src={imgSrc.imgUuDaiContactChuyenGia}
        />
        <div className="send-phone-container col-md-6 d-flex flex-row align-items-center justify-content-center flex-md-column">
          <div className="form-group">
            <label htmlFor="phone" className="placeholder-input">
              <i className="fas fa-phone-alt" style={{ color: "#35C03C" }} />
            </label>
            <input
              //   onChange={InputHiddenPlaceholder}
              type="text"
              name="phone"
              id="phone"
              className="input-edit"
              required
              placeholder="Nhập số điện thoại"
            />
          </div>
          <CustomButton
            background="linear-gradient(0deg, #64994D -27.61%, #028042 100%)"
            showBorder={false}
            text="GỬI SĐT"
            color="white"
            textClassName="mulish pc-16px bold"
            height="34px"
          />
        </div>
      </div>
    </div>
  );
};
