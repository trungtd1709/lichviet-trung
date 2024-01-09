import { getBanners, getTopPosts } from "@/api/apiRequest";
import LoadGoogleAds from "@/components/Ads/googleAds";
import CalendarScreen from "@/components/Calendar/CalendarScreen";
import MetaHead from "@/components/MetaHead";
import { LichVietProServices } from "@/components/NangCapLichVietPro/LichVietProServices";
import { NangCapProContact } from "@/components/NangCapLichVietPro/NangCapProContact";
import CungHoangDaoPost from "@/components/Post/CungHoangDaoPost";
import Info from "@/components/Post/Info";
import TopPost from "@/components/Post/TopPost";
import TuViPost from "@/components/Post/TuViPost";
import { imgSrc } from "@/const/AppResource";
import Banners from "@/layout/Banners/banner";
import Card from "@/layout/Card/Card";
import { Col, Container, Row } from "react-bootstrap";

export default function Home({
  topPosts = [],
  banners = [],
  // conSoMayManHomNayPosts = [],
  // giaiMaGiacMoPosts = [],
}) {
  return (
    <>
      <MetaHead />
      <Container className="mt-4">
        <img src={imgSrc.muaLichVietProBanner} className="w-100" />
        <LichVietProServices />
        <div>
          <NangCapProContact />
        </div>
      </Container>
    </>
  );
}

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
