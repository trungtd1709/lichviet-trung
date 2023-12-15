// import React, { useEffect } from "react";
// import { Breadcrumb } from "antd";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import _ from "lodash";
// import { appPages } from "@/const/const";
// import { pages } from "next/dist/build/templates/app-page";

// const AppBreadcrumb = () => {
//   const router = useRouter();
//   const { asPath } = router;
//   useEffect(() => {
//     console.log(asPath);
//     let pathSegments = _.split(asPath, "/");
//     pathSegments = pathSegments.filter(Boolean); // Remove any empty segments resulting from split
//     pathSegments[0] = "/"; // Assuming you want to always start with root
//     console.log(pathSegments);

//     const breadcrumbData = _.map(pathSegments, (pathSegment, index) => {
//       // Use Object.values to turn your object into an array for _.find
//       const foundPage = pages[pathSegment];
//       debugger
//       if (foundPage) {
//         return {
//           title: <Link href={foundPage.fullPathname}>{foundPage.vnName}</Link>,
//           fullPathname: foundPage.fullPathname,
//           vnName: foundPage.vnName,
//         };
//       }
//       return null;
//     }).filter(Boolean); 

//   }, [asPath]); 

//   return (
//     <Breadcrumb
//       separator=">"
//       items={[
//         {
//           title: (
//             <Link href={"/"} className="breadcrumb-title">
//               Trang chủ
//             </Link>
//           ),
//         },
//         {
//           title: (
//             <Link href={"/"} className="breadcrumb-title">
//               Trang chủ
//             </Link>
//           ),
//           href: "",
//         },
//         {
//           title: (
//             <Link href={"/"} className="breadcrumb-title">
//               Trang chủ
//             </Link>
//           ),
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
