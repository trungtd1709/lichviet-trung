import { CallApiBackend } from "@/api/apiRequest";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import Card from "../../layout/Card/Card";
import CardImage from "../../layout/Card/CardImage";
import TitleHeader from "../Title";
import LoaderData from "../Ui/Loader";

export default function TopPost({ marginTop = 40 }) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    CallApiBackend(
      {},
      "/api/blog/get-posts?home_page=1&slug_category=nhieu-nguoi-doc",
      "GET"
    ).then((req) => {
      setLoad(false);
      if (req?.data?.status === 1) {
        const finalData = [req.data.data.hot]
          .concat(req.data.data.list)
          .slice(0, 4);
        setData(finalData);
      }
    });
  }, []);
  return (
    <>
      <Card setTitle={false} top={marginTop}>
        <div className={"title-header"}>
          <TitleHeader title={"Nhiều người đọc"} isShowMore={false} />
        </div>
        <LoaderData size={"small"} showLoad={load} fixed={false} />
        <Stack>
          {data.map((item, key) => (
            <a href={"/" + item?.slug} key={key}>
              <CardImage content={item?.title} url={item?.image} />
            </a>
          ))}
        </Stack>
      </Card>
    </>
  );
}
