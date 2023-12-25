import Link from "next/link";
import { Col, Row } from "react-bootstrap";
// import "./style.css";

export default function TitleHeader({ isShowMore, title, className }) {
  return (
    <Row
      className={`justify-content-between align-items-center p-0 mx-0 mt-0 ${className}`}
      style={{
        borderLeft: "4px solid #35C03C",
        marginBottom: "15px",
      }}
    >
      <Col className="p-0" md={8} xs={7}>
        <h2
          className="rs-title pl-md-2 pl-1"
          style={{ verticalAlign: "middle" }}
        >
          {title}
        </h2>
      </Col>
      {isShowMore && (
        <Col className="more-text text-right pr-0" style={{ minWidth: 80 }}>
          <Link href={isShowMore} className={"text-green"}>
            Xem thêm
          </Link>
        </Col>
      )}
    </Row>
  );
}
