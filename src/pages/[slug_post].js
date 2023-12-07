import { getPostDetail } from "@/api/apiRequest";
import PostsDetail from "@/components/Posts/detail";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Detail(props) {
  const { postData = {}, pageUrl } = props;
  // const { item } = postData;

  return (
    <PostsDetail
      pageUrl={pageUrl}
      postData={postData}
      category={"tu-vi-hang-ngay"}
    />
  );
}

export async function getServerSideProps(context) {
  const { params, req } = context;
  const { slug_post } = params;
  const postData = await getPostDetail(slug_post);
  console.log("[slug_post]:", slug_post);
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const baseUrl = req ? `${protocol}://${req.headers.host}/` : "";
  const pageUrl = baseUrl + slug_post;
  console.log("[pageUrl]:", pageUrl);

  return {
    props: {
      postData,
      pageUrl,
    },
  };
}
