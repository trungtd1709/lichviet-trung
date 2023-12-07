import React, {useContext, useEffect, useState} from "react";
import {Container, Row, Col, Button, InputGroup, FormControl} from "react-bootstrap";

import {Helmet} from "react-helmet";
import { AuthContext } from "@/context/authContext";
import { CallApiBackend } from "@/api/apiRequest";
import LoaderData from "@/components/Ui/Loader";
import Popup from "@/components/Ui/Popup";
import AvatarUser from "@/components/Header/AvatarUser";
// import {AuthContext} from "../../Context/AuthContext";


const BASE_URL_IMAGE = process.env.REACT_APP_BASE_URL_IMAGE;
const Active = () => {
        const {userData, updateUserData} = useContext(AuthContext);
        useEffect(() => {
            if (!localStorage.getItem('user')) {
                window.localStorage.setItem('link_redirect', '/kich-hoat-pro')
                window.location.href = '/login'
            }
        }, [userData])

        const [code, setCode] = useState("");
        const [load, setLoad] = useState(false);
        const [messagePopup, setMessagePopup] = useState("");
        const [isOpen, setIsOpen] = useState(false);

        const activeCode = e => {
            e.preventDefault(e);
            if (userData && code) {
                setLoad(true);
                CallApiBackend({code: code}, '/api/user/active-pro', 'POST').then(
                    function (response) {
                        setLoad(false);
                        if (Number(response.data.status) === 0) {
                            alert('Mã kích hoạt không đúng hoặc đã được kích hoạt !');
                        } else {
                            let purchasePackage = response.data.data;
                            var newUser = {...userData, premiums: [purchasePackage], premium: 1};
                            updateUserData(newUser)
                            setIsOpen(true);
                            setMessagePopup('Kích hoạt thành công. Hạn sử dụng Lịch Việt Pro: ' + purchasePackage?.end_time?.split(" ")[0] + '.')
                        }
                    },
                    function (error) {
                        setLoad(false)
                        console.log(error)
                    }
                );
            }
        };
        const updateCode = (e) => {
            console.log(userData);
            var value = e.target.value;
            setCode(value.toUpperCase());
        };

        return (
            <>
                <MetaHead title="Lịch Việt | Kích hoạt Pro"/>
                <Container className={'pb-md-5'}>
                    <LoaderData size={'big'} showLoad={load} fixed={true}/>
                    <div className={"text-center title-1 py-4 tl-mobile "}> Kích hoạt Lịch Việt Pro bằng mã</div>
                    <div className={'d-flex justify-content-center'}>
                        <Row className={'box-user'}>
                            <Col md={3} className={'d-flex justify-content-center align-items-center'}>
                                <AvatarUser size={80} premium={userData?.premiums.length} avatar={userData?.avatar}/>
                            </Col>
                            <Col md={9}>
                                <p className={'title2'}>{userData?.full_name}</p>
                                <p>ID: {userData?.id}</p>
                                <p>{userData?.premiums.length ? "Thành viên PRO" : "Chưa phải thành viên PRO"}</p>
                            </Col>
                        </Row>
                    </div>
                    <Row className={'justify-content-center mt-md-4 '}>
                        <Col md={4} className={'text-center zindex'}>
                            <form action="" onSubmit={activeCode}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text name={'code-ctive'}><i
                                        className="fas fa-unlock-alt color-icon"></i></InputGroup.Text>
                                    <FormControl placeholder="Nhập mã kích hoạt" value={code} onChange={updateCode}/>
                                </InputGroup>
                                <Button type="submit" disabled={code ? '' : true} className={"px-4 mt-md-4"}>Kích hoạt</Button>
                            </form>
                        </Col>
                        <Col md={9} className={' mx-auto d-flex justify-content-between img-active'}>
                            <img src={BASE_URL_IMAGE + "/images/background/active1.png"} alt="" width={250} className={"img-scale-down hidden-xs"}/>
                            <img src={BASE_URL_IMAGE + "/images/background/active2.png"} alt="" width={250} className={"img-scale-down hidden-xs"}/>
                            <img src={BASE_URL_IMAGE + "/images/background/active-mb.png"} alt="" className={"img-scale-down hidden-md"}/>
                        </Col>
                    </Row>
                    <Popup
                        show={isOpen}
                        handleClose={() => {
                            window.location.assign('/');
                        }}
                        text={messagePopup}
                        text1={'Cảm ơn quý khách!'}
                        button={true}
                        success={true}
                    />
                </Container>
            </>
        );
    }
;


export default Active;