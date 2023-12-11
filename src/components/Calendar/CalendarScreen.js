import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
// import TinhAmLich from "../../Ui/AmLich";
// import GioHoangDao from "../../Ui/GioHoangDao";
// import NameCalendar from "../../Ui/NameCalendar";
// import './calendar.css';
// import IconWeather from "/icons/IconWeather";
// import IconSun from "icons/IconSun";
// import IconMoon from "icons/IconMoon";
import GioHoangDao from "../Ui/GioHoangDao";
import NameCalendar from "../Ui/NameCalendar";
import TinhAmLich from "../Ui/AmLich";
import IconWeather from "../../../public/icons/IconWeather";
import IconMoon from "../../../public/icons/IconMoon";
import IconSun from "../../../public/icons/IconSun";

const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;

const CalendarScreen = () => {
  // tính năm nhuận
  function isLeap(year) {
    if (year % 4 || (year % 100 === 0 && year % 400)) return 0;
    else return 1;
  }

  //tính số ngày của 1 tháng
  function daysIn(month, year) {
    return month === 2 ? 28 + isLeap(year) : 31 - (((month - 1) % 7) % 2);
  }

  function startEnd(month, year) {
    let d = new Date(month + "/1/" + year);
    let startIndex = d.getDay();
    let endIndex = daysIn(month, year);
    if (startIndex === 0) {
      startIndex = 6;
    } else {
      startIndex = startIndex - 1;
    }
    return { start: startIndex, end: endIndex };
  }

  //in lịch
  function cld(month, year) {
    let begin = startEnd(month, year);
    const startIndex = begin.start;
    const endIndex = begin.end;
    let amlich;
    let result = [];
    if (startIndex > 0) {
      let monthPre, dayPre, yearPre;
      monthPre = month - 1 === 0 ? 12 : month - 1;
      yearPre = monthPre === 12 ? year - 1 : year;
      dayPre = daysIn(monthPre, yearPre);
      for (let i = dayPre - startIndex + 1; i <= dayPre; i++) {
        amlich = TinhAmLich(i, monthPre, yearPre);
        console.log("[thangam]:", amlich.month);
        result.push({
          ngayduong: i,
          ngayam: amlich.day,
          thang: monthPre,
          thangam: amlich.month,
          nam: yearPre,
          m: -1,
        });
      }
    }
    for (let i = 1; i <= endIndex; i++) {
      amlich = TinhAmLich(i, month, year);
      result.push({
        ngayduong: i,
        ngayam: amlich.day,
        thang: month,
        thangam: amlich.month,
        nam: year,
        m: 0,
      });
    }
    if (result.length % 7 > 0) {
      let monthNext, yearNext;
      monthNext = month + 1 === 13 ? 1 : month + 1;
      yearNext = monthNext === 1 ? year + 1 : year;
      for (let i = 0; i < result.length % 7; i++) {
        amlich = TinhAmLich(i + 1, monthNext, yearNext);
        result.push({
          ngayduong: i + 1,
          ngayam: amlich.day,
          thang: monthNext,
          thangam: amlich.month,
          nam: yearNext,
          m: 1,
        });
      }
    }
    return result;
  }

  const d = new Date();
  const dayNow = d.getDate();
  const monthNow = d.getMonth() + 1;
  const yearNow = d.getFullYear();
  const amlichNow = TinhAmLich(dayNow, monthNow, yearNow);
  const tenAmLich = NameCalendar(
    amlichNow.day,
    amlichNow.month,
    amlichNow.year,
    amlichNow.leap,
    amlichNow.jd
  );
  const getStartEnd = startEnd(monthNow, yearNow);

  const [display, setDisplay] = useState("d-none");
  const [lichThang, setLichThang] = useState({
    print: cld(monthNow, yearNow),
    m: monthNow,
    y: yearNow,
    start: getStartEnd.start,
    end: getStartEnd.end,
  });
  const [valueSelectMonth, setValueSelectMonth] = useState({
    value: monthNow,
    label: "Tháng " + monthNow,
  });
  const [valueSelectYear, setValueSelectYear] = useState({
    value: yearNow,
    label: "Năm " + yearNow,
  });
  const [lichNgay, setLichNgay] = useState({
    duong: {
      d: dayNow,
      m: monthNow,
      y: yearNow,
      // nameY: getYearCanChi(yearNow)
    },
    am: {
      d: amlichNow.day,
      m: amlichNow.month,
      y: amlichNow.year,
      nameD: tenAmLich[0],
      nameM: tenAmLich[1],
      nameY: tenAmLich[2],
    },
    giohoangdao: GioHoangDao(amlichNow.jd),
  });
  const hienNgay = {
    duong: {
      d: dayNow,
      m: monthNow,
      y: yearNow,
    },
    am: {
      d: amlichNow.day,
      m: amlichNow.month,
      y: amlichNow.year,
    },
  };
  const [forcus, setForcus] = useState({});

  //event page
  const clickLichNgay = (i) => {
    let newDate = new Date(
      lichNgay.duong.m + "/" + lichNgay.duong.d + "/" + lichNgay.duong.y
    );
    newDate.setDate(newDate.getDate() + i);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let al = TinhAmLich(day, month, year);
    let tenAmLich = NameCalendar(al.day, al.month, al.year, al.leap, al.jd);
    if (month !== lichNgay.duong.m) {
      const getStartEnd = startEnd(month, year);
      setLichThang({
        print: cld(month, year),
        m: month,
        y: year,
        start: getStartEnd.start,
        end: getStartEnd.end,
      });
    }
    setForcus({
      d: day,
      m: month,
      y: year,
    });
    setLichNgay({
      duong: {
        d: day,
        m: month,
        y: year,
      },
      am: {
        d: al.day,
        m: al.month,
        y: al.year,
        nameD: tenAmLich[0],
        nameM: tenAmLich[1],
        nameY: tenAmLich[2],
      },
      giohoangdao: GioHoangDao(al.jd),
    });
  };
  const dayNowClick = () => {
    setForcus({ d: dayNow, m: monthNow, y: yearNow });
    setValueSelectMonth({ value: monthNow, label: "Tháng " + monthNow });
    setValueSelectYear({ value: yearNow, label: "Năm " + yearNow });
    setLichThang({
      print: cld(monthNow, yearNow),
      m: monthNow,
      y: yearNow,
      start: getStartEnd.start,
      end: getStartEnd.end,
    });
    setLichNgay({
      duong: {
        d: dayNow,
        m: monthNow,
        y: yearNow,
        // nameY: getYearCanChi(yearNow)
      },
      am: {
        d: amlichNow.day,
        m: amlichNow.month,
        y: amlichNow.year,
        nameD: tenAmLich[0],
        nameM: tenAmLich[1],
        nameY: tenAmLich[2],
      },
      giohoangdao: GioHoangDao(amlichNow.jd),
    });
  };

  const onChangeSelect = (e, type) => {
    let thang, nam;
    if (type === 1) {
      thang = e.value;
      nam = valueSelectYear.value;
      setValueSelectMonth(e);
    } else {
      thang = valueSelectMonth.value;
      nam = e.value;
      setValueSelectYear(e);
    }
    const SE = startEnd(thang, nam);
    setLichThang({
      print: cld(thang, nam),
      m: thang,
      y: nam,
      start: SE.start,
      end: SE.end,
    });
  };
  const clickLichThang = (month) => {
    // alert(lichThang.y);
    // alert(lichThang.m);
    let formattedMonth = lichThang.m.toString().padStart(2, "0"); // month always 2 digits
    let formattedDate = lichThang.y + "-" + formattedMonth + "-" + "01";
    let newDate = new Date(formattedDate);
    // alert(newDate);
    newDate.setMonth(newDate.getMonth() + month);
    let nam = Number(newDate.getFullYear());
    let thang = Number(newDate.getMonth() + 1);
    const SE = startEnd(thang, nam);
    setLichThang({
      print: cld(thang, nam),
      m: thang,
      y: nam,
      start: SE.start,
      end: SE.end,
    });
  };
  const hienLichNgay = (d = null, m = null, y = null, checkNextMonth = 0) => {
    if (checkNextMonth !== 0) {
      const getStartEnd = startEnd(m, y);
      setLichThang({
        print: cld(m, y),
        m: m,
        y: y,
        start: getStartEnd.start,
        end: getStartEnd.end,
      });
    }
    if (d && m && y) {
      const aln = TinhAmLich(d, m, y);
      const tAL = NameCalendar(aln.day, aln.month, aln.year, aln.leap, aln.jd);
      setLichNgay({
        duong: {
          d: d,
          m: m,
          y: y,
          // nameY: getYearCanChi(hienNgay.duong.y)
        },
        am: {
          d: aln.day,
          m: aln.month,
          y: aln.year,
          nameD: tAL[0],
          nameM: tAL[1],
          nameY: tAL[2],
        },
        giohoangdao: GioHoangDao(aln.jd),
      });
    } else {
      const aln = TinhAmLich(
        hienNgay.duong.d,
        hienNgay.duong.m,
        hienNgay.duong.y
      );
      const tAL = NameCalendar(aln.day, aln.month, aln.year, aln.leap, aln.jd);
      const a = hienNgay.am;
      const d = hienNgay.duong;
      setLichNgay({
        duong: {
          d: d.d,
          m: d.m,
          y: d.y,
          // nameY: getYearCanChi(hienNgay.duong.y)
        },
        am: {
          d: a.d,
          m: a.m,
          y: a.y,
          nameD: tAL[0],
          nameM: tAL[1],
          nameY: tAL[2],
        },
        giohoangdao: GioHoangDao(aln.jd),
      });
    }
  };
  const onChangeSelectMobile = (e) => {
    let value = e.value.split("-");
    let nam = Number(value[0]);
    let thang = Number(value[1]);
    const SE = startEnd(thang, nam);
    setLichThang({
      print: cld(thang, nam),
      m: thang,
      y: nam,
      start: SE.start,
      end: SE.end,
    });
  };
  const addClass = (i, f, m, y, index) => {
    let classHtml = "";
    if (i < lichThang.start || i + 1 > lichThang.end + lichThang.start) {
      classHtml += " opacity";
    }
    if (f === dayNow && m === monthNow && y === yearNow) {
      classHtml += " active";
    }
    if (index === 6) {
      classHtml += " text-red";
    }
    if (f === forcus.d && m === forcus.m && y === forcus.y) {
      classHtml += " forcus";
    }
    return classHtml;
  };

  return (
    <>
      <div>
        <div className="p-0 col-md-10 col-7">
          <h2
            className="rs-title pl-md-2 pl-1"
            style={{ borderLeft: "4px solid rgb(53, 192, 60)" }}
          >
            Lịch Ngày
          </h2>
        </div>
        <div className={"mx-auto calendar"}>
          <div className={"calendar-day"}>
            <Row className={"m-0"}>
              <Col md={6} className={"m-0 p-0"}>
                <div
                  className={
                    "d-flex justify-content-center align-items-center py-3 bg-title"
                  }
                >
                  <span>
                    <IconSun />
                  </span>
                  <span className={"mx-1 mt-1"}>DƯƠNG LỊCH</span>
                </div>
              </Col>
              <Col md={6} className={"m-0 p-0"}>
                <div
                  className={
                    "d-flex justify-content-center align-items-center py-3 bg-title"
                  }
                >
                  <span>
                    <IconMoon />
                  </span>
                  <span className={"mx-1 mt-1"}>ÂM LỊCH</span>
                </div>
              </Col>
            </Row>
            <Row className={"m-0"}>
              <Col md={6} className={"m-0 p-0"}>
                <div className={"card-calendar"}>
                  <div
                    className={"pre-day bt-day"}
                    onClick={() => {
                      clickLichNgay(-1);
                    }}
                  ></div>
                  <p className={"title-card-cl"}>
                    Tháng {lichNgay.duong.m} năm {lichNgay.duong.y}
                  </p>
                  <div className={"day-cl"}>{lichNgay.duong.d}</div>
                  <div className={"weather"}>
                    <span>
                      <IconWeather />
                    </span>
                    <div className={"name-year"}>
                      <p className={"temperature"}> 24 - 30°C </p>
                      <p className={"name-y"}>Ấm</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} className={"m-0 p-0"}>
                <div className={"card-calendar"}>
                  <div
                    className={"next-day bt-day"}
                    onClick={() => {
                      clickLichNgay(1);
                    }}
                  ></div>
                  <p className={"title-card-cl"}>
                    Tháng {lichNgay.am.m} năm {lichNgay.am.y}
                    <span>({lichNgay.am.nameY})</span>
                  </p>
                  <div className={"day-cl no-color"}>
                    {lichNgay.am.d}
                    {/*<p className={'dottor hac-dao'}></p>*/}
                  </div>
                  <div className={"text-amlich"}>
                    <p>Ngày : {lichNgay.am.nameD}</p>
                    <p>Tháng: {lichNgay.am.nameM}</p>
                    <p> Năm: {lichNgay.am.nameY}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div
        className="p-0 d-flex justify-content-between align-items-center"
        style={{ marginTop: 48 }}
      >
        <h2
          className="rs-title pl-md-2 pl-1"
          style={{ borderLeft: "4px solid rgb(53, 192, 60)" }}
        >
          Lịch Tháng
        </h2>
        <div className={"today"}>
          <button onClick={dayNowClick} className={"day-now d-md-none"}>
            Hôm nay
          </button>
        </div>
      </div>
      <div className={"mx-auto calendar"}>
        <div className={"position-relative"}>
          <div
            className={
              "show-date box-user text-center px-3 pt-0 pb-3 " + display
            }
          >
            <div
              className={
                "header-show align-items-center d-flex justify-content-between move-position"
              }
            >
              <div
                className={
                  "d-flex justify-content-center py-3 align-items-center"
                }
              >
                <span>
                  <IconSun />
                </span>
                <p className={"mx-1 mt-1"}>DƯƠNG LỊCH</p>
              </div>
              <i
                onClick={() => {
                  setDisplay("d-none");
                }}
                className="fas fa-times-circle close-show-date"
              ></i>
            </div>
            <div className={"show-ngay-duong"}>
              <Select
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
                value={{
                  value: hienNgay.duong.d,
                  label: "Ngày " + hienNgay.duong.d,
                }}
                onChange={onChangeSelect}
              />
              <Select
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
                value={{
                  value: hienNgay.duong.m,
                  label: "Tháng " + hienNgay.duong.m,
                }}
                onChange={onChangeSelect}
              />
              <Select
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
                value={{
                  value: hienNgay.duong.y,
                  label: hienNgay.duong.y,
                }}
                onChange={onChangeSelect}
              />
            </div>
            <div
              className={
                "d-flex py-3 align-items-center justify-content-center"
              }
            >
              <span>
                <IconMoon />
              </span>
              <p className={"mx-1 mt-1"}>ÂM LỊCH</p>
            </div>
            <div className={"show-ngay-am"}>
              <Select
                value={{
                  value: hienNgay.am.d,
                  label: "Ngày " + hienNgay.am.d,
                }}
                onChange={onChangeSelect}
              />
              <Select
                value={{
                  value: hienNgay.am.m,
                  label: "Tháng " + hienNgay.am.m,
                }}
                onChange={onChangeSelect}
              />
              <Select
                value={{
                  value: hienNgay.am.y,
                  label: hienNgay.am.y,
                }}
                onChange={onChangeSelect}
              />
            </div>
          </div>

          <div className={"box-style calendar"}>
            <Row className={"calendar-header  py-3 hidden-xs"}>
              <Col md={3} xs={3} className={"button-preMonth"}>
                <Select
                  options={Array.from(
                    {
                      length: 12,
                    },
                    function (v, k) {
                      return {
                        value: k + 1,
                        label: "Tháng " + (1 + k),
                      };
                    }
                  )}
                  isSearchable={false}
                  styles={{
                    dropdownIndicator: (base, state) => {
                      let changes = {
                        width: 0,
                        height: 0,
                        borderLeft: "7px solid transparent",
                        borderRight: "7px solid transparent",
                        borderTop: "7px solid #66BB6A",
                        padding: 0,
                        borderRadius: "10px",
                        marginRight: "9px",
                      };
                      return Object.assign(base, changes);
                    },
                  }}
                  components={{ IndicatorSeparator: () => null }}
                  value={valueSelectMonth}
                  onChange={(e) => onChangeSelect(e, 1)}
                />
              </Col>
              <Col md={3} xs={3} className={"box-chon-thang"}>
                <Select
                  options={Array.from(
                    {
                      length: 100,
                    },
                    function (v, k) {
                      return {
                        value: yearNow - 50 + k,
                        label: "Năm " + (yearNow - 50 + k),
                      };
                    }
                  )}
                  isSearchable={false}
                  styles={{
                    dropdownIndicator: (base, state) => {
                      let changes = {
                        width: 0,
                        height: 0,
                        borderLeft: "7px solid transparent",
                        borderRight: "7px solid transparent",
                        borderTop: "7px solid #66BB6A",
                        padding: 0,
                        marginRight: "9px",
                        borderRadius: "10px",
                      };
                      return Object.assign(base, changes);
                    },
                    control: (provided, state) => ({
                      ...provided,
                      background: "#fff",
                      borderColor: "#9e9e9e",
                      height: "100%",
                      boxShadow: state.isFocused ? null : null,
                    }),
                    valueContainer: (provided, state) => ({
                      ...provided,
                      height: "100%",
                      padding: "0 6px",
                    }),
                  }}
                  components={{ IndicatorSeparator: null }}
                  value={valueSelectYear}
                  onChange={(e) => onChangeSelect(e, 2)}
                />
              </Col>
              {/* <Col md={3} xs={3} className={"box-chon-thang"}> */}
              <div className={"today"}>
                <button onClick={dayNowClick} className={"day-now"}>
                  Hôm nay
                </button>
              </div>
              {/* </Col> */}
            </Row>
            <Row
              className={
                "calendar-header d-md-none d-flex justify-content-between"
              }
            >
              <Col xs={2} className={"p-0"}>
                <div className={"button-preMonth"}>
                  <div
                    className={"preMonth d-flex "}
                    onClick={() => {
                      clickLichThang(-1);
                    }}
                  >
                    <span className={"span-inner"} />
                  </div>
                </div>
              </Col>
              <Col
                xs={7}
                className={"button-preMonth"}
                id={"select-options-month-year"}
              >
                <Select
                  classNames={{
                    option: (d) => `our-option-${d.data.value}`,
                  }}
                  onMenuOpen={() => {
                    setTimeout(() => {
                      let searchText = lichThang.y + "-" + lichThang.m;
                      const selectedEl = document.querySelector(
                        `.our-option-${searchText}`
                      );
                      selectedEl.parentElement.scrollTop = selectedEl.offsetTop;
                    }, 15);
                  }}
                  maxMenuHeight={200}
                  options={Array.from({ length: 30 * 12 }, function (v, k) {
                    let nam = 2000 + Math.floor((k + 1) / 12);
                    let thang = (k % 12) + 1;
                    return {
                      value: nam + "-" + thang,
                      label: "Tháng " + thang + " - " + nam,
                    };
                  })}
                  menuShouldScrollIntoView={true}
                  isSearchable={false}
                  styles={{
                    dropdownIndicator: (base) => {
                      let changes = {
                        width: 0,
                        height: 0,
                        borderLeft: "7px solid transparent",
                        borderRight: "7px solid transparent",
                        borderTop: "7px solid #66BB6A",
                        padding: 0,
                        borderRadius: "10px",
                        marginRight: "5px",
                      };
                      return Object.assign(base, changes);
                    },
                    valueContainer: (base) => ({
                      ...base,
                      minHeight: "25px",
                      fontSize: "14px",
                    }),
                    control: (base) => ({
                      ...base,
                      maxHeight: "30px",
                      minHeight: "30px",
                      fontSize: "14px",
                    }),
                    option: (base) => ({
                      ...base,
                      maxHeight: "30px",
                      minHeight: "30px",
                      fontSize: "14px",
                      lineHeight: "15px",
                      textAlign: "center",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      textAlign: "center",
                    }),
                  }}
                  components={{ IndicatorSeparator: () => null }}
                  value={{
                    value: lichThang.y + "-" + lichThang.m,
                    label: "Tháng " + lichThang.m + " - " + lichThang.y,
                  }}
                  onChange={onChangeSelectMobile}
                />
              </Col>
              <Col xs={2} className={"p-0"}>
                <div className={"button-nextMonth float-right"}>
                  <div
                    className={"nextMonth d-flex"}
                    onClick={() => {
                      clickLichThang(1);
                    }}
                  >
                    <span className={"span-inner"} />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className={"calendar-week"}>
              <div className={"week-item"}>
                <p>Thứ hai</p>
              </div>
              <div className={"week-item"}>
                <p>Thứ ba</p>
              </div>
              <div className={"week-item"}>
                <p>Thứ tư</p>
              </div>
              <div className={"week-item"}>
                <p>Thứ năm</p>
              </div>
              <div className={"week-item"}>
                <p>Thứ sáu</p>
              </div>
              <div className={"week-item"}>
                <p>Thứ bảy</p>
              </div>
              <div className={"week-item text-red"}>
                <p>Chủ nhật</p>
              </div>
            </Row>
            {Array.from(
              { length: lichThang.print.length / 7 },
              function (v, k) {
                return (
                  <Row key={k} className={"mx-0 caledar-days"}>
                    {Array.from({ length: 7 }, (m, n) => {
                      const index = n + k * 7;
                      const i = lichThang.print[index];
                      console.log("[lichThang]:", i);
                      return (
                        <div
                          onClick={(e) => {
                            hienLichNgay(i.ngayduong, i.thang, i.nam, i.m);
                            setForcus({ d: i.ngayduong, m: i.thang, y: i.nam });
                            // window.location.href = "#calender-day-href";
                          }}
                          key={n}
                          className={
                            "day-item" +
                            addClass(index, i.ngayduong, i.thang, i.nam, n)
                          }
                        >
                          {}
                          <p className={"duong-lich "}>{i.ngayduong}</p>
                          {i.ngayam === 1 ? (
                            <p className={"am-lich text-red"}>
                              {i.ngayam}/{i.thangam}
                            </p>
                          ) : (
                            <p className={"am-lich "}>{i.ngayam}</p>
                          )}
                        </div>
                      );
                    })}
                  </Row>
                );
              }
            )}
          </div>
          {/*<Row className={'note-calendar px-md-5 py-4'}>*/}
          {/*    <Col md={6}>*/}
          {/*        <p className={'note-hoang-dao'}>Ngày hoàng đạo</p>*/}
          {/*    </Col>*/}
          {/*    <Col md={6}>*/}
          {/*        <p className={'note-hac-dao'}>Ngày hắc đạo</p>*/}
          {/*    </Col>*/}
          {/*</Row>*/}
        </div>
      </div>
    </>
  );
};

export default CalendarScreen;
