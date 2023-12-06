import React from "react";
import {Carousel} from "react-bootstrap";

const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;

const Slider = props =>{
    return  (
        <div className={'position-relative'} style={{overflow:"hidden"}}>
            <Carousel variant="dark">
                {
                    props.banner ?
                        props.banner.map(function (i,index) {
                            return (
                                <Carousel.Item key={index}>
                                    <div className={'img-slider'}>
                                        {
                                            props.click ?
                                                <a href={'/tai-app-nhan-qua'} target={'_blank'} rel="noopener noreferrer">
                                                    <img
                                                        className="d-block w-100"
                                                        src={i}
                                                        alt="First slide"
                                                    />
                                                </a>
                                                :
                                                <img
                                                    className="d-block w-100"
                                                    src={i}
                                                    alt="First slide"
                                                />
                                        }

                                    </div>
                                </Carousel.Item>
                            );
                        })
                    :
                        <Carousel.Item>
                            <div className={'img-slider'}>
                                <img
                                    className="d-block w-100"
                                    src={'image/slider/slider45.png'}
                                    alt="First slide"
                                />
                            </div>
                        </Carousel.Item>
                }

            </Carousel>
            <Carousel.Caption>
                {props.logo && <img src={BASE_URL_IMAGE+"/images/icon/logo-slider.png"} alt="" width={150} className={'mb-md-4 hidden-xs'}/>}
                <h2>{props.title}</h2>
                <p className={'m-0'}>{props.description}</p>
                {
                    props.link &&
                        <div className={'link-product-silder'}>
                            <a href="https://itunes.apple.com/app/id585253443?mt=8" target="_blank" rel="noopener noreferrer">
                                <img src={BASE_URL_IMAGE+"/images/icon/link/appstore.png"} alt=""/>
                            </a>
                            <a  href="https://play.google.com/store/apps/details?id=com.somestudio.lichvietnam" target="_blank" rel="noopener noreferrer">
                                <img src={BASE_URL_IMAGE+"/images/icon/link/googleplay.png"} alt=""/>
                            </a>
                        </div>
                }

            </Carousel.Caption>
        </div>

    );
}

export default Slider;