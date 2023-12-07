import Link from "next/link";
import {Col, Row} from "react-bootstrap";
// import "./style.css";

export default function TitleHeader({isShowMore, title}) {
    return (
        <Row
            className="justify-content-between align-items-center p-0 m-0 mb-4"
            style={{borderLeft: "4px solid #35C03C"}}>
            <Col className="p-0" md={8} xs={7}>
                <h2
                    className="rs-title pl-md-2 pl-1"
                    style={{verticalAlign: "middle"}}>
                    {title}
                </h2>
            </Col>
            {isShowMore && (
                <Col className="more-text text-right pr-0" style={{minWidth: 80}}>
                    <Link href={isShowMore} className={'text-green'}>Xem thêm</Link>
                </Col>
            )}
        </Row>
    );
}
