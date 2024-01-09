import { imgSrc } from "@/const/AppResource";
import CustomButton from "../Buttons/CustomButton";

export const NangCapProContact = () => {
  return (
    <div style={{}}>
      <span className="nang-cap-pro-title">
        Quý khách cần hỗ trợ?
      </span>
      <div className="nang-cap-pro-card">
        <div
          className="d-flex flex-column"
          style={{
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #CDCDCD",
            background: "#fff",
            boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.06)",
            gap: "8px",
          }}
        >
          <span
            style={{
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "600",
              color: "#2F281E",
            }}
          >
            Liên hệ
          </span>
          <span style={{ fontSize: "16px", color: "#11223F" }}>
            Quý khách vui lòng nhập chính xác thông tin
          </span>
          <span style={{ fontSize: "16px", color: "#11223F" }}>
            Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất
          </span>
          <div className="d-flex flex-column align-items-center mt-2">
            <div
              className="form-group"
              // style={{ height: "40px", width: "330px" }}
            >
              <label htmlFor="phone" className="placeholder-input">
                <i className="fas fa-phone-alt" style={{ color: "#35C03C" }} />
                <p className="text-placeholder" id={"phone-hidden-input"}>
                  Số điện thoại
                </p>
              </label>
              <input
                //   onChange={InputHiddenPlaceholder}
                type="text"
                name="phone"
                id="phone"
                className="input-edit"
                required
              />
            </div>
            <CustomButton
              className="mt-2"
              height="40px"
              text="KÍCH HOẠT"
              color="white"
              showBorder={false}
              width="150px"
              background="linear-gradient(0deg, #64994D -27.61%, #028042 100%)"
            />
          </div>
          <div className="d-flex flex-row justify-content-between">
            <img
              src={imgSrc.contactLichVietProBoyBackground}
              style={{ width: "45%" }}
            />
            <img
              src={imgSrc.contactLichVietProGirlBackground}
              style={{ width: "54%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
