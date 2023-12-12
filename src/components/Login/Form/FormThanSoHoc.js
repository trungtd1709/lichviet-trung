import { FormControl, InputGroup } from "react-bootstrap";
import React from "react";

export const FormThanSoHoc = ({
  setDataInput,
}) => {
  return (
    <div className={"d-block than-so-hoc-form "}>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <i style={{ color: "#3F85FB" }} className="fal fa-user"></i>
        </InputGroup.Text>
        <FormControl
          className={"w-100"}
          name={"username"}
          onChange={setDataInput}
          placeholder="Nhập họ tên đầy đủ"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <i style={{ color: "#3F85FB" }} class="fal fa-calendar"></i>
        </InputGroup.Text>
        <FormControl
          className={"w-100"}
          name={"password"}
          onChange={setDataInput}
          type="date"
          placeholder="Nhập ngày sinh"
        />
      </InputGroup>
    </div>
  );
};
