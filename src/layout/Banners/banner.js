import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import { CallApiBackend } from "@/api/apiRequest";
import Link from "next/link";

export default function Banners(props) {
  const { banners } = props;
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   CallApiBackend({}, "/api/get-banners", "GET").then((res) => {
  //     if (res?.data?.status === 1 && res.data?.data.length !== 0) {
  //       setData(res.data.data);
  //       debugger;
  //     }
  //   });
  // }, []);
  return (
    <div>
      {banners && (
        <Carousel
          style={{ marginTop: 35, position: "relative" }}
          variant="dark"
        >
          {banners.map((item, key) => {
            return (
              <Carousel.Item key={key}>
                <Link href={item.link}>
                  <img
                    className="w-100 hidden-xs"
                    src={item.image}
                    alt={item.title}
                  />
                  <img
                    className="w-100 hidden-md"
                    src={item.image_mobile ?? item.image}
                    alt={item.title}
                  />
                </Link>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
