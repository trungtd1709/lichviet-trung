import { systemMetaData } from "@/const/const";

// path là đường dẫn url
export const getSystemMetaData = (path) => {
  const currentMetaData =
    systemMetaData.metaUrl[path] || systemMetaData.default;
  return currentMetaData;
};
