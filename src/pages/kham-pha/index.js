import Slider from "@/components/Ui/Slider";
import React from "react";
import { Container, Row } from "react-bootstrap";
const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;

const KhamPha = () => {
  const arr = [
    {
      name: "Ngày này năm xưa",
      link: "https://deeplink.lichviet.app/1DwJhT4uPmb",
    },
    {
      name: "Đếm xuôi ngược",
      link: "https://deeplink.lichviet.app/1MuH8kdvPmb",
    },
    { name: "Lễ hội", link: "https://deeplink.lichviet.app/MPN8uuivPmb" },
    { name: "Danh Ngôn", link: "https://deeplink.lichviet.app/vMpjOorvPmb" },
    { name: "Video hay", link: "https://deeplink.lichviet.app/4n9RPdwvPmb" },
    { name: "Phong tục", link: "https://deeplink.lichviet.app/phongtuc" },
    { name: "Hát ru", link: "https://deeplink.lichviet.app/Ae4o5iBvPmb" },
    { name: "Đồng Dao", link: "https://deeplink.lichviet.app/S5ejqkFvPmb" },
    { name: "Gửi thiệp", link: "https://deeplink.lichviet.app/b6hr0sLvPmb" },
    { name: "Trò chơi", link: "https://deeplink.lichviet.app/OiyS3lOvPmb" },
    {
      name: "Bài viết truyền cảm hứng",
      link: "https://deeplink.lichviet.app/QjPUyRRvPmb",
    },
    {
      name: "Truyện tiếu lâm",
      link: "https://deeplink.lichviet.app/H6G4EhUvPmb",
    },
    { name: "Góc thư giãn", link: "https://deeplink.lichviet.app/EVzkvL4vPmb" },
    { name: "Phóng sự ảnh", link: "https://deeplink.lichviet.app/NMQfFh8vPmb" },
    {
      name: "Có thể bạn chưa biết",
      link: "https://deeplink.lichviet.app/lVftnqbwPmb",
    },
  ];
  return (
    <>
      <Slider
        banner={["image/slider/slider5.jpg"]}
        title={"Khám phá các tính năng của Lịch Việt"}
        description={
          "Mở khóa không giới hạn những tính năng độc đáo, giúp đem lại trải nghiệm tuyệt vời nhất."
        }
        link={false}
      />
      <Container>
        <div className={"title-1 py-md-4 pb-4"}>Khám phá</div>
        <Row className={"list-icon-five"}>
          {arr.map(function (i, index) {
            return (
              <div key={index}>
                {
                  <a href={i.link} target="_blank" rel={"noreferrer"}>
                    <img
                      src={
                        BASE_URL_IMAGE +
                        "/images/kham_pha/item" +
                        parseInt(index + 1) +
                        ".png"
                      }
                      alt=""
                      loading={"lazy"}
                    />
                    <p className={"title-2"}>{i.name}</p>
                  </a>
                }
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default KhamPha;
