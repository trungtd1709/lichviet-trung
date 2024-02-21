import { postPremiumAddOrder } from "@/api/apiRequest";
import CustomButton from "../Buttons/CustomButton";
import CustomInput from "../Input/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalReceiveContact } from "../Modal/ModalReceiveContact";
import { useState } from "react";
import { isEmpty } from "lodash";
const { imgSrc } = require("@/const/AppResource");

export const SendContact = ({
  bannerImg = imgSrc.imgUuDaiContactChuyenGia,
  className,
}) => {
  const [modalReceiveContactShow, setModalReceiveContactShow] = useState(false);

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

  const sendPhoneContact = async ({ phone }) => {
    const res = await postPremiumAddOrder({ phone });
    if (!isEmpty(res)) {
      setModalReceiveContactShow(true);
    }
  };

  return (
    <>
      <div className={`send-contact-container row ${className}`}>
        <img
          //   className="img-uu-dai-contact-chuyen-gia"
          className="col-md-6 px-0"
          src={bannerImg}
        />
        <div className="send-phone-container col-md-6 d-flex flex-row align-items-md-center align-items-start justify-content-center flex-md-column">
          <div className="input-container">
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
            background="linear-gradient(0deg, #64994D -27.61%, #028042 100%)"
            showBorder={false}
            text="GỬI SĐT"
            color="white"
            textClassName="mulish pc-16px bold"
            height="34px"
            onClick={formik.handleSubmit}
          />
        </div>
      </div>
      <ModalReceiveContact
        show={modalReceiveContactShow}
        setShow={setModalReceiveContactShow}
      />
    </>
  );
};
