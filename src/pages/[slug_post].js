import { getPostDetail } from "@/api/apiRequest";
import PostsDetail from "@/components/Posts/detail";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Detail(props) {
  const { postData = null } = props;
  return <PostsDetail postData={postData} category={"tu-vi-hang-ngay"} />;
}

export async function getServerSideProps(context) {
  const { slug_post } = context.params;
  const postData = await getPostDetail(slug_post);

  return {
    props: {
      postData,
    },
  };
}
