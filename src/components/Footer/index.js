import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import IconFacebook from "../../../public/icons/IconFacebook";
import IconYoutube from "../../../public/icons/IconYoutube";
import IconTikTok from "../../../public/icons/IconTikTok";
import IconEmail from "../../../public/icons/IconEmail";
import IconIphone from "../../../public/icons/IconIphone";
import IconAndroid from "../../../public/icons/IconAndroid";
import IconMessage from "../../../public/icons/IconMessage";
import IconZalo from "../../../public/icons/IconZalo";
import Link from "next/link";
import { imgSrc } from "@/const/AppResource";
// import IconZalo from "../../assets/Icons/IconZalo";
// import IconFacebook from "../../assets/Icons/IconFacebook";
// import IconYoutube from "../../assets/Icons/IconYoutube";
// import IconTikTok from "../../assets/Icons/IconTikTok";
// import IconEmail from "../../assets/Icons/IconEmail";
// import IconIphone from "../../assets/Icons/IconIphone";
// import IconAndroid from "../../assets/Icons/IconAndroid";
// import IconMessage from "../../assets/Icons/IconMessage";

const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;

const Footers = () => {
  const heightFooter = useRef();
  const srcollTop = useRef(null);

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  function scrollFunction() {
    if (srcollTop.current && heightFooter.current) {
      if (window.pageYOffset > 0 && heightFooter.current.offsetWidth > 800) {
        srcollTop.current.classList.remove("d-none");
      } else {
        srcollTop.current.classList.add("d-none");
      }
    }
  }

  const srcollToTop = () => {
    document.getElementsByTagName("html")[0].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <footer ref={heightFooter}>
      <Container>
        <hr />

        <Row className={"pt-2"}>
          <Col md={4} className={"address-i"}>
            <div className="d-block hidden-xs ">
              <img src={imgSrc.ppclinkLogo} width={180}></img>
            </div>
            <div className="font-weight-bold pb-3 mt-3">
              Công ty TNHH phát triển Lịch Việt
            </div>
            <ul className={"footer-address"}>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <a
                  href={"https://goo.gl/maps/ccHcu6TWPexqEuqF9"}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Số 10, ngõ 379 đường Hoàng Hoa Thám, phường Liễu Giai, quận Ba
                  Đình, thành phố Hà Nội
                </a>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href={"tel:0766002689"} rel="noreferrer" target={"_blank"}>
                  {" "}
                  0766.002.689
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <div className={"group-email"}>
                  <div className={"item"}>
                    <span style={{ fontWeight: 500 }}>Hỗ trợ: </span>
                    <a
                      style={{ display: "inline-block" }}
                      href="mailto:support@lichviet.app"
                      rel="noreferrer"
                      target={"_blank"}
                    >
                      support@lichviet.app
                    </a>
                  </div>
                  <div className={"item"}>
                    <span style={{ fontWeight: 500 }}>Liên hệ hợp tác: </span>
                    <a
                      style={{ display: "inline-block" }}
                      href="mailto:partner@lichviet.app"
                      rel="noreferrer"
                      target={"_blank"}
                    >
                      partner@lichviet.app
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
          <Col md={4} className="ml-auto hidden-xs">
            <div className="font-weight-bold title-footer">Danh mục</div>
            <ul className={"mt-3"}>
              <li>
                <Link href="/">Trang chủ</Link>
              </li>
              <li>
                <Link href="/tu-vi">Kiến thức tử vi</Link>
              </li>
              <li>
                <Link href="/phong-thuy/kien-thuc-phong-thuy">Kiến thức phong thuỷ</Link>
              </li>
              <li>
                <Link href="/than-so-hoc/kien-thuc-than-so-hoc">
                  Thần số học
                </Link>
              </li>{" "}
              <li>
                <Link href="/lich-van-nien">Ứng dụng Lịch Việt</Link>
              </li>
              {/* <li>
                <Link href="/mua-lich-viet-pro">Nâng cấp Lịch Việt Pro</Link>
              </li> */}
              <li>
                <Link href="/dieu-khoan-su-dung">Điều khoản sử dụng</Link>
              </li>
              <li>
                <Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className={"row m-0"}>
            <Col className={"m-0 p-0 col-12 ket-noi-lv"}>
              <div className="font-weight-bold title-footer ">
                Kết nối với chúng tôi
              </div>
              <Row className="py-4">
                <Col md={3} xs={3}>
                  <Link
                    href="https://www.facebook.com/lichviet.official"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-svg">
                      <IconFacebook />
                    </span>
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link
                    href="https://www.youtube.com/@lichviet.official"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-svg">
                      <IconYoutube />
                    </span>
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link
                    href="https://www.tiktok.com/@lichviet.official"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-svg">
                      <IconTikTok />
                    </span>
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link
                    href="https://ppclink.com/apps/contact-us/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-svg">
                      <IconEmail />
                    </span>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col className={"m-0 p-0 col-12 download-lv"}>
              <div className="font-weight-bold title-footer">
                Tải ứng dụng Lịch Việt
              </div>
              <Row className="py-4">
                <Col md={3} xs={3}>
                  <a
                    href="https://itunes.apple.com/app/id585253443?mt=8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-svg">
                      <IconIphone />
                    </span>
                  </a>
                </Col>
                <Col md={3} xs={3}>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.somestudio.lichvietnam"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-svg">
                      <IconAndroid />
                    </span>
                  </a>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
        <hr></hr>
        <div className={" mb-2 copy-footer"}>
          <span style={{ color: "#35C03C" }}>
            © Copyright 2022 by PPCLINK. Read our{" "}
          </span>
          <Link
            href="/chinh-sach-bao-mat"
            style={{ color: "#35C03C", marginBottom: "0" }}
          >
            <span style={{ color: "#35C03C" }}>&nbsp;Privacy policy.</span>
          </Link>
        </div>
      </Container>
      <div className="float-footer">
        <div id="go-up" onClick={srcollToTop} ref={srcollTop}>
          <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" />
          </svg>
        </div>
        <div className="button-contact message">
          <div className="phone-vr-circle-fill"></div>
          <div className="phone-vr">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://m.me/lichviet.official"
            >
              <IconMessage />
            </a>
          </div>
        </div>
        <div className="button-contact zalo">
          <div className="phone-vr-circle-fill"></div>
          <div className="phone-vr">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://zalo.me/0766002689"
            >
              <IconZalo />
            </a>
          </div>
        </div>
      </div>
      <div className={"d-flex justify-content-center"}>
        <a
          href="https//www.dmca.com/Protection/Status.aspx?ID=398ad721-aa1d-4a9c-9523-91b726749d27"
          title="DMCA.com Protection Status"
          className="dmca-badge"
        >
          <img
            src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=398ad721-aa1d-4a9c-9523-91b726749d27"
            alt="DMCA.com Protection Status"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footers;
