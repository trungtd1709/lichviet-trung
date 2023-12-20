
import { getTopPosts } from "../api/apiRequest";
import { getSystemMetaData } from "./utils";

export const getServerProps = async (context) => {
  try {
    const path = context.resolvedUrl;
    // Fetch system metadata based on the current path
    const currentMetaData = await getSystemMetaData(path);
    // Fetch top posts
    const topPosts = await getTopPosts();

    return {
      props: {
        currentMetaData,
        topPosts,
      },
    };
  } catch (error) {
    console.error("Error in getServerProps:", error);
    return { props: { error: "Error fetching data" } };
  }
};
