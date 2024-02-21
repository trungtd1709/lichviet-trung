import CustomButton from "@/components/Buttons/CustomButton";
import { ChonGoiPro } from "@/components/LandingPage/ChonGoiPro";
import CustomInput from "@/components/Input/CustomInput";
import MetaHead from "@/components/MetaHead";
import { imgSrc } from "@/const/AppResource";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function TuViChuyenGia({}) {
  return (
    <>
      <MetaHead />
      <div className="chon-ngay-tot-container">
        <div className="px-5 pt-4" style={{ backgroundColor: "#FCF4DF" }}>
          <img src={imgSrc.tuViChuyenGia1} className="w-100" />
          <img src={imgSrc.tuViChuyenGia2} className="w-100" />
          <LienHeChuyenGia />
          <img src={imgSrc.tuViChuyenGia3} className="w-100" />
        </div>
      </div>
    </>
  );
}

const LienHeChuyenGia = () => {
  const sendPhoneContact = async ({ phone }) => {
    const res = await postPremiumAddOrder({ phone });
    if (!isEmpty(res)) {
      setModalReceiveContactShow(true);
    }
  };
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required("Vui lòng nhập số điện thoại")
      .matches(/^[0-9]+$/, "Số điện thoại chỉ được chứa các số")
      .min(10, "Số điện thoại không hợp lệ")
      .max(10, "Số điện thoại không hợp lệ"),
  });

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await sendPhoneContact(values);
    },
  });
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ margin: "30px 0 30px 0" }}
    >
      <img
        src={imgSrc.tuViChuyenGiaTextUuDai}
        className="w-100"
        style={{ marginBottom: "10px" }}
      />
      <div
        className="d-flex flex-column align-items-center tu-vi-chuyen-gia-lien-he"
        style={{
          borderRadius: "16px",
          backgroundColor: "#F4ECD7",
        }}
      >
        <img src={imgSrc.tuViChuyenGiaUuDai} className="w-100" />
        <div className="input-container mb-0" style={{ marginTop: "20px" }}>
          <CustomInput
            className="h-100"
            placeholder="Nhập số điện thoại"
            prefix={
              <i className="fas fa-phone-alt" style={{ color: "#35C03C" }} />
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
        </div>

        <CustomButton
          className="mt-3"
          background="linear-gradient(0deg, #64994D -27.61%, #028042 100%)"
          showBorder={false}
          text="Đăng ký tư vấn"
          paddingLeft="20px"
          paddingRight="20px"
          color="white"
          // textClassName="mulish pc-16px"
          height="34px"
          onClick={formik.handleSubmit}
        />
      </div>
    </div>
  );
};
