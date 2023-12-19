import { getTopPosts } from "@/api/apiRequest";
import Posts from "@/components/Posts";
import { getServerProps } from "@/shared/func";
import { getSystemMetaData } from "@/shared/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { currentMetaData, topPosts } = props;
  return <Posts topPosts={topPosts} currentMetaData={currentMetaData} />;
}

export async function getServerSideProps(context) {
  return await getServerProps(context);
}
