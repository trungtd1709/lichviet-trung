import { imgSrc } from "@/const/AppResource";
import { useRouter } from "next/router";

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
            <div key={index} className="chi-tiet-than-so-hoc-title">
              {item?.title}
            </div>
            <span
              style={{ whiteSpace: "pre-wrap" }}
              className="chi-tiet-than-so-hoc-content"
            >
              {item?.content}
            </span>
          </>
        );
      })}
      <div className="d-flex flex-column mt-5">
        <a target="blank" href="https://onelink.to/nh298f">Mở ứng dụng Lịch Việt để biết thêm thông tin chi tiết:</a>
        <img style={{width:'150px',marginTop:'10px'}} src={imgSrc.lichVietQr} />
      </div>
    </>
  );
};
