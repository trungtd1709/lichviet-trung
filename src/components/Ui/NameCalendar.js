
const NameCalendar = (dd, mm, yy, leap, jd) => {

    var CAN = ["Giáp", "Ất", "Binh", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
    var CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    function getDayName(lunarDate) {
        if (lunarDate.day === 0) {
            return "";
        }
        var cc = getCanChi(lunarDate);
        return [cc[0], cc[1], cc[2]];
    }
    function getCanChi(lunar) {
        var dayName, monthName, yearName;
        dayName = CAN[(lunar.jd + 9) % 10] + " " + CHI[(lunar.jd+1)%12];
        monthName = CAN[(lunar.year*12+lunar.month+3) % 10] + " " + CHI[(lunar.month+1)%12];
        if (lunar.leap === 1) {
            monthName += " (nhu\u1EADn)";
        }
        yearName = getYearCanChi(lunar.year);
        return [dayName, monthName, yearName];
    }
    function getYearCanChi(year) {
        return CAN[(year+6) % 10] + " " + CHI[(year+8) % 12];
    }
    function LunarDate(dd, mm, yy, leap, jd) {
        this.day = dd;
        this.month = mm;
        this.year = yy;
        this.leap = leap;
        this.jd = jd;
    }
    var lunar = new LunarDate(dd, mm, yy, leap, jd);
    return getDayName(lunar);
}

export default NameCalendar;