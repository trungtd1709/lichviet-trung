import { imgSrc } from "@/const/AppResource";
import { useRouter } from "next/router";

const ImgLichVietProService = ({ src, onClick }) => {
  return (
    <img onClick={onClick} className="img-lich-viet-pro-services" src={src} />
  );
};

export const LichVietProServices = () => {
  const router = useRouter();

  const moveRoute = (url) => {
    router.push(url);
  };

  return (
    <div className="d-flex flex-column mt-4">
      <span className="nang-cap-pro-title">Các gói Lịch Việt Pro</span>
      <div className="nang-cap-pro-card">
        <div className="img-lich-viet-pro-services-container">
          <ImgLichVietProService
            src={imgSrc.nangCapChonNgayTot}
            onClick={() => {
              moveRoute("/lich-van-nien/chon-ngay-tot");
            }}
          />
          <ImgLichVietProService src={imgSrc.nangCapXemNgayTotChuyenGia} />
          <ImgLichVietProService src={imgSrc.nangCapGiaiMaNgaySinh} />
          <ImgLichVietProService src={imgSrc.nangCapXemPhongThuy} />
          <ImgLichVietProService src={imgSrc.nangCapGieoQueHoiViec} />
          <ImgLichVietProService src={imgSrc.nangCapXemTuVi} />
          <ImgLichVietProService src={imgSrc.nangCapXemTuViChuyenGia} />
          <ImgLichVietProService src={imgSrc.nangCapTronBoLichViet} />
        </div>
      </div>
    </div>
  );
};
