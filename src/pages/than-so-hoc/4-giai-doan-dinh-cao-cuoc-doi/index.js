import { getTopPosts } from "@/api/apiRequest";
import ThanSoHocDetail from "@/components/ThanSoHocResult/components/ThanSoHocDetail";
import { getSystemMetaData } from "@/shared/utils";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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
