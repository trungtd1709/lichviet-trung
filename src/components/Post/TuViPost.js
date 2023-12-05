import {Col, Image, Stack} from "react-bootstrap";
import React, {useEffect, useState} from "react";
// import {CallApiBackend} from "../Ui/CallApiBackend";
import LoaderData from "../Ui/Loader";
import CardImage from "../../layout/Card/CardImage";
import { CallApiBackend } from "@/api/apiRequest";

export default function TuViPost({md, category, borderTopFirstChild, posts}) {
    const [data, setData] = useState({});
    const [load, setLoad] = useState(false);
    // useEffect(() => {
    //     if (category) {
    //         CallApiBackend({}, "/api/blog/get-posts?home_page=1&slug_category=" + category, 'GET').then(req => {
    //             setLoad(false);
    //             if (req?.data?.status === 1) {
    //                 setData(req.data.data);
    //             }
    //         })
    //     }
    // }, [category])
    return (
        <>
            <LoaderData size={'small'} showLoad={load} fixed={false}/>
            <Col md={md}>
                {
                    posts.hot ?
                        <a href={'/'+posts.hot.slug}>
                            <div className="justify-content-md-center">
                                <Image loading='lazy' src={posts.hot.image} alt="Ảnh" style={{width: "100%"}}/>
                            </div>
                            <div className="justify-content-md-center align-items-center">
                                <p className="pt-3 param-title">
                                    {posts.hot.title}
                                </p>
                                <p className="param-content">
                                    {posts.hot.subtitle}
                                </p>
                            </div>
                        </a>
                        : <></>
                }
            </Col>
            <Col style={{paddingLeft: 8}}>
                <hr className={borderTopFirstChild ? 'p-pd' : 'p-pd hidden-md'}/>
                <Stack>
                    {
                        posts.list?.slice(0, 4).map(function (item, key) {
                            return (
                                <a key={key} href={'/'+item.slug}>
                                    <CardImage
                                        url={item.image}
                                        content={item.title}
                                    />
                                </a>
                            )

                        })
                    }

                </Stack>
            </Col>
        </>
    );
}
