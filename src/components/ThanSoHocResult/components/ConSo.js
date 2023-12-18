import { setAppLoading } from "@/redux/slices/appSlice";
import { thunkGetConSoData } from "@/redux/slices/thanSoHocSlice";
import { findConSoByType } from "@/shared/utils";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const { imgSrc } = require("@/const/AppResource");

const ConSo = (props) => {
  const { title, so, type } = props;
  const router = useRouter();
  const tshUser = useSelector((state) => state.thanSoHoc.tshUser);
  const dispatch = useDispatch();

  const handleClickConso = async () => {
    const params = { ...tshUser, type };
    dispatch(setAppLoading(true));

    try {
      // const resultAction = await dispatch(thunkGetConSoData(params));
      // unwrapResult(resultAction);

      const conSo = findConSoByType(type);
      router.push(`/than-so-hoc/giai-ma-chi-so/${conSo.enName}`);
    } catch (error) {
      console.error("Failed to get conSo data:", error);
    } finally {
      dispatch(setAppLoading(false));
    }
  };

  return (
    <div className="d-flex flex-column" style={{ gap: "15px", width: "100px" }}>
      <div
        className="position-relative d-flex justify-content-center align-items-center"
        style={{
          width: "100px",
          height: "100px",
          cursor: "pointer",
          borderRadius: "8px",
          padding: "20px",
          background:
            "linear-gradient(180deg,#42dcb9 -2.42%,#27c9e4 24.21%, #79c5eb 79.67%,#e2d8ef 102.04%)",
        }}
        onClick={handleClickConso}
      >
        <img
          style={{ position: "absolute", width: "70px" }}
          className="con-so-background"
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
