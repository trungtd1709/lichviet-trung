import { CallApiBackend } from "@/api/apiRequest";
import LoadGoogleAds from "@/components/Ads/googleAds";
import MetaHead from "@/components/MetaHead";
import { OtherNews } from "@/components/OtherNews";
import Widget from "@/components/Posts/widget";
import ThanSoHocResult from "@/components/ThanSoHocResult";
import { getServerProps } from "@/shared/func";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

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
      router.push("/than-so-hoc/tra-cuu-than-so-hoc");
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
            <ThanSoHocResult />
            {!listPost.length ? <></> : <OtherNews listPost={listPost} />}
          </div>
          <Widget topPosts={topPosts} context={element} />
        </div>
      </Container>
    </>
  );
};
export default ThanSoHoc;

export async function getServerSideProps(context) {
  return await getServerProps(context);
}
