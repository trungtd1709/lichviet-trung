import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import './posts.css';
import { CallApiBackend } from "@/api/apiRequest";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import LoadGoogleAds from "../Ads/googleAds";
import MetaHead from "../MetaHead";
import Widget from "./widget";

const Posts = (element) => {
  const { currentMetaData, topPosts } = element;

  const [catePost, setCatePost] = useState(null);
  const router = useRouter();
  const { category_child } = router.query;
  //   const base_url = window.location.origin;
  // const [baseURL, setBaseURL] = useState("");
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

  // useEffect(() => {
  //   const base_url = window.location.origin;
  //   setBaseURL(base_url);
  // }, []);

  useEffect(() => {
    let cateP = category_child ?? element.category;
    let pageInfo = localStorage.getItem("PAGE_" + cateP) ?? 1;
    // if (pageInfo !== currenPage) {
      setCurrenPage(pageInfo);
      setCatePost(cateP);
      getPosts(pageInfo, 0, cateP);
    // }
  }, [category_child, element, getPosts]);

  const handlePageClick = (event) => {
    let currenP = Number(event.selected) + 1;
    localStorage.setItem("PAGE_" + catePost, currenP);
    setCurrenPage(currenP);
    getPosts(currenP, 1, catePost);
  };

  return (
    <>
      <Container>
        <MetaHead {...currentMetaData} />
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
                    <Link href={"/" + hot.slug}>
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
                          <h2
                            style={{ marginBottom: "0" }}
                            className={"card_title"}
                          >
                            {hot.title}
                          </h2>
                          <p
                            style={{ marginBottom: "0" }}
                            className={"card_subtitle"}
                          >
                            {hot.subtitle}
                          </p>
                          <div className={"card_date"}>{hot.date}</div>
                        </div>
                      </div>
                    </Link>
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
                            <Link
                              className="card"
                              href={"/" + item.slug}
                              key={k}
                            >
                              <h2
                                style={{ marginBottom: "0" }}
                                className={"card_title hidden-md"}
                              >
                                {item.title}
                              </h2>
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
                                <h2
                                  style={{ marginBottom: "0" }}
                                  className={"card_title hidden-xs"}
                                >
                                  {item.title}
                                </h2>
                                <p
                                  style={{ marginBottom: "0" }}
                                  className={"card_subtitle"}
                                >
                                  {item.subtitle}
                                </p>
                                <div className={"card_date"}>{item.date}</div>
                              </div>
                            </Link>
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
          <Widget topPosts={topPosts} context={element} />
        </div>
      </Container>
    </>
  );
};
export default Posts;
