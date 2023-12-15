import { appPages } from "@/const/const";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const ThanSoHocTextContent = (props) => {
  const { data } = props;
  const router = useRouter();
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
      {data?.map((item, index) => {
        return (
          <>
            {" "}
            <div key={index} className="chi-tiet-than-so-hoc-title">{item?.title}</div>
            <div className="chi-tiet-than-so-hoc-content">{item?.content}</div>
          </>
        );
      })}
    </>
  );
};
