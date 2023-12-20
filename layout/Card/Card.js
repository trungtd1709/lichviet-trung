import {Container, Row} from "react-bootstrap";
// import "./card.css";
import LazyLoad from 'react-lazyload';
import TitleHeader from "../../components/Title";

export default function Card(props) {
    return (
        <Container style={{marginTop: props.top ?? 20}} className={' box-card'}>
            {props.title && (
                <TitleHeader isShowMore={props.isShowMore} title={props.title}/>
            )}
            <LazyLoad offset={100}>
                <div id={props.id ?? ''}>
                    <Row className="m-0 list-item-card" >
                        {props.children}
                    </Row>
                </div>
            </LazyLoad>
        </Container>
    );
}
