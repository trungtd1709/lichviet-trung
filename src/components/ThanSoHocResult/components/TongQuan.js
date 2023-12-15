import { useSelector } from "react-redux";
import IconProfile from "../../../../public/icons/IconProfile";
import IconQuoteMark from "../../../../public/icons/IconQuoteMark";
import _ from "lodash";

export const TongQuan = () => {
  const { tshUser } = useSelector((state) => state.thanSoHoc);
  return (
    <>
      {!_.isEmpty(tshUser) && (
        <div className="tshCard d-flex flex-row">
          <div className="avatar">
            <IconProfile />
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-column" style={{ gap: "8px" }}>
                <span className="personalInfo">{tshUser?.name}</span>
                <span className="personalInfo">{tshUser?.birthday}</span>
              </div>
              <IconQuoteMark />
            </div>
            <span className="mt-3">
              Mọi thành công đều cần một bắt đầu. Tự tin để mở đầu cho một thành
              công sắp tới.
            </span>
          </div>
        </div>
      )}
    </>
  );
};
