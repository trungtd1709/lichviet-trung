import { Image, Row, Col, Container } from "react-bootstrap";
import React from "react";
import IconDownloadAppStore from "../../../public/icons/IconDownloadAppStore";
import IconDownloadGooglePlay from "../../../public/icons/IconDownloadGooglePlay";
import TitleHeader from "../Title";
import Link from "next/link";

export default function Info() {
  return (
    <Container style={{ marginTop: 20 }} className={"p-0"}>
      <div
        style={{
          border: "1px solid #E0E0E0",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.06)",
        }}
        className="justify-content-md-center m-0"
      >
        <Container
          className="m-1"
          style={{ paddingLeft: "10px", paddingTop: 10 }}
        >
          <TitleHeader title={"TẢI ỨNG DỤNG LỊCH VIỆT"} isShowMore={false} />
        </Container>
        <Row
          style={{
            padding: "0 -16px 0 -16px",
          }}
          className="ml-0 mr-0"
        >
          <Image
            src="/images/bg-3.png"
            style={{ width: "100%", position: "relative" }}
          />
          {/* <Image
            src="/images/icon.png"
            style={{
              height: 60,
              width: 60,
              position: "absolute",
              marginLeft: 12,
              marginTop: 12,
            }}
          /> */}
        </Row>
        <Row className="p-3 ml-0 mr-0 ">
          <p className="param-title">
            Lịch Việt - Xem Ngày Tốt, Tử vi & Phong Thuỷ
          </p>
          <p className="param-content">
            Ứng dụng tra cứu lịch âm dương, xem ngày tốt, tử vi & phong thủy
            theo ngày giờ sinh, quản lý lịch sự kiện cá nhân phổ biến nhất hiện
            nay. Tự hào là ứng dụng lịch đầu tiên cho người Việt cán mốc 15
            TRIỆU lượt tải. Tải ứng dụng ngay để Lịch Việt giúp bạn thấu hiểu về
            bản thân, đưa ra các quyết định tài lộc, may mắn và quản lý công
            việc hằng ngày dễ dàng.
          </p>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
        <div id={"download-app"}>
          <Link
            href="https://itunes.apple.com/app/id585253443?mt=8"
            target="_blank"
            rel="noreferrer"
          >
            <IconDownloadAppStore />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.somestudio.lichvietnam"
            target="_blank"
            rel="noreferrer"
          >
            <IconDownloadGooglePlay />
          </Link>
        </div>
      </div>
    </Container>
  );
}
