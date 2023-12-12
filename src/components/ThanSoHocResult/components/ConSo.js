const { imgSrc } = require("@/const/AppResource");

const ConSo = () => {
  return (
    <div className="d-flex flex-column" style={{ width: "100px", gap: "15px" }}>
      <div
        className="position-relative d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "100px" }}
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
          5
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
        Con số chủ đạo
      </span>
    </div>
  );
};

export default ConSo;
