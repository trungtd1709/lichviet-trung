import {Col, Image, Stack} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import LoaderData from "../Ui/Loader";
import CardImage from "../../layout/Card/CardImage";
import Link from "next/link";
import { CallApiBackend } from "../../api/apiRequest";

export default function TuViPost({md, category, borderTopFirstChild}) {
    const [data, setData] = useState({});
    const [load, setLoad] = useState(false);
    useEffect(() => {
        if (category) {
            CallApiBackend({}, "/api/blog/get-posts?home_page=1&slug_category=" + category, 'GET').then(req => {
                setLoad(false);
                if (req?.data?.status === 1) {
                    setData(req.data.data);
                }
            })
        }
    }, [category])
    return (
        <>
            <LoaderData size={'small'} showLoad={load} fixed={false}/>
            <Col md={md}>
                {
                    data.hot ?
                        <Link href={'/'+data.hot.slug}>
                            <div className="justify-content-md-center">
                                <Image loading='lazy' src={data.hot.image} alt="Ảnh" style={{width: "100%"}}/>
                            </div>
                            <div className="justify-content-md-center align-items-center">
                                <h2 className="pt-3 param-title">
                                    {data.hot.title}
                                </h2>
                                <p className="param-content">
                                    {data.hot.subtitle}
                                </p>
                            </div>
                        </Link>
                        : <></>
                }
            </Col>
            <Col style={{paddingLeft: 8}}>
                <hr className={borderTopFirstChild ? 'p-pd' : 'p-pd hidden-md'}/>
                <Stack>
                    {
                        data.list?.slice(0, 4).map(function (item, key) {
                            return (
                                <Link key={key} href={'/'+item.slug}>
                                    <CardImage
                                        url={item.image}
                                        content={item.title}
                                    />
                                </Link>
                            )

                        })
                    }

                </Stack>
            </Col>
        </>
    );
}
