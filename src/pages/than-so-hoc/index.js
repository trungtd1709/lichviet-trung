import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import './posts.css';
import { CallApiBackend, getTopPosts } from "@/api/apiRequest";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import LoadGoogleAds from "@/components/Ads/googleAds";
import MetaHead from "@/components/MetaHead";
import Widget from "@/components/Posts/widget";
import { FormThanSoHoc } from "@/components/Login/Form/FormThanSoHoc";
import { getSystemMetaData } from "@/shared/utils";

const ThanSoHoc = (element) => {
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
  //   debugger;
  //   setBaseURL(base_url);
  // }, []);

  useEffect(() => {
    debugger;
    // let cateP = category_child ?? element.category;
    let cateP = category_child ?? "kien-thuc-than-so-hoc";

    let pageInfo = localStorage.getItem("PAGE_" + cateP) ?? 1;
    if (pageInfo !== currenPage) {
      setCurrenPage(pageInfo);
      setCatePost(cateP);
      getPosts(pageInfo, 0, cateP);
    }
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
              <FormThanSoHoc />
            ) : (
              <div>
                <FormThanSoHoc />
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
                                <h3
                                  style={{ marginBottom: "0" }}
                                  className={"card_subtitle"}
                                >
                                  {item.subtitle}
                                </h3>
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
          </div>
          <Widget topPosts={topPosts} context={element} />
        </div>
      </Container>
    </>
  );
};
export default ThanSoHoc;

export async function getServerSideProps(context) {
  const path = context.resolvedUrl;
  console.log("[path]:", path);
  const currentMetaData = getSystemMetaData(path);
  const topPosts = await getTopPosts();

  return {
    props: {
      currentMetaData,
      topPosts,
    },
  };
}
