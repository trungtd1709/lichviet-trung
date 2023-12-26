import { useSelector } from "react-redux";
import IconProfile from "../../../../public/icons/IconProfile";
import IconQuoteMark from "../../../../public/icons/IconQuoteMark";
import _ from "lodash";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import { quoteArray } from "@/const/const";

export const TongQuan = () => {
  const { tshUser } = useSelector((state) => state.thanSoHoc);
  const { userData } = useContext(AuthContext);

  const getRandomQuote = () => {
    const quote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    return quote;
  };
  return (
    <>
      {!_.isEmpty(tshUser) && (
        <div className="tshCard d-flex flex-row">
          <div className="avatar">
            {!_.isEmpty(userData) ? (
              <img
                // style={{ width: "50px", height: "50px" }}
                src={userData?.avatar}
              />
            ) : (
              <div style={{ width: "50px" }}>
                <IconProfile />
              </div>
            )}
          </div>
          <div className="d-flex flex-column w-100">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-column pt-1" style={{ gap: "8px" }}>
                <span className="personalInfo">{tshUser?.name}</span>
                <span className="personalInfo">{tshUser?.birthday}</span>
              </div>
              <IconQuoteMark />
            </div>
            <span className="mt-3">{getRandomQuote()}</span>
          </div>
        </div>
      )}
    </>
  );
};
