import { fetchServicesList } from "@/api/apiRequest";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const LichVietProServices = () => {
  const router = useRouter();
  const baseUrlImg = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;

  const [proServicesData, setProServicesData] = useState([]);

  useEffect(() => {
    const getServicesList = async () => {
      const data = await fetchServicesList();
      console.log("[data]:", data);
      setProServicesData(data);
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
            const { icon } = proService;
            return (
              <img
                key={index}
                className="img-lich-viet-pro-services"
                src={baseUrlImg + icon}
                onClick={() => {
                  moveRoute("/lich-van-nien/chon-ngay-tot");
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
