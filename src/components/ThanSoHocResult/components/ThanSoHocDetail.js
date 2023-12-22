import { CallApiBackend } from "@/api/apiRequest";
import LoadGoogleAds from "@/components/Ads/googleAds";
import MetaHead from "@/components/MetaHead";
import Widget from "@/components/Posts/widget";
import AppBreadcrumb from "@/components/AppBreadcrumb";
import { OtherNews } from "@/components/OtherNews";
import { appPages } from "@/const/const";
import _ from "lodash";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import GiaiDoanCuocDoiDetail from "./GiaiDoanCuocDoiDetail";
import GiaiMaChiSo from "./GiaiMaChiSo";
import GiaiMaNgaySinhDetail from "./GiaiMaNgaySinhDetail";
import { TongQuan } from "./TongQuan";

const ThanSoHocDetail = (element) => {
  const { currentMetaData, topPosts } = element;
  const { tshUser } = useSelector((state) => state?.thanSoHoc);
  const [catePost, setCatePost] = useState(null);
  const router = useRouter();
  const { category_child } = router.query;
  const [listPost, setListPost] = useState([]);
  const [paginate, setPaginate] = useState([]);
  const [currenPage, setCurrenPage] = useState();
  const [hot, setHot] = useState(null);

  const currentPage = useMemo(() => {
    const { pathname } = router;
    debugger;
    if (pathname.includes(appPages["giai-ma-chi-so"].pathname)) {
      return appPages["giai-ma-chi-so"].name;
    }
    if (pathname.includes(appPages["giai-ma-ngay-sinh"].pathname)) {
      return appPages["giai-ma-ngay-sinh"].name;
    }
    if (pathname.includes(appPages["4-giai-doan-dinh-cao-cuoc-doi"].pathname)) {
      return appPages["4-giai-doan-dinh-cao-cuoc-doi"].name;
    }
    router.push("/than-so-hoc/tra-cuu-than-so-hoc");
  }, [router]);

  useEffect(() => {
    if (_.isEmpty(tshUser)) {
      router.push("/than-so-hoc/tra-cuu-than-so-hoc");
    }
  }, [tshUser]);

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
    let cateP = category_child ?? "kien-thuc-than-so-hoc";

    let pageInfo = localStorage.getItem("PAGE_" + cateP) ?? 1;
    if (pageInfo !== currenPage) {
      setCurrenPage(pageInfo);
      setCatePost(cateP);
      getPosts(pageInfo, 0, cateP);
    }
  }, [category_child, element, getPosts]);

  // useEffect(() => {
  //   if (_.isEmpty(tshUser)) {
  //     router.push("/than-so-hoc");
  //   }
  // }, [tshUser]);

  return (
    <>
      <Container>
        <MetaHead {...currentMetaData} />
        {/* <LoaderData size={"big"} showLoad={loadLogin} fixed={true} /> */}
        <AppBreadcrumb />
        <div className={"ads-google"}>
          <LoadGoogleAds slot={5524209637} />
        </div>
        <div id={"blog-content"}>
          <div className={"list_page_iner"}>
            <TongQuan />
            <div className="tshCard">
              {currentPage === appPages["giai-ma-chi-so"].name && (
                <GiaiMaChiSo />
              )}
              {currentPage === appPages["giai-ma-ngay-sinh"].name && (
                <GiaiMaNgaySinhDetail />
              )}
              {currentPage ===
                appPages["4-giai-doan-dinh-cao-cuoc-doi"].name && (
                <GiaiDoanCuocDoiDetail />
              )}
            </div>

            {!listPost.length ? <></> : <OtherNews listPost={listPost} />}
          </div>
          <Widget topPosts={topPosts} context={element} />
        </div>
      </Container>
    </>
  );
};
export default ThanSoHocDetail;
