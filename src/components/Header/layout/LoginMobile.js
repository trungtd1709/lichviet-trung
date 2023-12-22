import {Button} from "react-bootstrap";
import AvatarUser from "../AvatarUser";
import React from "react";
import Link from "next/link";

export default function LoginMobile({user , closeMenu = () => {} , logout = () => {}}) {
    const checkPremium = user?.premiums.length;
    return (
        <>
            {
                user ?
                    <div className={'box-user bg-white d-flex align-items-center'}>
                        <div className={'mr-4 d-flex'}>
                            <AvatarUser size={65} premium={checkPremium} avatar={user.avatar} />
                        </div>
                        <div>
                            <p className={'title2'}>{user.full_name}</p>
                            <p>ID: {user.id}</p>
                            <p>{checkPremium ? "Thành viên PRO" : "Chưa phải thành viên PRO"}</p>
                        </div>
                        <div onClick={logout} className={'logout-mb'}>
                            <i className="fas fa-sign-out-alt"></i>
                        </div>
                    </div>
                    :
                    <Link onClick={closeMenu} href="/login" className={'ml-2'}>
                        <Button>Đăng nhập</Button>
                    </Link>
            }
        </>
    )
}