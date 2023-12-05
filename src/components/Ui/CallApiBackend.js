import axios from "axios";
import qs from "qs";

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
export const CallApiBackend = (data, url, method, type = 1) => {
    const BASE_URL = process.env.REACT_APP_URL_API;
    let device_id = localStorage.getItem('device_id');
    if (!device_id){
        device_id = makeid(40);
        localStorage.setItem('device_id',device_id);
    }
    let headers = {
        apikey: "TCwrU5V2DBQtfa8pgNkTUgN6FGNsAkQA8181Suf2uNU1A3OeQa",
        accept: 'application/json',
        'device-id': device_id
    }
    let formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
    }
    let params = "";
    if (method.toUpperCase() === "GET") {
        params = "?";
        for (const [key, value] of Object.entries(data)) {
            params += key + "=" + value + "&";
        }
        params = params.slice(0, -1)
    }
    const out = axios({
        method: method,
        headers: headers,
        url: BASE_URL + url + params,
        data: formData,
    });
    out.catch(function (error) {
        if (error?.response?.status === 401) {
            localStorage.removeItem('user');
            let mess = "Vui lòng đăng nhập để sử dụng chức năng này!";
            if (window.confirm(mess)) {
                window.location.href = '/login';
            } else {
                window.location.reload();
            }
        }
    })
    return out;
}

export const CallApi = (url, headers, data, method) => {
    let formData;
    if (headers['Content-Type'] == 'application/x-www-form-urlencoded') {
        formData = qs.stringify(data);
    } else {
        formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
    }
    console.log(formData);
    const out = axios({
        method: method,
        headers: headers,
        url: url,
        data: formData,
    });
    out.catch(function (error) {
        if (error?.response?.status === 401) {
            localStorage.removeItem('user');
            let mess = "Vui lòng đăng nhập để sử dụng chức năng này!";
            if (window.confirm(mess)) {
                window.location.href = '/login';
            } else {
                window.location.reload();
            }
        }
    })
    return out;
}