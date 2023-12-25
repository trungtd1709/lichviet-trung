import { imgSrc } from "@/const/AppResource";
import _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import IconDownloadAppStore from "../../../../public/icons/IconDownloadAppStore";
import IconDownloadGooglePlay from "../../../../public/icons/IconDownloadGooglePlay";

export const ThanSoHocTextContent = (props) => {
  const { data } = props;
  const router = useRouter();

  const highlightText = useMemo(() => {
    console.log(data);
    if (!_.isEmpty(data)) {
      const tempHighlightText = _.map(data, (item, index) => {
        const { title, content } = item;
        console.log("[content]:", content);
        const regex = /●(.*?)(?=\n)/g;

        const newContent = content.replace(regex, (match, p1) => {
          console.log("[match]:", match);
          return `<span class="highlightText">${p1}</span>`;
        });
        console.log("[newContent]:", newContent);
        return { title, content: newContent };
      });

      return tempHighlightText;
    } else {
      return [];
    }
  }, [data]);

  // const thanSoHocData = useSelector((state) => state.thanSoHoc);

  // const data = useMemo(() => {
  //   const { pathname } = router;
  //   if (pathname.includes(appPages.giaiMaChiSo.pathname)) {
  //     return thanSoHocData.conSoData;
  //   }
  //   if (pathname.includes(appPages.giaiMaNgaySinh.pathname)) {
  //     return thanSoHocData.giaiMaNgaySinh.birthday.data;
  //   }
  //   if (pathname.includes(appPages.giaiDoanCuocDoi.pathname)) {
  //     return thanSoHocData.giaiDoanCuocDoi.data;
  //   }
  //   return {};
  // }, [router]);

  return (
    <>
      {highlightText?.map((item, index) => {
        return (
          <>
            {" "}
            <div key={index} className="chi-tiet-than-so-hoc-title">
              {item?.title}
            </div>
            <div
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: item?.content }}
            />
            {/* <span
              style={{ whiteSpace: "pre-wrap" }}
              className="chi-tiet-than-so-hoc-content"
            >
              {item?.content}
            </span> */}
          </>
        );
      })}
      <div className="d-flex flex-column mt-5">
        <span >
          Để xem chi tiết ý nghĩa con số, bạn vui lòng quét mã QR tải ứng dụng
          Lịch Việt trên App Store và Google Play dưới đây nhé
        </span>
        <div
          id={"download-app-container"}
          className=" px-0 align-items-center"
        >
          <img id={"download-app-qr"} src={imgSrc.lichVietQr} />
          <div id={"download-app"}>
            <Link
              href="https://itunes.apple.com/app/id585253443?mt=8"
              target="_blank"
              rel="noreferrer"
            >
              <IconDownloadAppStore />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.somestudio.lichvietnam"
              target="_blank"
              rel="noreferrer"
            >
              <IconDownloadGooglePlay />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
