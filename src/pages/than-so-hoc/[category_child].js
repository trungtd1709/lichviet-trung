import Posts from "@/components/Posts";
import { getSystemMetaData } from "@/shared/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { currentMetaData } = props;
  return <Posts currentMetaData={currentMetaData} />;
}

export async function getServerSideProps(context) {
  const path = context.resolvedUrl;
  console.log("[path]:", path);
  const currentMetaData = getSystemMetaData(path);

  return {
    props: {
      currentMetaData,
    },
  };
}
