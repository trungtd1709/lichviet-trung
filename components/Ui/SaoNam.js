import React from "react";

const SaoNam = (data) => {
    const arr = [
        { s1: "Kham", s2: ["Quý", "Tý", "Nhâm"] },
        { s1: "Khôn", s2: ["Mùi", "Khôn", "Thân"] },
        { s1: "Chấn", s2: ["Ất", "Mão", "Giáp"] },
        { s1: "Tốn", s2: ["Thìn", "Tốn", "Tị"] },
        { s1: "", s2: "", s3: "Trung" },
        { s1: "Càn", s2: ["Tuất", "Càn", "Hợi"] },
        { s1: "Đoài", s2: ["Canh", "Dậu", "Tân"] },
        { s1: "Cấn", s2: ["Dần", "Cấn", "Sửu"] },
        { s1: "Ly", s2: ["Bính", "Ngọ", "Đinh"] },
    ];
    var resutl = [
        { all: { hung_tinh: [], cat_tinh: [] } },
        { all: { hung_tinh: [], cat_tinh: [] } },
        { all: { hung_tinh: [], cat_tinh: [] } },
        { all: { hung_tinh: [], cat_tinh: [] } },
        { all: { hung_tinh: [], cat_tinh: [] } },
        { all: { hung_tinh: [], cat_tinh: [] } },
        { all: { hung_tinh: [], cat_tinh: [] } },
        { all: { hung_tinh: [], cat_tinh: [] } },
        { all: { hung_tinh: [], cat_tinh: [] } }
    ];

    data.forEach(e => {
        arr.forEach(function callback(i, k) {
            if (!i.s3 && i.s2.includes(e.ten_son) == true || (i.s1 && convertEN(i.s1) == convertEN(e.hau_thien))) {
                const name = e.ten_son;
                if (e.id_kslh < 7) {
                    // resutl[k].all.cat_tinh.push(e);
                    resutl[k][name] = resutl[k][name] ?? { cat_tinh: [], hung_tinh: [] };
                    resutl[k][name].cat_tinh.push(e);
                }
                else if (e.id_kslh >= 7) {
                    // resutl[k].all.hung_tinh.push(e) ;
                    resutl[k][name] = resutl[k][name] ?? { cat_tinh: [], hung_tinh: [] };
                    resutl[k][name].hung_tinh.push(e);
                }
            }
            if (i.s3 && e.hau_thien == i.s3) {
                const name = e.ten_son;
                if (e.id_kslh < 7) {
                    // resutl[k].all.cat_tinh.push(e);
                    resutl[k][name] = resutl[k][name] ?? { cat_tinh: [], hung_tinh: [] };
                    resutl[k][name].cat_tinh.push(e);
                }
                else if (e.id_kslh >= 7) {
                 // resutl[k].all.hung_tinh.push(e) ;
                    resutl[k][name] = resutl[k][name] ?? { cat_tinh: [], hung_tinh: [] };
                    resutl[k][name].hung_tinh.push(e);
                }
            }
        })
    });
    function convertEN(str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
        return str;
    }
    return resutl;

}




export default SaoNam;

