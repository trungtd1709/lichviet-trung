import { systemMetaData } from "@/const/const";
import Head from "next/head";
import { useEffect } from "react";

const MetaHead = (props) => {
  const {
    title = systemMetaData.default.title,
    description = systemMetaData.default.description,
    image = systemMetaData.default.image,
    pageUrl,
    showH1Tag = true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lịch Việt",
              image: "https://lichviet.app/image/logo_lichviet.png",
              "@id": "https://lichviet.app/image/logo_lichviet.png",
              url: "https://lichviet.app/",
              telephone: "0766002689",
              priceRange: "69000 - 800000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Số 10 ngõ 379 Hoàng Hoa Thám",
                addressLocality: "Hà Nội",
                postalCode: "118400",
                addressCountry: "VN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 21.0412014,
                longitude: 105.8150843,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.facebook.com/lichviet.official",
                "https://www.youtube.com/@lichviet.official",
              ],
            }),
          }}
        />
      </Head>
      {showH1Tag && <h1 style={{ display: "none" }}>{title}</h1>}
    </>
  );
};

// Export the component
export default MetaHead;
