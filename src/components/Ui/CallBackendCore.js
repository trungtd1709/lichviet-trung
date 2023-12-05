import React from "react";
import axios from "axios";

const RefreshLogin = () => {
    let refreshToken = localStorage.getItem('refreshToken');
    CallBackendUrl({
        refreshToken: refreshToken
    }, '/user/refreshsession', 'POST').then((response) => {
        if (response.data.status == 1) {
            localStorage.setItem('secretKey', response.data.secretKey);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('user', JSON.stringify(response.data.data) );
        } else {
            var mess = "Phiên đăng nhập hết hạn, đăng nhập lại để sử dụng chức năng này!";
            if (window.confirm(mess)) {
                window.location.href = '/login';
            } else {
                window.location.reload();
            }
        }
        
    })
}

const CallBackendUrl = (data, url, method, login_require = false, is_retry = false) => {
    var headers = null;
    const API_CORE_URL= process.env.REACT_APP_API_CORE_URL;
    var secretKey = localStorage.getItem('secretKey');
    if (secretKey && login_require) {
        headers = {
            secret_key: secretKey,
            accept: 'application/json'
        }
    }
    else {
        headers = {
            accept: 'application/json'
        }
    }
    var formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
    }
    var params = "";
    if (method.toUpperCase() == "GET") {
        params = "?";
        for (const [key, value] of Object.entries(data)) {
            params += key + "=" + value + "&";
        }
        params = params.slice(0, -1)
    }
    const out = axios({
        method: method,
        headers: headers,
        url: API_CORE_URL + url +params,
        data: formData,
    });
    out.catch(function (error) {
        if (error.response.data.status == -2) {
            RefreshLogin();
            CallBackendUrl(data, url, method, login_require, is_retry);
        }
    })
    return out;
}

export default CallBackendUrl;