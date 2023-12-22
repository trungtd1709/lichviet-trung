import { AuthContext } from "@/context/authContext";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import Popup from "../Ui/Popup";
import { CallApi, CallApiBackend } from "@/api/apiRequest";
// import {AuthContext} from "../../Context/AuthContext";

const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;
const ZALO_APP_ID = process.env.NEXT_PUBLIC_ZALO_APP_ID
const ZALO_CALLBACK_URL = process.env.NEXT_PUBLIC_ZALO_CALLBACK_URL
const ZALO_SECRET_KEY = process.env.NEXT_PUBLIC_ZALO_SECRET_KEY

const ZaloCallback = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const code_challenge = searchParams.get('code_challenge');
    const {updateUserData, userData} = useContext(AuthContext);
    const handleClosePopup = () => {
        setPopup({
            ...popup,
            isOpen: false
        })
    }
    const [popup, setPopup] = useState({
        checkLogin: false,
        isOpen: false,
        message: '',
        handleClose: handleClosePopup
    })
    useEffect(() => {
        if (code_challenge != window.localStorage.getItem('code_challenge')) {
            alert('code_challenge không chính xác');
        } else {
            getUserAcessToken(code, window.localStorage.getItem('code_verifier'));
        }
    }, [])
    const redirectLogin = () => {

        var linkRedirect = window.localStorage.getItem('link_redirect');
        if (linkRedirect) {
            window.localStorage.removeItem('link_redirect');
            window.location.href = linkRedirect;
        } else {
            window.location.href = '/';
        }
    }
    const getUserInfo = async (access_token) => {
        const url = 'https://graph.zalo.me/v2.0/me?fields=id,name,picture';
        const headers = {
            access_token: access_token
        }
        const response = await CallApi(url, headers, {}, 'GET');
        if (response.data.error == 0) return response.data.id
        else return false;
    }
    const getUserAcessToken = (code, code_verifier) => {
        const url = 'https://oauth.zaloapp.com/v4/access_token';
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'secret_key': ZALO_SECRET_KEY
        }
        const data = {
            code: code,
            app_id: ZALO_APP_ID,
            grant_type: 'authorization_code',
            code_verifier: code_verifier
        }
        CallApi(url, headers, data, 'POST').then(async function (response) {
            // setLoad(true);
            console.log('access_token:',response, data, headers);
            const user_id = await getUserInfo(response.data.access_token);
            if (!user_id) {
                alert('Không tìm được user_id');
                // window.location.href = '/'
            } else {
                let data = {
                    signal: user_id,
                    accessToken: response.data.access_token,
                    type: 5
                }
                CallApiBackend(data, '/api/user/loginbysignal_v2', 'POST', 2).then(function (response) {
                    // setLoad(false);
                    if (Number(response.data.status) !== 0) {
                        updateUserData(response.data.data);
                        setPopup({
                            ...popup,
                            checkLogin: true,
                            message: 'Đăng nhập thành công! Bạn sẽ được chuyển hướng sau 3s.',
                            isOpen: true,
                            handleClose: redirectLogin,
                            time: true
                        });
                    } else {
                        setPopup({
                            ...popup,
                            checkLogin: false,
                            message: 'Đăng nhập không thành công. Vui lòng thử lại sau!',
                            isOpen: true
                        })
                    }
                }).catch(function (error) {
                    // setLoad(false);
                })
            }
        })
    }
    return (
        <Container>
            <Popup
                show={popup.isOpen}
                handleClose={popup.handleClose}
                text={popup.message}
                imgClose={true}
                button={true}
                success={popup.checkLogin}
                time={popup.time}
            />
        </Container>
    );
}

export default ZaloCallback;