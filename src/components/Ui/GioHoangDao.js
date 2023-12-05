
const GioHoangDao = (jd) => {
    var GIO_HD = ["110100101100", "001101001011", "110011010010", "101100110100", "001011001101", "010010110011"];
    var CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    var IMG = [
        '/image/12_con_giap/i_ti.png',
        '/image/12_con_giap/i_suu.png',
        '/image/12_con_giap/i_dan.png',
        '/image/12_con_giap/i_mao.png',
        '/image/12_con_giap/i_thin.png',
        '/image/12_con_giap/i_ran.png',
        '/image/12_con_giap/i_ngo.png',
        '/image/12_con_giap/i_mui.png',
        '/image/12_con_giap/i_than.png',
        '/image/12_con_giap/i_dau.png',
        '/image/12_con_giap/i_tuat.png',
        '/image/12_con_giap/i_hoi.png'
    ];

    function getGioHoangDao(jd) {
        var chiOfDay = (jd + 1) % 12;
        var gioHD = GIO_HD[chiOfDay % 6]; // same values for Ty' (1) and Ngo. (6), for Suu and Mui etc.
        var ret = [];
        for (var i = 0; i < 12; i++) {
            if (gioHD.charAt(i) === '1') {
                ret.push({n: CHI[i], s: (i * 2 + 23) % 24, e: (i * 2 + 1) % 24 , img:IMG[i] })
            }
        }
        return ret;
    }

    return getGioHoangDao(jd);
}

export default GioHoangDao;