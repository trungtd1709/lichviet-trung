import { getServerProps } from "../../shared/func";
import Posts from "../../components/Posts";

export default function Home(props) {
  const { currentMetaData, topPosts } = props;
  return <Posts topPosts={topPosts} currentMetaData={currentMetaData} />;
}

export async function getServerSideProps(context) {
  return await getServerProps(context);
}
