import {FormControl, InputGroup} from "react-bootstrap";
import React from "react";

export const FormLogin = ({setDataInput, showPassword, setShowPassword}) => {
    return (
        <div className={"d-block"}>
            <InputGroup className="mb-3">
                <InputGroup.Text><i className="fas fa-phone-alt color-icon"></i></InputGroup.Text>
                <FormControl className={'w-100'} name={'username'} onChange={setDataInput}
                             placeholder="Nhập số điện thoại hoặc email"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text><i className="fas fa-unlock-alt color-icon"></i></InputGroup.Text>
                <FormControl className={'w-100'} name={'password'} onChange={setDataInput}
                             type={showPassword ? "text" : "password"} placeholder="Nhập mật khẩu"/>
                <InputGroup.Text onClick={() => setShowPassword(!showPassword)}><i
                    className={showPassword ? "active fas fa-eye show-password " : "fas fa-eye show-password "}></i></InputGroup.Text>
            </InputGroup>
        </div>
    )
}