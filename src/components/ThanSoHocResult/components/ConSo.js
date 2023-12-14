import { thunkGetConSoData } from "@/redux/slices/thanSoHocSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const { imgSrc } = require("@/const/AppResource");

const ConSo = (props) => {
  const { title, so, type } = props;
  const router = useRouter();
  const tshUser = useSelector((state) => state.thanSoHoc.tshUser);
  const dispatch = useDispatch();

  const handleClickConso = () => {
    const params = { ...tshUser, type };
    dispatch(thunkGetConSoData(params));
    router.push(`/than-so-hoc/giai-ma-chi-so/${type}`);
  };

  return (
    <div className="d-flex flex-column" style={{ width: "100px", gap: "15px" }}>
      <div
        className="position-relative d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "100px", cursor: "pointer" }}
        onClick={handleClickConso}
      >
        <img
          style={{ width: "100%", height: "100%", position: "absolute" }}
          src={imgSrc.conSoBackground}
        />
        <span
          style={{
            zIndex: "1",
            fontSize: "34px",
            color: "white",
            fontWeight: "700",
          }}
        >
          {so}
        </span>
      </div>
      <span
        style={{
          color: "#191919",
          textAlign: "center",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px",
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default ConSo;
