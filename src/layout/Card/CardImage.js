import {Container, Image, Col} from "react-bootstrap";
// import "./card.css";

export default function CardImage({url, content}) {
    return (
        <Container
            className="d-flex align-items-center p-pd-first"
            style={{minWidth: 200}}>
            <Col className="p-0 pl-2">
                <Image src={url} alt="Ảnh" fluid className="w-100 mr-3"/>
            </Col>
            <Col className="pr-2">
                <p className="text-of">{content}</p>
            </Col>
        </Container>
    );
}
