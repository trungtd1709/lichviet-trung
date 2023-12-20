import React from "react";
const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE
export default function AvatarUser({size,avatar,premium,sizePremium=35}){
    return (
        <div className="position-relative d-inline">
            <img src={ avatar === "" ? BASE_URL_IMAGE + "/images/icon/default-profile.png" : avatar} alt="Avatar" width={size} height={size} className={'avatar img-avatar-user'}/>
            {premium ? <img src={BASE_URL_IMAGE + "/images/icon/icon_pro.png"} alt="" className={'icon-pro-user'} width={sizePremium}/> : <></>}
        </div>
    )
}