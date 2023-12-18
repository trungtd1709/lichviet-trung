import { useCallback, useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import './posts.css';
import { CallApiBackend, getTopPosts } from "@/api/apiRequest";
import LoadGoogleAds from "@/components/Ads/googleAds";
import { FormThanSoHoc } from "@/components/Login/Form/FormThanSoHoc";
import MetaHead from "@/components/MetaHead";
import Widget from "@/components/Posts/widget";
import ThanSoHocResult from "@/components/ThanSoHocResult";
import { setAppLoading } from "@/redux/slices/appSlice";
import {
  setTshUser,
  thunkGetGiaiDoanCuocDoiData,
  thunkGetGiaiMaNgaySinhData,
  thunkGetThanSoHocData,
} from "@/redux/slices/thanSoHocSlice";
import {
  dayjsObjToString,
  formatDate,
  getDayjsObj,
  getSystemMetaData,
  isDayjsDateValid,
} from "@/shared/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import moment from "moment";
import { AuthContext } from "@/context/authContext";
import _ from "lodash";

const ThanSoHoc = (element) => {
  const { currentMetaData, topPosts } = element;
  const dispatch = useDispatch();
  const { userData, userLogout } = useContext(AuthContext);

  const [catePost, setCatePost] = useState(null);
  const [loadLogin, setLoad] = useState(false);
  const [name, setName] = useState(null);
  const [birthday, setBirthday] = useState();
  const router = useRouter();
  const { category_child } = router.query;
  const [listPost, setListPost] = useState([]);
  const [paginate, setPaginate] = useState([]);
  const [currenPage, setCurrenPage] = useState();
  const [hot, setHot] = useState(null);

  useEffect(() => {
    if (!_.isEmpty(userData)) {
      setName(userData?.full_name ?? null);
      console.log(userData?.birthday);
      const userDataBirthday = getDayjsObj(
        userData?.birthday,
        "YYYY-MM-DD HH:mm:ss"
      );
      debugger;
      setBirthday(userDataBirthday);
    }
  }, [userData]);

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

  const onChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const onChangeBirthday = (date, dateString) => {
    // const dateFormatted = getDayjsObj(dateString)
    setBirthday(date);
    // debugger;
  };

  const onBlurBirthday = (e) => {
    const currentDate = e.target.value;
    if (isDayjsDateValid(currentDate)) {
      const birthdayValue = getDayjsObj(e.target.value);
      // debugger
      setBirthday(birthdayValue);
    } else {
      setBirthday(null);
    }

    // if (birthdayValue.isValid()) {
    //   setBirthday(birthdayValue);
    // } else {
    //   console.log("Invalid date entered");
    //   setBirthday(null);
    // }
  };

  const submitThanSoHoc = async (e) => {
    e.preventDefault(e);
    console.log(birthday);
    if (!name) {
      alert("Bạn chưa nhập họ tên!");
      return;
    }
    if (!birthday) {
      alert("Bạn chưa nhập ngày sinh!");
      return;
    } else {
      // setLoad(true);
      dispatch(setAppLoading(true));
      try {
        const birthdayDate = dayjsObjToString(birthday);
        const params = { name, birthday: birthdayDate };
        // const giaiMaChiSoData = await getTSHTopics(params);
        await dispatch(setTshUser(params));
        await dispatch(thunkGetThanSoHocData(params));
        await dispatch(thunkGetGiaiDoanCuocDoiData(params));
        await dispatch(thunkGetGiaiMaNgaySinhData(params));
        // const giaiMaNgaySinhData = await getTSHDetail({ ...params, type: "6" });
        // const giaiDoanCuocDoiData = await getTSHDetail({
        //   ...params,
        //   type: "7",
        // });
        // setThanSoHocResult((prevData) => ({
        //   ...prevData,
        //   giaiMaChiSoData: giaiMaChiSoData,
        //   giaiMaNgaySinhData: giaiMaNgaySinhData,
        //   giaiDoanCuocDoiData: giaiDoanCuocDoiData,
        // }));
        router.push("/than-so-hoc/tra-cuu");
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(setAppLoading(false));
      }
    }
  };

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
            {!listPost.length && !hot ? (
              <></>
            ) : (
              <div>
                <form onSubmit={submitThanSoHoc}>
                  <FormThanSoHoc
                    name={name}
                    onChangeName={onChangeName}
                    onChangeBirthday={onChangeBirthday}
                    birthday={birthday}
                    onBlurBirthday={onBlurBirthday}
                  />
                </form>
                {/* <ThanSoHocResult /> */}
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
