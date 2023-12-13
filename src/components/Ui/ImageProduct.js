import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";

const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;
const arr = [
  "ỨNG DỤNG LỊCH VẠN NIÊN 2024 PHỔ BIẾN, ĐẦY ĐỦ NHẤT",
  "TRANG CHỦ THÂN THIỆN, TRỰC QUAN, HIỆN ĐẠI",
  "XEM LỊCH NGÀY, LỊCH THÁNG, ĐỔI LỊCH ÂM DƯƠNG",
  "CHỌN NGÀY TỐT TIỆN LỢI, NHANH CHÓNG, CHÍNH XÁC",
  "LẬP LÁ SỐ TỬ VI, XEM TỬ VI TRỌN ĐỜI, TỬ VI HÀNG NGÀY",
  "CHỌN HƯỚNG TỐT, THIẾT KẾ NHÀ Ở PHONG THỦY,...",
  "GIẢI MÃ CÁC CON SỐ GẮN LIỀN VỚI CUỘC ĐỜI BẠN",
  "LUẬN QUẺ GIẢI ĐÁP THẮC MẮC TÌNH DUYÊN, CÔNG VIỆC, TÀI CHÍNH,...",
  "TẠO, NHẮC SỰ KIỆN CÁ NHÂN",
  "Sức khỏe tinh thần",
  "KHO NỘI DUNG VĂN HÓA VIỆT ĐA DẠNG",
];
const ImageProduct = () => {
  return (
    <>
      <div className={"sroll hidden-md"}>
        <Row className={"srcoll-img"} style={{ width: "990%" }}>
          {arr.map((item, key) => (
            <img
              key={key}
              style={{ width: "calc(100% / 11 - 15px)" }}
              src={BASE_URL_IMAGE + `/images/slider/${item}.jpg`}
              alt={item}
            />
          ))}
        </Row>
      </div>
      <Carousel className={"hidden-xs"} variant="dark">
        <Carousel.Item>
          <Row className={"img-cover"}>
            <Col md={4}>
              {/* <img src={BASE_URL_IMAGE + "/images/product/sp_1.jpg"} alt="" /> */}
              <img src={BASE_URL_IMAGE + `/images/slider/${arr[0]}.jpg`} />
            </Col>
            <Col md={4}>
              {/* <img src={BASE_URL_IMAGE + "/images/product/sp_2.jpg"} alt="" /> */}
              <img src={BASE_URL_IMAGE + `/images/slider/${arr[1]}.jpg`} />
            </Col>
            <Col md={4}>
              {/* <img src={BASE_URL_IMAGE + "/images/product/sp_3.jpg"} alt="" /> */}
              <img src={BASE_URL_IMAGE + `/images/slider/${arr[2]}.jpg`} />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className={"img-cover"}>
            <Col md={4}>
              {/* <img src={BASE_URL_IMAGE + "/images/product/sp_4.jpg"} alt="" /> */}
              <img src={BASE_URL_IMAGE + `/images/slider/${arr[3]}.jpg`} />
            </Col>
            <Col md={4}>
              {/* <img src={BASE_URL_IMAGE + "/images/product/sp_5.jpg"} alt="" /> */}
              <img src={BASE_URL_IMAGE + `/images/slider/${arr[4]}.jpg`} />
            </Col>
            <Col md={4}>
              {/* <img src={BASE_URL_IMAGE + "/images/product/sp_6.jpg"} alt="" /> */}
              <img src={BASE_URL_IMAGE + `/images/slider/${arr[5]}.jpg`} />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className={"img-cover"}>
            <Col md={4}>
              {/* <img src={BASE_URL_IMAGE + "/images/product/sp_7.jpg"} alt="" /> */}
              <img src={BASE_URL_IMAGE + `/images/slider/${arr[6]}.jpg`} />
            </Col>
            <Col md={4}>
              {/* <img src={BASE_URL_IMAGE + "/images/product/sp_8.jpg"} alt="" /> */}
              <img src={BASE_URL_IMAGE + `/images/slider/${arr[7]}.jpg`} />
            </Col>
            <Col md={4}>
              {/* <img src={BASE_URL_IMAGE + "/images/product/sp_9.jpg"} alt="" /> */}
              <img src={BASE_URL_IMAGE + `/images/slider/${arr[8]}.jpg`} />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className={"img-cover"}>
            <Col md={4}>
              {/* <img src={BASE_URL_IMAGE + "/images/product/sp_10.jpg"} alt="" /> */}
              <img src={BASE_URL_IMAGE + `/images/slider/${arr[9]}.jpg`} />
            </Col>
            <Col md={4}>
              {/* <img src={BASE_URL_IMAGE + "/images/product/sp_11.jpg"} alt="" /> */}
              <img src={BASE_URL_IMAGE + `/images/slider/${arr[10]}.jpg`} />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ImageProduct;
