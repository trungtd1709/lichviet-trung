const NgayCaNhan = (props) => {
  const { day } = props;
  return (
    <div className="tshCard d-flex flex-column">
      <div className="d-flex flex-row justify-content-center w-100 mb-3 ">
        <div
          style={{
            width: "40px",
            height: "38px",
            color: "#18A2B8",
            border: "1px solid #18A2B8",
            borderRadius: "6px",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <span style={{ textAlign: "center" }}>12</span>
        </div>
      </div>
      <span className="bold-18">24/11/2023 - Ngày cá nhân của bạn là số 8</span>
      <div className="d-flex flex-column border-top my-3">
        <span className="mt-3">
          Mọi thành công đều cần một bắt đầu. Tự tin để mở đầu cho một thành
          công sắp tới.
        </span>
      </div>
    </div>
  );
};

export default NgayCaNhan;
