import { Breadcrumb } from "antd";
import _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { appPages } from "../../const/const";

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