import { getBanners, getTopPosts } from "@/api/apiRequest";
import LoadGoogleAds from "@/components/Ads/googleAds";
import CalendarScreen from "@/components/Calendar/CalendarScreen";
import MetaHead from "@/components/MetaHead";
import CungHoangDaoPost from "@/components/Post/CungHoangDaoPost";
import Info from "@/components/Post/Info";
import TopPost from "@/components/Post/TopPost";
import TuViPost from "@/components/Post/TuViPost";
import Banners from "@/layout/Banners/banner";
import Card from "@/layout/Card/Card";
import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Home({
  topPosts = [],
  banners = [],
  // conSoMayManHomNayPosts = [],
  // giaiMaGiacMoPosts = [],
}) {
  const element = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (element.current) {
      setWidth(element.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <>
      <MetaHead />
      <Container>
        <div className={"banner"}>
          <Banners banners={banners} />
        </div>
        <Row>
          <Col lg={8} sm xl={8} className="pr-lg-3 m-xs-0 p-xs-0">
            <section className={"px-2 px-md-0"}>
              <div style={{ marginTop: 48, padding: "0 5px" }}>
                <CalendarScreen />
              </div>
            </section>
            <article>
              <Card
                title="Kiến thức tử vi"
                isShowMore={"/tu-vi/kien-thuc-tu-vi"}
                top={30}
              >
                <TuViPost md={7} category={"kien-thuc-tu-vi"} />
              </Card>
              <Card
                title="Kiến thức phong thuỷ"
                isShowMore={"/phong-thuy/kien-thuc-phong-thuy"}
                top={30}
              >
                <TuViPost
                  md={7}
                  category={"kien-thuc-phong-thuy"}
                  delay={800}
                />
              </Card>
              <Card
                // title="Cung Hoàng Đạo"
                title="Kiến thức thần số học"
                // isShowMore={"/cung-hoang-dao/mat-ngu-chom-sao"}
                isShowMore={"/than-so-hoc/kien-thuc-than-so-hoc"}
                top={30}
                id={"post-cung-hoang-dao"}
              >
                {/* <CungHoangDaoPost category={"mat-ngu-chom-sao"} delay={1000} /> */}
                <CungHoangDaoPost
                  category={"kien-thuc-than-so-hoc"}
                  delay={1000}
                />
              </Card>
              <Container style={{ padding: 0, position: "relative" }}>
                <Row style={{ width: "100%", margin: 0 }}>
                  <Col md={6} xs={12} className={"pl-0 pr-2 p-xs-0"}>
                    <Card
                      // title="Con Số May Mắn"
                      title="Mật ngữ chòm sao"
                      // isShowMore={"/tu-vi/con-so-may-man-hom-nay"}
                      isShowMore={"/cung-hoang-dao/mat-ngu-chom-sao"}
                    >
                      <TuViPost
                        md={12}
                        borderTopFirstChild={1}
                        category={"mat-ngu-chom-sao"}
                        delay={4000}
                      />
                    </Card>
                  </Col>
                  <Col md={6} xs={12} className={"pr-0 pl-2 p-xs-0"}>
                    <Card
                      title="Giải Mã Giấc Mơ"
                      isShowMore={"/tien-ich-hay/giai-ma-giac-mo"}
                    >
                      <TuViPost
                        md={12}
                        borderTopFirstChild={1}
                        category={"giai-ma-giac-mo"}
                        delay={4400}
                      />
                    </Card>
                  </Col>
                </Row>
              </Container>
            </article>
          </Col>
          <Col lg={4} xl={4} className="pl-xl-3 p-xs-0">
            <aside>
              {/* <div ref={element} className={"top-post-list"}> */}
              <div ref={element} >
                <TopPost topPosts={topPosts} />
              </div>
              <div>
                <Info />{" "}
              </div>
              <div
                style={{
                  margin: "20px 0 0 0",
                  width: "100%",
                  position: "relative",
                }}
                className={"p-0"}
              >
                <LoadGoogleAds slot={3089617988} />
              </div>
              <div
                style={{
                  margin: "20px 0 0 0",
                  width: "100%",
                  position: "relative",
                }}
                className={"p-0"}
              >
                <LoadGoogleAds slot={3780717276} />
              </div>
              <div
                style={{
                  margin: "20px 0 0 0",
                  width: "100%",
                  position: "relative",
                }}
                className={"p-0"}
              >
                {/*{width && <FaceBookFanpage width={width} height={600}/>}*/}
              </div>
            </aside>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// export async function getStaticProps() {
//
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export async function getServerSideProps(context) {
  const topPosts = await getTopPosts();
  const banners = await getBanners();

  return {
    props: {
      topPosts,
      banners,
    },
  };
}
