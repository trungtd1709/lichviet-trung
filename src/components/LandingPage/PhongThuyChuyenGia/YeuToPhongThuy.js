//
//

export const YeuToPhongThuy = () => {
  return (
    <div className="row px-3 mx-0">
      {data.map((item, key) => {
        return <YeuToPhongThuyItem key={key} item={item} />;
      })}
    </div>
  );
};

const YeuToPhongThuyItem = ({ item }) => {
  const { header, content } = item;
  return (
    <div className="d-flex flex-column col-md-6 pl-0">
      <div
        className="px-2 py-1"
        style={{
          backgroundColor: "#E4EBEA",
          borderTopRightRadius: "8px",
          borderTopLeftRadius: "8px",
        }}
      >
        <span style={{ color: "#2B6156", fontSize: "23px" }}>{header}</span>
      </div>
      <YeuToPhongThuyContent content={content}/>
    </div>
  );
};

const YeuToPhongThuyContent = ({ content = [] }) => {
  return (
    // <div className="d-flex flex-column">
    <ul
      className="d-flex flex-column pl-3"
      style={{ color: "#253026", fontSize: "20px" }}
    >
      {content.map((itemContent, key) => {
        return <li key={key}>{itemContent}</li>;
      })}
    </ul>
    // </div>
  );
};

const data = [
    {
        header: "Phân tích tổng thể TRẠCH ĐẤT",
        content: [
            "Đánh giá các yếu tố phong thủy đại cục tổng quan của long mạch, trạch đất",
            "Đánh giá “Ngoại khí” – “Nội Khí” của căn nhà để được tiếp khí sinh vượng",
            "Tư vấn lập phương hướng các công trình đắc phong thủy và hợp tuổi"
        ]
    },
    {
        header: "Phân tích tổng thể Động thổ, BỒI HOÀN LONG MẠCH, TRẦN TRẠCH",
        content: [
            "Tư vấn ngày đẹp động thổ, ngày trấn trạch, chọn tuổi động thổ để vượng trạch đất",
            "Tư vấn phương án bồi hoàn long mạch, trấn trạch, kích vận khí cho trạch đất của gia chủ"
        ]
    },
    {
        header: "Hướng dẫn xây dựng MỘ PHẦN GIA TIÊN HỢP PHONG THỦY",
        content: [
            "Tư vấn ngày đẹp động thổ, ngày trấn trạch, chọn tuổi động thổ để vượng trạch đất",
            "Tư vấn phương án bồi hoàn long mạch, trấn trạch, kích vận khí cho trạch đất của gia chủ"
        ]
    },
    {
        header: "Phân tích tổng thể NHÂN KHÍ",
        content: [
            "Tính toán nhân mệnh, thời điểm thịnh suy, nên làm, không nên làm của gia chủ",
            "Xác định phương hướng tốt với ngày sinh gia chủ",
            "Phân tích khuôn nhà của bạn để đưa ra các vị trí tốt, tránh các vị trí xấu",
            "Đánh giá mối quan hệ của các thành viên trong gia đình và phương pháp phong thủy hóa giải"
        ]
    },
    {
        header: "Hướng dẫn thiết kế, sửa sang, bố trí các phòng của nhà ở sao cho HỢP PHONG THỦY",
        content: [
            "Đánh giá độ tốt xấu về mặt phong thủy trong cách bố trí các phòng",
            "Tư vấn cách bố trí bàn thờ, phòng ngủ, phòng bếp, phòng làm việc, cửa ra vào",
            "Phân tích các vật phẩm phong thủy, cây cảnh tốt cho ngôi nhà của bạn"
        ]
    }
];