import TitleHeader from "@/components/Title";
import ConSo from "./ConSo";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getTSHDetail } from "@/api/apiRequest";
import { useRouter } from "next/router";
import MoveLeftButton from "@/components/Buttons/MoveLeftButton";
import MoveRightButton from "@/components/Buttons/MoveRightButton";
import ImgGiaiMaChiSo from "./ImgGiaiMaChiSo";
import _ from "lodash";
import { ThanSoHocTextContent } from "./ThanSoHocTextContent";

const Banner = () => {
  return <div className=""></div>;
};

const GiaiMaChiSo = (props) => {
  const [conSoData, setConSoData] = useState([]);
  const router = useRouter();
  const { type } = router.query;
  const [currentType, setCurrentType] = useState(parseInt(type));
  const { tshUser, topics } = useSelector((state) => state.thanSoHoc);

  const currentConSo = useMemo(() => {
    const conSo = _.find(topics, { type: currentType });
    return conSo;
  }, [currentType, topics]);

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
      setCurrentType(1);
      return;
    }

    setCurrentType(currentType + 1);
  };

  const handleDecreaseType = () => {
    if (currentType <= 1) {
      setCurrentType(5);
      return;
    }
    setCurrentType(currentType - 1);
  };

  return (
    <>
      <ImgGiaiMaChiSo
        handleIncreaseType={handleIncreaseType}
        handleDecreaseType={handleDecreaseType}
        conSo={currentConSo}
      />

      <ThanSoHocTextContent data={conSoData} />

      {/* {conSoData?.map((item, index) => {
        return (
          <div key={index}>
            {" "}
            <div className="chi-tiet-than-so-hoc-title">{item?.title}</div>
            <div className="chi-tiet-than-so-hoc-content">{item?.content}</div>
          </div>
        );
      })} */}
    </>
  );
};

export default GiaiMaChiSo;
