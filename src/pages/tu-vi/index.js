import { getTopPosts } from "@/api/apiRequest";
import Posts from "@/components/Posts";
import { getSystemMetaData } from "@/shared/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { currentMetaData, topPosts } = props;
  return (
    <Posts
      category={"tu-vi"}
      topPosts={topPosts}
      currentMetaData={currentMetaData}
    />
  );
}

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
