import { DatePicker, Input } from "antd";
import { useRef } from "react";
import { InputGroup } from "react-bootstrap";
export const FormThanSoHoc = ({ onChangeName, onChangeBirthday }) => {
  const dateInputRef = useRef(null);
  const dateFormat = "DD/MM/YYYY";
  const onCalendarIconClick = () => {
    dateInputRef.current.focus();
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
        <h2 class="rs-title pl-md-2 pl-1">TRA CỨU THẦN SỐ HỌC CỦA BẠN</h2>
      </div>
      <div
        className={"d-flex flex-column align-items-center than-so-hoc-form "}
      >
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i style={{ color: "#3F85FB" }} className="fal fa-user"></i>
          </InputGroup.Text>
          {/* <FormControl
          className={"w-100"}
          name={"username"}
          onChange={setDataInput}
          placeholder="Nhập họ tên đầy đủ"
        /> */}
          <Input
            name="name"
            placeholder="Họ tên khai sinh (đầy đủ)"
            onChange={onChangeName}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text
            onClick={onCalendarIconClick}
            style={{ cursor: "pointer" }}
          >
            <i style={{ color: "#3F85FB" }} className="fal fa-calendar"></i>
          </InputGroup.Text>
          {/* <FormControl
          className={"w-100"}
          name={"birthdate"}
          onChange={setDataInput}
          type="date"
          placeholder=""
          ref={dateInputRef}
        /> */}
          <DatePicker
            className="w-100"
            // name={"birthday"}
            name="birthday"
            // onChange={onChange}
            onChange={onChangeBirthday}
            placeholder="Nhập ngày tháng năm sinh (dương lịch)"
            format={dateFormat}
          />
        </InputGroup>
        <button className="day-now d-block" style={{ padding: "" }}>
          Tra cứu ngay
        </button>
      </div>
    </>
  );
};
