import Head from "next/head";
import { useEffect } from "react";
import { systemMetaData } from "../../const/const";

const MetaHead = (props) => {
  const {
    title = systemMetaData.default.title,
    description = systemMetaData.default.description,
    image = systemMetaData.default.image,
    pageUrl,
    showH1Tag = true
  } = props;

  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} key="title" />
        <meta name="description" content={description} key="desc" />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={pageUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:url" content={pageUrl} />
        <meta name="image" content={image} />
        <meta
          name="Keywords"
          content="Tử vi, Phong thủy, Lịch Vạn Niên, Lịch Việt, Ứng dụng Lịch Việt"
        />
        <meta name="google" content="nositelinkssearchbox" />
      </Head>
      {showH1Tag && <h1 style={{ display: "none" }}>{title}</h1>} 
    </>
  );
};

// Export the component
export default MetaHead;
