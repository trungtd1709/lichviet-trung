import { Card, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import LoaderData from "../Ui/Loader";
import { CallApiBackend } from "@/api/apiRequest";
import Link from "next/link";

export default function CungHoangDaoPost({ category }) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    if (category) {
      CallApiBackend(
        {},
        // "/api/blog/get-posts?home_page=1&slug_category=" + category,
        "/blog/get-posts?home_page=1&slug_category=" + category,
        "GET"
      ).then((req) => {
        setLoad(false);
        if (req?.data?.status === 1) {
          let array_list = [req.data.data.hot].concat(req.data.data.list);
          setData(array_list);
        }
      });
    }
  }, [category]);
  return (
    <>
      <LoaderData size={"small"} showLoad={load} fixed={false} />
      {data.slice(0, 3).map((item, key) => (
        <Col md={4} key={key} className="mt-md-0 mt-sm-3 mt-3">
          <Link href={"/" + item?.slug} className={"d-flex h-100"}>
            <Card>
              <Card.Img src={item?.image} />
              {item?.title && (
                <Card.Body>
                  <Card.Text className="param-content">{item?.title}</Card.Text>
                </Card.Body>
              )}
            </Card>
          </Link>
        </Col>
      ))}
    </>
  );
}
