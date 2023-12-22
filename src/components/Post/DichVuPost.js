import Link from "next/link";
import {Card, Col, Image} from "react-bootstrap";

export default function DichVuPost({data}) {
    return (
        <>
            {data.map((item,key) => (
                <Col sm xs={6} key={key} className="mt-md-0 mt-sm-0 mt-3 text-center">
                    <Link href={item?.link}>
                        <Image src={item?.img || "/image/card-1.png"} fluid/>
                    </Link>
                </Col>
            ))}
        </>
    );
}
