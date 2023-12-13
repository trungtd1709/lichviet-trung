import TitleHeader from "@/components/Title";
import ConSo from "./ConSo";

const { imgSrc } = require("@/const/AppResource");

const sampleData = [
  {
    title: "Số chủ đạo",
    type: 1,
    so: "5",
    icon: "",
    screen_name: "SoChuDao",
  },
  {
    title: "Con số phản ứng",
    type: 2,
    so: "8",
    icon: "",
    screen_name: "SoPhanUng",
  },
  {
    title: "Con số vận mệnh",
    type: 3,
    so: "6",
    icon: "",
    screen_name: "SoVanMenh",
  },
  {
    title: "Con số linh hồn",
    type: 4,
    so: "3",
    icon: "",
    screen_name: "SoLinhHon",
  },
  {
    title: "Con số thể hiện",
    type: 5,
    so: "3",
    icon: "",
    screen_name: "SoTheHien",
  },
  {
    title: "Giải mã ngày sinh",
    type: 6,
    so: "",
    icon: "https://cdn.lichviet.org/upload/lichviet/2023-09/21/images/1695279387_BynUz.png",
    screen_name: "GiaiMaNS",
  },
  {
    title: "4 Giai đoạn cuộc đời",
    type: 7,
    so: "",
    icon: "https://cdn.lichviet.org/upload/lichviet/2023-09/21/images/1695279428_qa8lv.png",
    screen_name: "4DinhCao",
  },
];

const GiaiMaCacChiSo = () => {
  return (
    <div style={{ marginBottom: "35px" }}>
      <TitleHeader title={"GIẢI MÃ CÁC CHỈ SỐ"} />
      <div className="d-flex flex-row justify-content-between">
        {sampleData.map((item, index) => {
          const { title, so } = item;
          if (so) {
            return <ConSo title={title} so={so} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default GiaiMaCacChiSo;
