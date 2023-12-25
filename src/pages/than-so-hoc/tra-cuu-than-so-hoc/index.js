import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import './posts.css';
import { CallApiBackend } from "@/api/apiRequest";
import LoadGoogleAds from "@/components/Ads/googleAds";
import { FormThanSoHoc } from "@/components/Login/Form/FormThanSoHoc";
import MetaHead from "@/components/MetaHead";
import { OtherNews } from "@/components/OtherNews";
import Widget from "@/components/Posts/widget";
import { getServerProps } from "@/shared/func";
import { useRouter } from "next/router";

const TraCuuThanSoHoc = (element) => {
  const { currentMetaData, topPosts } = element;
  const [catePost, setCatePost] = useState(null);
  const router = useRouter();
  const { category_child } = router.query;
  const [listPost, setListPost] = useState([]);
  const [currenPage, setCurrenPage] = useState();

  const getPosts = useCallback((page = 0, changePage = 0, cateP = "") => {
    CallApiBackend(
      { slug_category: cateP, page: page },
      "/api/blog/get-posts",
      "GET"
    ).then(function (req) {
      if (req.data.status === 1) {
        let data = req.data.data;
        if (data) {
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
        {/* <LoaderData size={"big"} showLoad={loadLogin} fixed={true} /> */}
        <div className={"ads-google"}>
          <LoadGoogleAds slot={5524209637} />
        </div>
        <div id={"blog-content"}>
          <div className={"list_page_iner"}>
            {/* <form onSubmit={submitThanSoHoc}> */}
            <FormThanSoHoc
            // name={name}
            // onChangeName={onChangeName}
            // onChangeBirthday={onChangeBirthday}
            // birthday={birthday}
            // onBlurBirthday={onBlurBirthday}
            />
            {/* </form> */}
            {!listPost.length ? <></> : <OtherNews listPost={listPost} />}
          </div>
          <Widget topPosts={topPosts} context={element} />
        </div>
      </Container>
    </>
  );
};
export default TraCuuThanSoHoc;

export async function getServerSideProps(context) {
  return await getServerProps(context);
}
