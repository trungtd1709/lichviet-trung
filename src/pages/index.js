import LoadGoogleAds from "@/components/Ads/googleAds";
import CalendarScreen from "@/components/Calendar/CalendarScreen";
import MetaHead from "@/components/MetaHead";
import CungHoangDaoPost from "@/components/Post/CungHoangDaoPost";
import Info from "@/components/Post/Info";
import TopPost from "@/components/Post/TopPost";
import TuViPost from "@/components/Post/TuViPost";
import Banners from "@/layout/Banners/banner";
import Card from "@/layout/Card/Card";
import { Inter } from "next/font/google";
import { Col, Container, Row } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home(
  {
    // kienThucTuViPosts = [],
    // kienThucPhongThuyPosts = [],
    // conSoMayManHomNayPosts = [],
    // giaiMaGiacMoPosts = [],
  }
) {
  return (
    <>
      <MetaHead />
      <Container>
        <div className={"banner"}>
          <Banners />
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
                title="Tử Vi"
                isShowMore={"/tu-vi/kien-thuc-tu-vi"}
                top={30}
              >
                <TuViPost md={7} category={"kien-thuc-tu-vi"} delay={600} />
              </Card>
              <Card
                title="Phong Thuỷ"
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
                title="Cung Hoàng Đạo"
                isShowMore={"/cung-hoang-dao/mat-ngu-chom-sao"}
                top={30}
                id={"post-cung-hoang-dao"}
              >
                <CungHoangDaoPost category={"mat-ngu-chom-sao"} delay={1000} />
              </Card>
              <Container style={{ padding: 0, position: "relative" }}>
                <Row style={{ width: "100%", margin: 0 }}>
                  <Col md={6} xs={12} className={"pl-0 pr-2 p-xs-0"}>
                    <Card
                      title="Con Số May Mắn"
                      isShowMore={"/tu-vi/con-so-may-man-hom-nay"}
                    >
                      <TuViPost
                        md={12}
                        borderTopFirstChild={1}
                        category={"con-so-may-man-hom-nay"}
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
              <div>
                <TopPost />
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
  return {
    props: {},
  };
}
