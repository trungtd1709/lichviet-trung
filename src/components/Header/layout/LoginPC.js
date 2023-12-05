// import AvatarUser from "../AvatarUser";
import React from "react";
// import "./headerAvatar.css";

const BASE_URL_IMAGE = process.env.REACT_APP_BASE_URL_IMAGE;

function FormatDate(d, format = "") {
    let date = d;
    if (typeof date === "string") {
        let formatDate;
        if (date.search("-") > -1) {
            formatDate = date.split("-");
            if (formatDate.length !== 3) {
                return false;
            }
        } else if (date.search("/") > -1) {
            formatDate = date.split("/");
            if (formatDate.length !== 3) {
                return false;
            }
        }
        if (Array.isArray(formatDate)) {
            if (formatDate[0].length === 4) {
                let date1 = formatDate[1].length === 1 ? "0" + parseInt(formatDate[1]) : formatDate[1];
                let date2 = formatDate[2].length === 1 ? "0" + parseInt(formatDate[2]) : formatDate[2];
                date = formatDate[0] + "-" + date1 + "-" + date2;
            } else {
                let date1 = formatDate[0].length === 1 ? "0" + parseInt(formatDate[0]) : formatDate[0];
                let date2 = formatDate[1].length === 1 ? "0" + parseInt(formatDate[1]) : formatDate[1];
                date = formatDate[2] + "-" + date2 + "-" + date1;
            }
        }
    }
    let dateFormat = new Date(date);
    if (format === "") {
        return dateFormat;
    }
    let DAY = parseInt(dateFormat.getDate()) < 10 ? "0" + parseInt(dateFormat.getDate()) : parseInt(dateFormat.getDate());
    let MONTH = parseInt(dateFormat.getMonth() + 1) < 10 ? "0" + parseInt(dateFormat.getMonth() + 1) : parseInt(dateFormat.getMonth() + 1);
    const doi_ngay = {
        0: "Chủ nhật",
        1: "Thứ hai",
        2: "Thứ ba",
        3: "Thứ tư",
        4: "Thứ năm",
        5: "Thứ sáu",
        6: "Thứ bảy",
    }
    let objDate = {
        Y: dateFormat.getFullYear(),
        m: MONTH,
        d: DAY,
        j: parseInt(dateFormat.getDate()),
        n: parseInt(dateFormat.getMonth() + 1),
        H: Number(dateFormat.getHours()) < 10 ? '0' + dateFormat.getHours() : dateFormat.getHours(),
        i: Number(dateFormat.getMinutes()) < 10 ? '0' + dateFormat.getMinutes() : dateFormat.getMinutes(),
        s: Number(dateFormat.getSeconds()) < 10 ? '0' + dateFormat.getSeconds() : dateFormat.getSeconds(),
        D: doi_ngay[dateFormat.getDay()]
    }
    var result = "";
    format.split("").forEach(v => {
        let a = objDate[v];
        if (a) {
            result += a;
        } else {
            result += v;
        }
    })
    return result;
}

const mapPackageName = {
    '1': 'Lịch Việt PRO',
    '2': 'Chọn ngày tốt',
    '3': 'Xem phong thủy',
    '4': 'Xem tử vi',
    '5': 'Lục Hào',
    '6': 'Giải mã ngày sinh'
};
export default function LoginPC({
    user, closeMenu = () => {
    }, logout = () => {
    }
}) {
    const checkPremium = user?.premiums.length;
    return (
        <>
            {
                user ? <div className={'avatar-header'}>
                        {/* <AvatarUser size={50} premium={checkPremium} avatar={user.avatar} sizePremium={25}/> */}
                        <div className={'modal-user-detail'}>
                            <div className={'user-info d-flex'}>
                                <div className={'pr-4'} style={{minWidth: 100}}>
                                    {/* <AvatarUser size={80} premium={checkPremium} avatar={user.avatar}/> */}
                                </div>
                                <div className={'user-detail'}>
                                    <p className={'title2'}>{user.full_name}</p>
                                    <p>ID: {user.id}</p>
                                    <p>{checkPremium ? "Thành viên PRO" : "Chưa phải thành viên PRO"}</p>
                                </div>
                            </div>
                            {
                                !user?.premiums.length ? <> </> : <>
                                    <div className={'package-pro'}>
                                        {
                                            user.premiums.map((item,key) => {
                                                return (
                                                    <div className="item-package" key={key}>
                                                        <div className={'icon-package'}>
                                                            <img src={'https://cdn.lichviet.org' + item.thumb} alt="" width={35}/>
                                                        </div>
                                                        <div className={'detail-package'}>
                                                            <p className={'package-name'}>{mapPackageName[item.premium_groups]}</p>
                                                            <p className={'hsd'}>HSD: {FormatDate(item.end_time, 'H:i • d/m/Y')}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </>
                            }
                            <div className={'menu-control'}>
                                {/*<div className={'item-menu'}>*/}
                                {/*    <img src={BASE_URL_IMAGE + '/images/icon/update-user-info.png'} width={35} alt=""/>*/}
                                {/*    <p>Cập nhật thông tin cá nhân</p>*/}
                                {/*</div>*/}
                                {/*<div className={'item-menu'}>*/}
                                {/*    <img src={BASE_URL_IMAGE + '/images/icon/register-service.png'} width={35} alt=""/>*/}
                                {/*    <p>Đăng ký dịch vụ</p>*/}
                                {/*</div>*/}
                                <div className={'item-menu'} onClick={logout}>
                                    <img src={BASE_URL_IMAGE + '/images/icon/icon-logout.png'} width={35} alt=""/>
                                    <p>Đăng xuất</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <a onClick={closeMenu} href="/login">
                        <div className={'day-now'}>Đăng nhập</div>
                    </a>
            }
        </>
    )
}