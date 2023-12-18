import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import './posts.css';
import { CallApiBackend, getTopPosts } from "@/api/apiRequest";
import LoadGoogleAds from "@/components/Ads/googleAds";
import MetaHead from "@/components/MetaHead";
import Widget from "@/components/Posts/widget";
import ThanSoHocResult from "@/components/ThanSoHocResult";
import { getSystemMetaData } from "@/shared/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const ThanSoHoc = (element) => {
  const { currentMetaData, topPosts } = element;
  const { tshUser } = useSelector((state) => state.thanSoHoc);

  const [catePost, setCatePost] = useState(null);
  const router = useRouter();
  const { category_child } = router.query;
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
    // let cateP = category_child ?? element.category;
    let cateP = category_child ?? "kien-thuc-than-so-hoc";

    let pageInfo = localStorage.getItem("PAGE_" + cateP) ?? 1;
    if (pageInfo !== currenPage) {
      setCurrenPage(pageInfo);
      setCatePost(cateP);
      getPosts(pageInfo, 0, cateP);
    }
  }, [category_child, element, getPosts]);

  useEffect(() => {
    if (_.isEmpty(tshUser)) {
      router.push("/than-so-hoc");
    }
  }, [tshUser]);

  return (
    <>
      <Container>
        <MetaHead {...currentMetaData} />
        {/* <LoaderData size={"big"} showLoad={loadLogin} fixed={true} /> */}
        <div className={"ads-google"}>
          <LoadGoogleAds slot={5524209637} />
        </div>
        <div id={"blog-content"}>
          <div className={"list_page_iner"}>
            {!listPost.length && !hot ? (
              <></>
            ) : (
              <div>
                <ThanSoHocResult />
                {/* <GiaiMaChiSo conSoData={conSoData} /> */}
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
