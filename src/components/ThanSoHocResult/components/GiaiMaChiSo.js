import TitleHeader from "@/components/Title";
import ConSo from "./ConSo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getTSHDetail } from "@/api/apiRequest";
import { useRouter } from "next/router";
import MoveLeftButton from "@/components/Buttons/MoveLeftButton";
import MoveRightButton from "@/components/Buttons/MoveRightButton";
import ImgGiaiMaChiSo from "./ImgGiaiMaChiSo";
import _ from "lodash";
import { ThanSoHocTextContent } from "./ThanSoHocTextContent";
import { findConSoByEnName, findConSoByType } from "@/shared/utils";
import { setAppLoading } from "@/redux/slices/appSlice";

const Banner = () => {
  return <div className=""></div>;
};

const GiaiMaChiSo = (props) => {
  const [conSoData, setConSoData] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const { enName } = router.query;
  const { tshUser, topics } = useSelector((state) => state.thanSoHoc);

  const currentType = useMemo(() => {
    const conSo = findConSoByEnName(enName);
    if (!_.isEmpty(conSo)) {
      return parseInt(conSo.type);
    } else {
      return null;
    }
  }, [enName]);

  const currentConSo = useMemo(() => {
    if (currentType) {
      return _.find(topics, { type: parseInt(currentType) });
    }
    return {};
  }, [currentType, topics]);

  const fetchConSoData = async (conSoType) => {
    if (tshUser && conSoType) {
      dispatch(setAppLoading(true));
      try {
        // dispatch(setAppLoading(true));
        const res = await getTSHDetail({ ...tshUser, type: conSoType });

        if (res) {
          setConSoData(res);
        }
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(setAppLoading(false));
      }
    }
  };

  useEffect(() => {
    fetchConSoData(currentType);
  }, [currentType]);

  const handleIncreaseType = () => {
    let nextConSoType = 1;
    if (currentType >= 5) {
      nextConSoType = 1;
    } else {
      nextConSoType = currentType + 1;
    }
    const conSo = findConSoByType(nextConSoType);
    router.push(`/than-so-hoc/giai-ma-chi-so/${conSo.enName}`);
  };

  const handleDecreaseType = () => {
    let prevConSoType = 1;
    if (currentType <= 1) {
      prevConSoType = 5;
    } else {
      prevConSoType = currentType - 1;
    }
    const conSo = findConSoByType(prevConSoType);
    router.push(`/than-so-hoc/giai-ma-chi-so/${conSo.enName}`);
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
