import TitleHeader from "@/components/Title";
import ConSo from "./ConSo";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTSHDetail } from "@/api/apiRequest";
import { useRouter } from "next/router";
import MoveLeftButton from "@/components/Buttons/MoveLeftButton";
import MoveRightButton from "@/components/Buttons/MoveRightButton";
import ImgChiSo from "./ImgChiSo";

const Banner = () => {
  return <div className=""></div>;
};

const GiaiMaChiSo = (props) => {
  const [conSoData, setConSoData] = useState([]);
  const router = useRouter();
  const { type } = router.query;
  const [currentType, setCurrentType] = useState(parseInt(type));
  const { tshUser } = useSelector((state) => state.thanSoHoc);

  const fetchConSoData = async (conSoType) => {
    if (tshUser && conSoType) {
      const res = await getTSHDetail({ ...tshUser, type: conSoType });

      if (res) {
        setConSoData(res);
      }
    }
  };

  useEffect(() => {
    fetchConSoData(currentType);
  }, [currentType]);

  const handleIncreaseType = () => {
    if (currentType >= 5) {
      return;
    }
    setCurrentType(currentType + 1);
  };

  const handleDecreaseType = () => {
    if (currentType <= 1) {
      return;
    }
    setCurrentType(currentType - 1);
  };

  return (
    <div className="chi-tiet-con-so" style={{ marginBottom: "35px" }}>
      <ImgChiSo
        handleIncreaseType={handleIncreaseType}
        handleDecreaseType={handleDecreaseType}
      />

      {conSoData?.map((item, index) => {
        return (
          <>
            {" "}
            <div key={index} className="chi-tiet-con-so-title">
              {item?.title}
            </div>
            <div key={index} className="chi-tiet-con-so-content">
              {item?.content}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default GiaiMaChiSo;
