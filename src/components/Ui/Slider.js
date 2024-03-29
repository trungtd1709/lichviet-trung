import Link from "next/link";
import React from "react";
import { Carousel } from "react-bootstrap";

const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_URL_IMAGE;

const Slider = (props) => {
  return (
    <div className={"position-relative"} style={{ overflow: "hidden" }}>
      <Carousel variant="dark">
        {props.banner ? (
          props.banner.map(function (i, index) {
            return (
              <Carousel.Item key={index}>
                <div className={"img-slider"}>
                  {props.click ? (
                    <Link
                      href={"/tai-app-nhan-qua"}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        className="d-block w-100"
                        src={i}
                        alt="First slide"
                      />
                    </Link>
                  ) : (
                    <img className="d-block w-100" src={i} alt="First slide" />
                  )}
                </div>
              </Carousel.Item>
            );
          })
        ) : (
          <Carousel.Item>
            <div className={"img-slider"}>
              <img
                className="d-block w-100"
                src={"image/slider/slider45.png"}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
        )}
      </Carousel>
      <Carousel.Caption>
        {props.logo && (
          <img
            src={BASE_URL_IMAGE + "/images/icon/logo-slider.png"}
            alt=""
            width={150}
            className={"mb-md-4 hidden-xs"}
          />
        )}
        <h2 style={{ fontSize: "1.5rem" }}>{props.title}</h2>
        <p className={"m-0"}>{props.description}</p>
        {props.link && (
          <div className={"link-product-silder"}>
            <Link
              href="https://itunes.apple.com/app/id585253443?mt=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={BASE_URL_IMAGE + "/images/icon/link/appstore.png"}
                alt=""
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.somestudio.lichvietnam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={BASE_URL_IMAGE + "/images/icon/link/googleplay.png"}
                alt=""
              />
            </Link>
          </div>
        )}
      </Carousel.Caption>
    </div>
  );
};

export default Slider;
