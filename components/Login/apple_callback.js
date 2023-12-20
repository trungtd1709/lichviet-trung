import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import jwt from 'jwt-decode';
import { CallApiBackend } from "../../api/apiRequest";
import { AuthContext } from "../../context/authContext";
import Popup from "../Ui/Popup";

const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;


const AppleCallback = () => {
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
        const fragments = window.location.hash.substring(1).split('&').map(v => { return v.split('=')[1]});
        const user = jwt(fragments[1]);
        getUserAcessToken(user.sub, fragments[0], user.sub);
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
    const getUserAcessToken = (user_id, access_token, id_token) => {

        // setLoad(true);

        let data = {
            signal: user_id,
            accessToken: access_token,
            idToken: id_token,
            type: 4,
            platform: 'web'
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

export default AppleCallback;