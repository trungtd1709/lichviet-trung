import React, { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import './posts.css';
import Widget from "./widget";
import ReactPaginate from "react-paginate";
import LoadGoogleAds from "../Ads/googleAds";
import { CallApiBackend } from "@/api/apiRequest";

const Posts = (element) => {
  //   const { topPosts } = element;
  const params = useParams();
  const [catePost, setCatePost] = useState(null);
//   const base_url = window.location.origin;
  const [baseURL, setBaseURL] = useState("");
  const [listPost, setListPost] = useState([]);
  const [paginate, setPaginate] = useState([]);
  const [currenPage, setCurrenPage] = useState();
  const [hot, setHot] = useState(null);

  const getPosts = useCallback((page = 0, changePage = 0, cateP = "") => {
    CallApiBackend(
      { slug_category: cateP, page: page },
      "/api/blog/get-posts",
      "GET"
    ).then(function (req) {
      if (req.data.status === 1) {
        let data = req.data.data;
        if (data) {
          if (Number(changePage) === 0) {
            setHot(data.hot);
            setPaginate(data.paginate);
          }
          setListPost(data.list);
        }
      }
    });
  }, []);

  useEffect(() => {
    const base_url = window.location.origin;
    setBaseURL(base_url);
  }, []);

  useEffect(() => {
    let cateP = params.category_child ?? element.category;
    let pageInfo = localStorage.getItem("PAGE_" + cateP) ?? 1;
    if (pageInfo !== currenPage) {
      setCurrenPage(pageInfo);
      setCatePost(cateP);
      getPosts(pageInfo, 0, cateP);
    }
  }, [params, element, getPosts]);

  const handlePageClick = (event) => {
    let currenP = Number(event.selected) + 1;
    localStorage.setItem("PAGE_" + catePost, currenP);
    setCurrenPage(currenP);
    getPosts(currenP, 1, catePost);
  };
  
  return (
    <>
      <Container>
        {/*<div className={'blog-category'}>*/}
        {/*    <ul className={'blog-category-list'}>*/}
        {/*        {*/}
        {/*            category.map(function (item, key) {*/}
        {/*                let active = (catePost == item.slug) || (catePost == cate && key == 0) ? "active" : "";*/}
        {/*                return (*/}
        {/*                    <li className={'blog-category-name ' + active} key={key}>*/}
        {/*                        <a href={item.slug}>{item.name}</a>*/}
        {/*                    </li>*/}
        {/*                )*/}
        {/*            })*/}
        {/*        }*/}
        {/*    </ul>*/}
        {/*</div>*/}
        <div className={"ads-google"}>
          <LoadGoogleAds slot={5524209637} />
        </div>
        <div id={"blog-content"}>
          <div className={"list_page_iner"}>
            {!listPost.length && !hot ? (
              <div className="text-center mt-4">Không có dữ liệu</div>
            ) : (
              <div>
                {hot ? (
                  <div className={"blog_list"}>
                    <a href={baseURL + "/" + hot.slug}>
                      <div className={"card hot"}>
                        <div className={"post_thumb"}>
                          <figure className={"imghover"}>
                            <img
                              className={"image-hover"}
                              src={hot.image}
                              alt={hot.image_alt}
                              loading={"lazy"}
                            />
                          </figure>
                        </div>
                        <div className={"card_content"}>
                          <div className={"card_title"}>{hot.title}</div>
                          <div className={"card_subtitle"}>{hot.subtitle}</div>
                          <div className={"card_date"}>{hot.date}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                ) : (
                  <></>
                )}

                <div className={"other_news"}>
                  {!listPost.length ? (
                    <></>
                  ) : (
                    <>
                      <div className={"title_other"}>Tin tức khác</div>
                      <div className={"other_list"}>
                        {listPost.map(function (item, k) {
                          return (
                            <a
                              className="card"
                              href={baseURL + "/" + item.slug}
                              key={k}
                            >
                              <div className={"card_title hidden-md"}>
                                {item.title}
                              </div>
                              <div className={"post_thumb"}>
                                <figure className={"imghover"}>
                                  <img
                                    className={"image-hover"}
                                    src={item.image}
                                    alt={item.image_alt}
                                    loading={"lazy"}
                                  />
                                </figure>
                              </div>
                              <div className={"card_content"}>
                                <div className={"card_title hidden-xs"}>
                                  {item.title}
                                </div>
                                <div className={"card_subtitle"}>
                                  {item.subtitle}
                                </div>
                                <div className={"card_date"}>{item.date}</div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
            <div className={"paginate"}>
              <ReactPaginate
                breakLabel="..."
                nextLabel={<i className="fas fa-chevron-right"></i>}
                previousLabel={<i className="fas fa-chevron-left"></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                pageCount={paginate.length}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                activeLinkClassName={"active"}
                renderOnZeroPageCount={null}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                forcePage={currenPage - 1}
              />
            </div>
          </div>
          <Widget context={element} />
        </div>
      </Container>
    </>
  );
};
export default Posts;