import { CustomSelect } from "@/components/CustomSelect";
import CustomInput from "@/components/Input/CustomInput";
import { dayOptions, monthOptions } from "@/const/const";
import { AuthContext } from "@/context/authContext";
import {
  setTshUser,
  thunkGetGiaiDoanCuocDoiData,
  thunkGetGiaiMaNgaySinhData,
  thunkGetThanSoHocData,
} from "@/redux/slices/thanSoHocSlice";
import { getDayjsObj } from "@/shared/utils";
import { unwrapResult } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import _ from "lodash";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

export const FormThanSoHoc = ({}) => {
  const { userData } = useContext(AuthContext);
  const router = useRouter();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập họ tên đầy đủ"),
    year: Yup.string()
      .required("Vui lòng nhập năm sinh")
      .min(4, "Vui lòng nhập 4 ký tự")
      .max(4, "Vui lòng nhập 4 ký tự"),
  });

  const userInfo = useMemo(() => {
    if (!_.isEmpty(userData)) {
      const userDataBirthday = getDayjsObj(
        userData?.birthday,
        "YYYY-MM-DD HH:mm:ss"
      );
      return {
        name: userData?.full_name ?? "",
        day: userDataBirthday.format("DD"),
        month: userDataBirthday.format("MM"),
        year: userDataBirthday.format("YYYY"),
      };
    }
    return { name: "", day: "01", month: "01", year: "" };
  }, [userData]);

  const formik = useFormik({
    initialValues: userInfo,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const { name, day, month, year } = values;
      const birthday = day + "/" + month + "/" + year;
      await submitThanSoHoc({ name, birthday });
    },
  });

  const submitThanSoHoc = async (values) => {
    const { name, birthday } = values;
    console.log(birthday);
    if (!name) {
      alert("Bạn chưa nhập họ tên!");
      return;
    }
    if (!birthday) {
      alert("Bạn chưa nhập ngày sinh!");
      return;
    } else {
      try {
        const params = values;
        await dispatch(setTshUser(params));
        const thanSoHocData = unwrapResult(
          await dispatch(thunkGetThanSoHocData(params))
        );
        const giaiDoanCuocDoiData = unwrapResult(
          await dispatch(thunkGetGiaiDoanCuocDoiData(params))
        );
        const giaiMaNgaySinhData = unwrapResult(
          await dispatch(thunkGetGiaiMaNgaySinhData(params))
        );
        if (
          !_.isEmpty(thanSoHocData) &&
          !_.isEmpty(giaiDoanCuocDoiData) &&
          !_.isEmpty(giaiMaNgaySinhData)
        ) {
          router.push("/than-so-hoc/tra-cuu");
        } else {
          alert("Có lỗi khi lấy thông tin thần số học");
        }
      } catch (err) {
        console.log(err);
      } finally {
        // dispatch(setAppLoading(false));
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-start mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="20"
          viewBox="0 0 4 20"
          fill="none"
          style={{ width: "5px" }}
        >
          <rect width="4" height="20" fill="#35C03C" />
        </svg>
        <h2 className="rs-title pl-md-2 pl-1">TRA CỨU THẦN SỐ HỌC CỦA BẠN</h2>
      </div>

      <div
        className={"d-flex flex-column align-items-center than-so-hoc-form"}
        style={{ gap: "10px" }}
      >
        <div className="d-flex flex-column w-100">
          <CustomInput
            placeholder="Họ tên khai sinh (đầy đủ)"
            prefix={<i style={{ color: "#3F85FB" }} className="fal fa-user" />}
            suffix={
              <i
                style={{ color: "#B8B8B8", cursor: "pointer" }}
                className="fas fa-times-circle"
                onClick={() => {
                  formik.setFieldValue("name", "");
                }}
              />
            }
            fieldMeta={formik.getFieldMeta("name")}
            fieldHelper={formik.getFieldHelpers("name")}
            fieldProps={formik.getFieldProps("name")}
          />
        </div>

        <div
          className=" date-input-container"
          style={{
            marginBottom: "20px",
            marginTop: "5px",
            marginRight: "0",
            marginLeft: "0",
          }}
        >
          <div className="date-input-holder">
            <CustomSelect
              placeholder="Chọn ngày"
              options={dayOptions}
              currentValue={formik.values.day}
              onChange={(option) => {
                const { value, label } = option;
                formik.setFieldValue("day", value);
              }}
            />
          </div>
          <div className="date-input-holder">
            <CustomSelect
              placeholder="Chọn tháng"
              currentValue={formik.values.month}
              options={monthOptions}
              onChange={(option) => {
                const { value, label } = option;
                formik.setFieldValue("month", value);
              }}
            />
          </div>

          <div className="date-input-holder">
            <CustomInput
              type="number"
              placeholder="Nhập năm sinh (dương lịch)"
              prefix={
                <i style={{ color: "#3F85FB" }} className="fal fa-calendar" />
              }
              suffix={
                <i
                  style={{ color: "#B8B8B8", cursor: "pointer" }}
                  className="fas fa-times-circle"
                  onClick={() => {
                    formik.setFieldValue("year", "");
                  }}
                />
              }
              fieldMeta={formik.getFieldMeta("year")}
              fieldHelper={formik.getFieldHelpers("year")}
              fieldProps={formik.getFieldProps("year")}
            />
          </div>
        </div>

        <button
          className="day-now d-block"
          style={{ padding: "" }}
          onClick={formik.handleSubmit}
        >
          Tra cứu ngay
        </button>
      </div>
      {/* </div> */}
    </>
  );
};
