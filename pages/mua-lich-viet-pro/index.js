import { Inter } from "next/font/google";
import { getTopPosts } from "../../api/apiRequest";
import Posts from "../../components/Posts";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { topPosts } = props;
  return <Posts topPosts={topPosts}></Posts>;
}

export async function getServerSideProps(context) {
  const topPosts = await getTopPosts();

  return {
    props: {
      topPosts,
    },
  };
}
