import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
// import './posts.css';
import { useRouter } from "next/router";
import LoaderData from "../Ui/Loader";
import Widget from "./widget";

const PostsDetail = (props) => {
  const { postData } = props;
  const postDetail = postData?.item ?? null;
  const postOther = postData?.other ?? null;

  const router = useRouter();
  // const [postDetail, setPostDetail] = useState(false);
  const [load, setLoad] = useState(false);
  // const [postOther, setPostOther] = useState(null);
  // useEffect(() => {
  //   if (slug_post) {
  //     CallApiBackend(
  //       {
  //         slug_post: slug_post,
  //         //   slug_category: params.slug_category,
  //       },
  //       "/api/blog/get-detail-post",
  //       "GET"
  //     ).then(function (req) {
  //       setLoad(false);
  //       debugger;
  //       if (req.data.status === 1) {
  //         // setPostDetail(req.data.data.item);
  //         setPostOther(req.data.data.other);
  //       } else {
  //         // setPostDetail(null);
  //       }
  //     });
  //   }
  // }, [slug_post]);

  return (
    <>
      <Container>
        {/*<div className={'blog-category'}>*/}
        {/*    <ul className={'blog-category-list'}>*/}
        {/*        {*/}
        {/*            category.map(function (item, key) {*/}
        {/*                let active = (params.slug_category && params.slug_category == item.slug) ||*/}
        {/*                (!params.slug_category && key == 0) ? "active" : "";*/}
        {/*                return (*/}
        {/*                    <li className={'blog-category-name ' + active} key={key}>*/}
        {/*                        <a href={'/tu-vi-phong-thuy/' + item.slug}>{item.name}</a>*/}
        {/*                    </li>*/}
        {/*                )*/}
        {/*            })*/}
        {/*        }*/}
        {/*    </ul>*/}
        {/*</div>*/}
        <div id={"blog-content"}>
          <div className={"list_page_iner"}>
            <LoaderData size={"small"} showLoad={load} fixed={false} />
            {!postDetail && load === false ? (
              <div className={"text-center mt-4"}>Không có dữ liệu</div>
            ) : (
              <div className="posts-detail">
                <div className="post-title">{postDetail.title}</div>
                <div className="post-date">{postDetail.date}</div>
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: postDetail.content }}
                />
                {postDetail.btn_deeplink ? (
                  <div className="post-content mt-0">
                    <p style={{ textAlign: "center" }}>
                      <a href="https://onelink.to/a37gpg">
                        <img
                          src="https://cdn.lichviet.org/upload/lichviet/2023/06/06/web_lichviet/tai-ung-dung-lich-viet-tai-day.png"
                          alt="tải ứng dụng lịch việt"
                          width="900"
                          height="150"
                        />
                      </a>
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
          <Widget />
        </div>
        <div className="slider-other-news">
          {!postOther ? (
            <></>
          ) : (
            <>
              <div className="title_other">Tin tức khác</div>
              <Carousel className={"slider hidden-xs"}>
                {Array.from(
                  { length: Math.ceil(postOther.length / 3) },
                  (v, k) => {
                    return (
                      <Carousel.Item key={k}>
                        <div className={"group-item-slider"}>
                          {postOther
                            .slice(3 * k, 3 * (k + 1))
                            .map(function (item, key) {
                              return (
                                <div className="slider-item card" key={key}>
                                  <a href={item.slug}>
                                    <div className="img-thumb">
                                      <img
                                        className={"image-hover"}
                                        src={item.image}
                                        alt={item.image_alt}
                                        loading={"lazy"}
                                      />
                                    </div>
                                    <div className="card-content">
                                      <div className="card-title">
                                        {item.title}
                                      </div>
                                    </div>
                                    <div className={"card-date"}>
                                      {item.date}
                                    </div>
                                  </a>
                                </div>
                              );
                            })}
                        </div>
                      </Carousel.Item>
                    );
                  }
                )}
              </Carousel>
              <Carousel className={"slider hidden-md"}>
                {postOther.map(function (v, k) {
                  return (
                    <Carousel.Item key={k}>
                      <div className={"group-item-slider"}>
                        <div className="slider-item">
                          <a href={v.slug} className="card">
                            <div className="img-thumb">
                              <img
                                className={"image-hover"}
                                src={v.image}
                                alt={v.image_alt}
                                loading={"lazy"}
                              />
                            </div>
                            <div className="card-content">
                              <div className="card-title">{v.title}</div>
                              <div className={"card-date"}>{v.date}</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default PostsDetail;
