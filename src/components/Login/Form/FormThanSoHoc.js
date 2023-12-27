import { CustomSelect } from "@/components/CustomSelect";
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
import { Form, Input } from "antd";
import { useFormik } from "formik";
import _ from "lodash";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Select from "react-select";


export const FormThanSoHoc = ({}) => {
  const { userData } = useContext(AuthContext);
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  // const [name, setName] = useState(null);
  // const [birthday, setBirthday] = useState();
  const dateFormat = "DD/MM/YYYY";

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

  // useEffect(() => {
  // if (!_.isEmpty(userData)) {
  //   setName(userData?.full_name ?? null);
  //   console.log(userData?.birthday);
  //   const userDataBirthday = getDayjsObj(
  //     userData?.birthday,
  //     "YYYY-MM-DD HH:mm:ss"
  //   );
  //   setBirthday(userDataBirthday);
  // }
  // }, [userData]);

  // const onChangeName = (e) => {
  //   const { value } = e.target;
  //   setName(value);
  // };

  // const onChangeBirthday = (date, dateString) => {
  //   setBirthday(date);
  // };

  // const onBlurBirthday = (e) => {
  //   const currentDate = e.target.value;
  //   if (isDayjsDateValid(currentDate)) {
  //     const birthdayValue = getDayjsObj(e.target.value);
  //     setBirthday(birthdayValue);
  //   } else {
  //     setBirthday(null);
  //   }
  // };

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
      // setLoad(true);
      // dispatch(setAppLoading(true));
      try {
        // const birthdayDate = dayjsObjToString(birthday);
        // const params = { name, birthday: birthdayDate };
        // const giaiMaChiSoData = await getTSHTopics(params);
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
      {/* <div
        className={"d-flex flex-column align-items-center than-so-hoc-form "}
      > */}
      {/* <InputGroup className="mb-3">
          <InputGroup.Text>
            <i style={{ color: "#3F85FB" }} className="fal fa-user"></i>
          </InputGroup.Text>
          <Input
            name="name"
            placeholder="Họ tên khai sinh (đầy đủ)"
            onChange={onChangeName}
            value={name}
          />
        </InputGroup> */}

      <div
        className={"d-flex flex-column align-items-center than-so-hoc-form"}
        style={{ gap: "10px" }}
      >
        <div className="d-flex flex-column w-100">
          <Input
            className="w-100"
            prefix={<i style={{ color: "#3F85FB" }} className="fal fa-user" />}
            placeholder="Họ tên khai sinh (đầy đủ)"
            suffix={
              <i
                style={{ color: "#B8B8B8", cursor: "pointer" }}
                className="fas fa-times-circle"
                onClick={() => {
                  formik.setFieldValue("name", "");
                }}
              />
            }
            value={formik.values.name}
            onChange={(e) => {
              const { value } = e.target;
              formik.setFieldValue("name", value);
            }}

            // value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: "red", fontSize: "13px" }}>
              {formik.errors.name}
            </div>
          ) : null}
        </div>
        {/* <Form.Item
          className="w-100"
          name="birthday"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập ngày tháng năm sinh",
            },
          ]}
        >
          <Input
            className="w-100"
            prefix={
              <i style={{ color: "#3F85FB" }} className="fal fa-calendar" />
            }
            placeholder="Nhập ngày tháng năm sinh (dương lịch)"
          />
        </Form.Item> */}{" "}
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
          {/* <div className="date-input-holder">
            <Select />
          </div> */}
          <div className="date-input-holder">
            <Input
              className="w-100"
              type="number"
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
              placeholder="Nhập năm sinh (dương lịch)"
              onChange={(e) => {
                const { value } = e.target;
                formik.setFieldValue("year", value);
              }}
              value={formik.values.year}
            />
            {formik.touched.year && formik.errors.year ? (
              <div style={{ color: "red", fontSize: "13px" }}>
                {formik.errors.year}
              </div>
            ) : null}
          </div>
        </div>
        {/* <InputGroup className="mb-3">
          <InputGroup.Text>
            <i style={{ color: "#3F85FB" }} className="fal fa-calendar"></i>
          </InputGroup.Text>
          <DatePicker
            className="w-100"
            name="birthday"
            onChange={onChangeBirthday}
            onBlur={onBlurBirthday}
            placeholder="Nhập ngày tháng năm sinh (dương lịch)"
            format={dateFormat}
            value={birthday ?? null}
          />
        </InputGroup> */}
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
