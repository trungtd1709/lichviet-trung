import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;


const Popup = ({show = true, success = false, button = false, text = '', text1 = '',
    imgClose = true, handleClose = () => {}, time = false}) => {
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        if (show){
            const id = setInterval(() => {
                if (timer === 0) {
                    handleClose();
                } else
                    setTimer(timer - 1);
            }, 1000);
            return () => {
                clearInterval(id)
            };
        }
    });

    useEffect(() => {
        if (!show) {
            setTimer(5);
        }
    }, [show])
    return (
        <div className={show ? "popup" : 'd-none'}>
            <div className="backgroup-popup" onClick={handleClose}>
            </div>
            <div className="popup-content">
                {imgClose && <div className="close-popup" onClick={handleClose}>
                    <img src={BASE_URL_IMAGE + "/images/icon/i_close.png"} alt="" width={20} height={20}/>
                </div>}
                <div className="img-popup">
                    {success ? <img src={BASE_URL_IMAGE + "/images/icon/popup_success.png"} alt=""/> :
                        <img src={BASE_URL_IMAGE + "/images/icon/popup.png"} alt=""/>}
                </div>
                <div className="text-popup">
                    <p className="tn">{text}</p>
                    <p className="">{text1}</p>
                </div>
                {time && <>
                    <div className={'d-flex justify-content-center'}>
                        <div className={'ball-timer'}>
                            <span>{timer}</span>
                        </div>
                    </div>
                </>}
                <div>
                    {button && <Button className="mt-2" onClick={handleClose}>Đóng</Button>}
                </div>
            </div>

        </div>
    );
}

export default Popup;