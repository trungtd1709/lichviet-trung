import { imgSrc } from "@/const/AppResource";
import CustomButton from "../Buttons/CustomButton";
import CustomInput from "../Input/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postPremiumAddOrder } from "@/api/apiRequest";

export const NangCapProContact = () => {
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required("Vui lòng nhập số điện thoại")
      .matches(/^[0-9]+$/, "Số điện thoại chỉ được chứa các số")
      .min(10, "Số điện thoại không hợp lệ")
      .max(10, "Số điện thoại không hợp lệ"),
  });

  const sendPhoneContact = ({ phone }) => {
    const res = postPremiumAddOrder({ phone });
    console.log("[postPremiumAddOrderRES]:", res);
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      sendPhoneContact(values);
    },
  });
  return (
    <div style={{}}>
      <span className="nang-cap-pro-title">Quý khách cần hỗ trợ?</span>
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
              className="input-container"
              // style={{ height: "40px", width: "330px" }}
            >
              <CustomInput
                className="h-100"
                placeholder="Nhập số điện thoại"
                prefix={
                  <i
                    className="fas fa-phone-alt"
                    style={{ color: "#35C03C" }}
                  />
                }
                suffix={
                  <i
                    style={{ color: "#B8B8B8", cursor: "pointer" }}
                    className="fas fa-times-circle"
                    onClick={() => {
                      formik.setFieldValue("phone", "");
                    }}
                  />
                }
                fieldMeta={formik.getFieldMeta("phone")}
                fieldHelper={formik.getFieldHelpers("phone")}
                fieldProps={formik.getFieldProps("phone")}
              />
              {/* <label htmlFor="phone" className="placeholder-input">
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
              /> */}
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
