const Line = (props) => {
  const { additionalLineStyle } = props;
  return (
    <div
      style={{
        background: "white",
        height: "2px",
        width: "100px",
        transform: "rotate(150deg)",
        position: "absolute",
        ...additionalLineStyle,
      }}
    />
  );
};

const Circle = (props) => {
  const {
    additionalStyle,
    additionalLeftLineStyle,
    additionalRightLineStyle,
    left,
    right,
    longLeftLine,
    longRightLine,
    longLeftLineStyle,
    longRightLineStyle,
    className,
    number,
    peakValue,
    peakPosition,
    birthdayTitle,
    peakYearValue,
    peakYearPositionRight = false,
  } = props;
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ position: "relative" }}
    >
      {left && <Line additionalLineStyle={additionalLeftLineStyle} />}
      {right && <Line additionalLineStyle={additionalRightLineStyle} />}
      {longLeftLine && <Line additionalLineStyle={longLeftLineStyle} />}
      {longRightLine && <Line additionalLineStyle={longRightLineStyle} />}

      <div
        className={`${className} d-flex justify-content-center`}
        style={{ zIndex: "1", position: "relative", ...additionalStyle }}
      >
        {number && <span style={{ fontWeight: "600" }}>{number}</span>}
        {peakPosition === "top" && peakValue && (
          <span className="peak-value-top">{peakValue}</span>
        )}
      </div>
      {birthdayTitle && <span className="peak-birthday">{birthdayTitle}</span>}
      {peakYearValue && !peakYearPositionRight && (
        <span className="peak-year">{peakYearValue}</span>
      )}
      {peakYearValue && peakYearPositionRight && (
        <span className="peak-year-position-right">{peakYearValue}</span>
      )}
    </div>
  );
};

export const SoDoGiaiDoanCuocDoi = (props) => {
  const { chart = {} } = props;
  const { date, month, year, peak_1, peak_2, peak_3, peak_4 } = chart;
  return (
    <div className="so-do-giai-doan-cuoc-doi">
      <div
        className="d-flex flex-row justify-content-center align-items-end"
        // style={{ height: "45px" }}
      >
        <Circle
          className="red"
          peakPosition="top"
          peakValue={"IV"}
          peakYearValue={peak_4?.year}
          number={peak_4?.number}
          peakYearPositionRight={true}
        />
      </div>
      <div
        className="d-flex flex-row justify-content-center align-items-end"
        style={{ height: "55px" }}
      >
        <Circle
          className="green"
          peakPosition="top"
          peakValue={"III"}
          peakYearValue={peak_3?.year}
          number={peak_3?.number}
        />
      </div>
      <div
        className="d-flex flex-row align-items-end"
        style={{ padding: "0px 0px", height: "45px", position: "relative" }}
      >
        <div
          className="w-50 d-flex justify-content-center"
          style={{ paddingLeft: "40px" }}
        >
          <Circle
            left={true}
            additionalLeftLineStyle={{
              transform: "rotate(40deg)",
              width: "80px",
              top: "-10px",
              left: "50px",
            }}
            // additionalStyle={{ left: "20px" }}
            className="orange"
            peakPosition="top"
            peakValue={"I"}
            peakYearValue={peak_1?.year}
            number={peak_1?.number}
          />
        </div>
        <div
          className="w-50 d-flex justify-content-center"
          style={{ paddingRight: "40px" }}
        >
          <Circle
            right={true}
            additionalRightLineStyle={{
              transform: "rotate(140deg)",
              width: "80px",
              top: "-10px",
              right: "50px",
            }}
            // additionalStyle={{ right: "20px" }}
            className="orange"
            peakPosition="top"
            peakValue={"II"}
            peakYearValue={peak_2?.year}
            number={peak_2?.number}
          />
        </div>
      </div>
      <div
        className="d-flex flex-row justify-content-between align-items-end"
        style={{ padding: "0px", height: "40px" }}
      >
        <Circle
          right={true}
          longRightLine={true}
          longRightLineStyle={{
            transform: "rotate(130deg)",
            width: "200px",
            top: "-50px",
            left: "-30px",
          }}
          additionalRightLineStyle={{
            width: "100px",
            top: "-10px",
            right: "-70px",
          }}
          className="ngay-sinh"
          birthdayTitle={month?.title}
          number={month?.number}
        />
        <Circle
          left={true}
          right={true}
          additionalLeftLineStyle={{
            transform: "rotate(40deg)",
            width: "80px",
            top: "-10px",
            left: "-50px",
          }}
          additionalRightLineStyle={{
            transform: "rotate(140deg)",
            width: "80px",
            top: "-10px",
            right: "-50px",
          }}
          className="ngay-sinh"
          birthdayTitle={date?.title}
          number={date?.number}
        />
        <Circle
          left={true}
          additionalLeftLineStyle={{
            transform: "rotate(30deg)",
            width: "100px",
            top: "-10px",
            left: "-70px",
          }}
          longLeftLine={true}
          longLeftLineStyle={{
            transform: "rotate(50deg)",
            width: "200px",
            top: "-50px",
            right: "-30px",
          }}
          className="ngay-sinh"
          birthdayTitle={year?.title}
          number={year?.number}
        />
      </div>
    </div>
  );
};
