import { CallApiBackend, getTopPosts } from "@/api/apiRequest";
import LoadGoogleAds from "@/components/Ads/googleAds";
import MetaHead from "@/components/MetaHead";
import Widget from "@/components/Posts/widget";
import GiaiMaChiSo from "@/components/ThanSoHocResult/components/GiaiMaChiSo";
import ThanSoHocDetail from "@/components/ThanSoHocResult/components/ThanSoHocDetail";
import { TongQuan } from "@/components/ThanSoHocResult/components/TongQuan";
import { getSystemMetaData } from "@/shared/utils";
import _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ThanSoHoc = (element) => {
  const { currentMetaData, topPosts } = element;

  const { tshUser } = useSelector((state) => state.thanSoHoc);

  const router = useRouter();

  useEffect(() => {
    if (_.isEmpty(tshUser)) {
      router.push("/than-so-hoc");
    }
  }, [tshUser]);

  return <ThanSoHocDetail {...element} />;
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
