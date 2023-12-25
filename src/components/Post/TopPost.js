import { CallApiBackend } from "@/api/apiRequest";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import Card from "../../layout/Card/Card";
import CardImage from "../../layout/Card/CardImage";
import TitleHeader from "../Title";
import LoaderData from "../Ui/Loader";
import Link from "next/link";

export default function TopPost({ marginTop = 40, topPosts = [] }) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    // CallApiBackend(
    //   {},
    //   "/api/blog/get-posts?home_page=1&slug_category=nhieu-nguoi-doc",
    //   "GET"
    // ).then((req) => {
    //   setLoad(false);
    //   if (req?.data?.status === 1) {
    //     const finalData = [req.data.data.hot]
    //       .concat(req.data.data.list)
    //       .slice(0, 4);
    //     setData(finalData);
    //   }
    // });
  }, []);
  return (
    <>
      <Card setTitle={false} top={marginTop}>
        <div className={"ml-1 title-header"} style={{ paddingLeft: "10px" }}>
          <TitleHeader title={"Nhiều người đọc"} isShowMore={false} />
        </div>
        <LoaderData size={"small"} showLoad={load} fixed={false} />
        <Stack>
          {topPosts.map((item, key) => (
            <Link href={"/" + item?.slug} key={key}>
              <CardImage content={item?.title} url={item?.image} />
            </Link>
          ))}
        </Stack>
      </Card>
    </>
  );
}
