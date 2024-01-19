import { getPostDetail, getTopPosts } from "@/api/apiRequest";
import PostsDetail from "@/components/Posts/detail";

export default function Detail(props) {
  const { postData = {}, topPosts = [], pageUrl } = props;
  // const { item } = postData;

  return (
    <PostsDetail
      pageUrl={pageUrl}
      topPosts={topPosts}
      postData={postData}
      category={"tu-vi-hang-ngay"}
    />
  );
}

export async function getServerSideProps(context) {
  const { params, req } = context;
  const { slug_post } = params;
  const postData = await getPostDetail(slug_post);
  const topPosts = await getTopPosts();
  // console.log("[slug_post]:", slug_post);
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const baseUrl = req ? `${protocol}://${req.headers.host}/` : "";
  const pageUrl = baseUrl + slug_post;
  console.log("[pageUrl]:", pageUrl);

  return {
    props: {
      postData,
      pageUrl,
      topPosts,
    },
  };
}
