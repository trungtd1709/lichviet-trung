import { imgSrc } from "@/const/AppResource";

export const LichVietProServices = () => {
  return (
    <div className="d-flex flex-column mt-5">
      <span style={{ fontSize: "24px", fontWeight: "600", color: "#2F281E" }}>
        Các gói Lịch Việt Pro
      </span>
      <div className="nang-cap-pro-card">
        <div className="img-lich-viet-pro-services-container">
          <img
            className="img-lich-viet-pro-services"
            src={imgSrc.nangCapChonNgayTot}
          />
          <img
            className="img-lich-viet-pro-services"
            src={imgSrc.nangCapXemNgayTotChuyenGia}
          />
          <img
            className="img-lich-viet-pro-services"
            src={imgSrc.nangCapGiaiMaNgaySinh}
          />
          <img
            className="img-lich-viet-pro-services"
            src={imgSrc.nangCapXemPhongThuy}
          />
        </div>
        <div className="img-lich-viet-pro-services-container">
          <img
            className="img-lich-viet-pro-services"
            src={imgSrc.nangCapGieoQueHoiViec}
          />
          <img
            className="img-lich-viet-pro-services"
            src={imgSrc.nangCapXemTuVi}
          />
          <img
            className="img-lich-viet-pro-services"
            src={imgSrc.nangCapXemTuViChuyenGia}
          />{" "}
          <img
            className="img-lich-viet-pro-services"
            src={imgSrc.nangCapTronBoLichViet}
          />
        </div>
      </div>
    </div>
  );
};
