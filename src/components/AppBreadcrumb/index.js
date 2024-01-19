import React, { useEffect, useMemo } from "react";
import { Breadcrumb } from "antd";
import { useRouter } from "next/router";
import { appPages } from "@/const/const";
import Link from "next/link";
import _ from "lodash";

const AppBreadcrumb = () => {
  const router = useRouter();
  const { asPath } = router;

  const breadcrumbData = useMemo(() => {
    let pathSegments = _.split(asPath, "/");
    pathSegments = pathSegments;
    pathSegments[0] = "/";

    const data = _.map(pathSegments, (pathSegment, index) => {
      const foundPage = appPages[pathSegment];
      if (foundPage) {
        return {
          title: (
            <Link href={foundPage.fullPathname ?? "/"}>{foundPage.vnName}</Link>
          ),
          fullPathname: foundPage.fullPathname,
          vnName: foundPage.vnName,
        };
      }
      return null;
    }).filter(Boolean);
    return data;
  }, [asPath]);

  return <Breadcrumb separator=">" items={breadcrumbData} />;
};
export default AppBreadcrumb;

// import React, { useEffect } from "react";
// import { Breadcrumb } from "antd";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import _ from "lodash";
// import { appPages } from "@/const/const";
// import { pages } from "next/dist/build/templates/app-page";

// const AppBreadcrumb = () => {
//   // const router = useRouter();
//   // const { asPath } = router;
// useEffect(() => {
//   console.log(asPath);
//   let pathSegments = _.split(asPath, "/");
//   pathSegments = pathSegments.filter(Boolean); // Remove any empty segments resulting from split
//   pathSegments[0] = "/"; // Assuming you want to always start with root
//   console.log(pathSegments);

//   const breadcrumbData = _.map(pathSegments, (pathSegment, index) => {
//     // Use Object.values to turn your object into an array for _.find
//     const foundPage = pages[pathSegment];
//     if (foundPage) {
//       return {
//         title: <Link href={foundPage.fullPathname}>{foundPage.vnName}</Link>,
//         fullPathname: foundPage.fullPathname,
//         vnName: foundPage.vnName,
//       };
//     }
//     return null;
//   }).filter(Boolean);
// }, [asPath]);

//   return (
//     <Breadcrumb
//       separator=">"
//       items={[
//         {
//           title: "Home",
//         },
//         {
//           title: "Application Center",
//           href: "",
//         },
//         {
//           title: "Application List",
//           href: "",
//         },
//         {
//           title: "An Application",
//         },
//       ]}
//     />
//   );
// };
// export default AppBreadcrumb;
