import {Card, Col, Row, Image} from "react-bootstrap";

export default function TienIchPost({data}) {
    return (
        <>
            {data.map((item,key) => (
                <Col md={2} sm={4} xs={6} className="pb-3" key={key}>
                    <a href={item?.link}>
                        <Row className="mb-2">
                            <Image
                                src={item?.img || "image/unit-1.png"}
                                width={68}
                                height={68}
                            />
                        </Row>
                        {item?.content && (
                            <Row className="justify-content-center">
                                <p className={'text-center'} style={{fontWeight:400}}>{item.content}</p>
                            </Row>
                        )}
                    </a>
                </Col>
            ))}
        </>
    );
}
