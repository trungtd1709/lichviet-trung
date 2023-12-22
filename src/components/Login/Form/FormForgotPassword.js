import {FormControl, InputGroup} from "react-bootstrap";
import React from "react";

export const FormForgotPassword = ({setDataInput, setShowPassword, showPassword}) => {
    return (
        <div className={'d-block'}>
            <InputGroup className="mb-3">
                <InputGroup.Text><i className="fas fa-phone-alt color-icon"></i></InputGroup.Text>
                <FormControl className={'w-100'} onChange={setDataInput} placeholder="Nhập số điện thoại hoặc email"/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text><i className="fas fa-unlock-alt color-icon"></i></InputGroup.Text>
                <FormControl className={'w-100'} type={showPassword ? "text" : "password"} placeholder="Đặt mật khẩu mới"/>
            </InputGroup>
            <InputGroup className="">
                <InputGroup.Text><i className="fas fa-unlock-alt color-icon"></i></InputGroup.Text>
                <FormControl className={'w-100'} type={showPassword ? "text" : "password"} placeholder="Xác nhận mật khẩu mới"/>
            </InputGroup>
            <div className={'show-password text-reset-passwor mb-3'}>
                <p className={'m-0 p-0 text-right '} style={{ color: '#35C03C', fontSize: '.9rem'}} onClick={() => setShowPassword(!showPassword)}>
                    <u>
                        {!showPassword ? 'Hiển thị mật khẩu' : 'Ẩn mật khẩu'}
                    </u>
                </p>
            </div>
        </div>
    )
}