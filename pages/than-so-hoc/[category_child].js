import Posts from "../../components/Posts";
import { getServerProps } from "../../shared/func";


export default function Home(props) {
  const { currentMetaData, topPosts } = props;
  return <Posts topPosts={topPosts} currentMetaData={currentMetaData} />;
}

export async function getServerSideProps(context) {
  return await getServerProps(context);
}

