import { fetchServicesList } from "@/api/apiRequest";
import { apiListServicesReponseExample } from "@/const/const";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const LichVietProServices = () => {
  const router = useRouter();
  const baseUrlImg = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;

  const [proServicesData, setProServicesData] = useState([]);

  useEffect(() => {
    const getServicesList = async () => {
      const allServices = await fetchServicesList();
      if (_.isEmpty(allServices)) {
        alert(
          "Có lỗi khi lấy thông tin các gói Pro, vui lòng reload lại trang hoặc đăng nhập lại"
        );
      } else {
        setProServicesData(allServices);
      }
    };
    getServicesList();
  }, []);

  const moveRoute = (url) => {
    router.push(url);
  };

  return (
    <div className="d-flex flex-column mt-4">
      <span className="nang-cap-pro-title">Các gói Lịch Việt Pro</span>
      <div className="nang-cap-pro-card">
        <div className="img-lich-viet-pro-services-container">
          {proServicesData.map((proService, index) => {
            const { icon, show_in_service_block, link } = proService;
            // const urlString = "lichviet://?screen=chon_ngay_tot";
            const url = new URL(link, "http://example.com");
            const screenPath = url.searchParams.get("screen");
            
            return (
              show_in_service_block === "1" && (
                <img
                  key={index}
                  className="img-lich-viet-pro-services"
                  src={baseUrlImg + icon}
                  onClick={() => {
                    moveRoute(`/lich-van-nien/${screenPath}`);
                  }}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};
