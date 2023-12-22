import React from "react";

const TietKhiPopup = props => {
    const tietkhi_arr = [
        {
            ten: "Xuân phân",
            y_nghia: "Giữa Xuân",
            ngay: "20 - 21 tháng 3",
            img: "image/TietKhi/i_xuanphan.png"
        },
        {
            ten: "Thanh minh",
            y_nghia: "Trời trong sáng",
            ngay: "4 - 5 tháng 4",
            img: "image/TietKhi/i_thanhminh.png"
        },
        {
            ten: "Cốc Vũ",
            y_nghia: "Mưa rào",
            ngay: "19 - 20 tháng 4",
            img: "image/TietKhi/i_cocvu.png"
        },
        {
            ten: "Lập Hạ",
            y_nghia: "Đầu hè",
            ngay: "5 - 6 tháng 5",
            img: "image/TietKhi/i_lapha.png"
        },
        {
            ten: "Tiểu Mãn",
            y_nghia: "Lũ nhỏ",
            ngay: "21 - 22 tháng 5",
            img: "image/TietKhi/i_tieuman.png"
        },
        {
            ten: "Mang chủng",
            y_nghia: "Tua rua",
            ngay: "5 - 6 tháng 6",
            img: "image/TietKhi/i_mangchung.png"
        },
        {
            ten: "Hạ Chí",
            y_nghia: "Giữa hè",
            ngay: "21 - 22 tháng 6",
            img: "image/TietKhi/i_hachi.png"
        },
        {
            ten: "Tiểu Thử ",
            y_nghia: "Nóng nhẹ",
            ngay: "6 - 7 tháng 7",
            img: "image/TietKhi/i_tieuthu.png"
        },
        {
            ten: "Đại Thử",
            y_nghia: "Nóng oi",
            ngay: "22 - 23 tháng 7",
            img: "image/TietKhi/i_daithu.png"
        },
        {
            ten: "Lập Thu",
            y_nghia: "Đầu thu",
            ngay: "7 - 8 tháng 8",
            img: "image/TietKhi/i_lapthu.png"
        },
        {
            ten: "Xử Thử",
            y_nghia: "Mưa ngâu",
            ngay: "22 - 23 tháng 8",
            img: "image/TietKhi/i_xuthu.png"
        },
        {
            ten: "Bạch Lộ ",
            y_nghia: "Nắng nhạt",
            ngay: "7 - 8 tháng 9",
            img: "image/TietKhi/i_bachlo.png"
        },
        {
            ten: "Thu phân",
            y_nghia: "Giữa thu",
            ngay: "22 - 23 tháng 9",
            img: "image/TietKhi/i_thuphan.png"
        },
        {
            ten: "Hàn Lộ",
            y_nghia: "Mát mẻ",
            ngay: "8 - 9 tháng 10",
            img: "image/TietKhi/i_hanlo.png"
        },
        {
            ten: "Sương Giáng",
            y_nghia: "Sương mù",
            ngay: "22 - 23 tháng 10",
            img: "image/TietKhi/i_suonggiang.png"
        },
        {
            ten: "Lập Đông",
            y_nghia: "Đầu đông",
            ngay: "7 - 8 tháng 11",
            img: "image/TietKhi/i_lapdong.png"
        },
        {
            ten: "Tiểu Tuyết",
            y_nghia: "Tuyết nhỏ",
            ngay: "22 - 23 tháng 11",
            img: "image/TietKhi/i_tieutuyet.png"
        },
        {
            ten: "Đại Tuyết",
            y_nghia: "Tuyết dày",
            ngay: "6 - 7 tháng 12",
            img: "image/TietKhi/i_daituyet.png"
        },
        {
            ten: "Đông chí ",
            y_nghia: "Giữa đông",
            ngay: "21 - 22 tháng 12",
            img: "image/TietKhi/i_dongchi.png"
        },
        {
            ten: "Tiểu Hàn",
            y_nghia: "Rét nhẹ",
            ngay: "5 - 6 tháng 1",
            img: "image/TietKhi/i_tieuhan.png"
        },
        {
            ten: "Đại Hàn",
            y_nghia: "Rét đậm",
            ngay: "20 - 21 tháng 1",
            img: "image/TietKhi/i_daihan.png"
        },
        {
            ten: "Lâp Xuân",
            y_nghia: "Đầu xuân",
            ngay: "4 - 5 tháng 2",
            img: "image/TietKhi/i_lapxuan.png"
        }, {
            ten: "Vũ Thuỷ",
            y_nghia: "Mưa ẩm",
            ngay: "18 - 19 tháng 2",
            img: "image/TietKhi/i_vuthuy.png"
        },
        {
            ten: "Kinh Trập",
            y_nghia: "Sâu nở",
            ngay: "5 - 6 tháng 3",
            img: "image/TietKhi/i_kinhtrap.png"
        }
    ];
    return (
        <div className={''} style={{display:props.show ? "block":"none"}}>
            <div className={'gb-tiet-khi'} onClick={props.closeTietKhi}></div>
            <div className={'tiet_khi_all'}>

                <div className={'tiet_khi_header'}>
                    <div className={'header_first'}>
                        <div className={'name_tiet_khi'}>
                            <p>
                                Tiết khí
                            </p>
                            <p>
                                Nguồn Wikipedia
                            </p>
                        </div>
                        <div className={'close_tiet_khi'} onClick={props.closeTietKhi}>
                            <i className="far fa-times-circle"></i>
                        </div>
                    </div>
                    <div className={'header_last'}>
                        <p>
                            Tiết khí (Hán văn phồn thể: 節氣; Hán văn giản thể: 节气; bính âm: Jiéqì) là 24 điểm đặc biệt trên
                            quỹ đạo của Trái Đất xung quanh Mặt Trời, mỗi điểm cách nhau 15°. Nó được sử dụng trong công tác
                            lập lịch của các nền văn minh phương đông cổ đại như Trung Quốc, Việt Nam, Nhật Bản, Triều Tiên
                            để đồng bộ hóa các mùa. Ở Việt Nam có một số học giả phân biệt tiết và khí. Họ cho rằng cứ một
                            tiết lại đến một khí. Tuy nhiên để dễ hiểu, nhiều người vẫn gọi chung là tiết khí hoặc đơn giản
                            chỉ là tiết.
                        </p>
                    </div>
                </div>
                <hr/>
                <div className={'tiet_khi_content'}>
                    {
                        tietkhi_arr.map((v,i)=>{
                            return (
                                <div key={i} className={'item-tietkhi'}>
                                    <div className={'item_tk_1'}>
                                        <img src={v.img} alt="" width={50} height={50}/>
                                        <div className={'name_tietkhi'}>
                                            <p className={'name_tk'}>
                                                {v.ten}
                                            </p>
                                            <p className={'yngia_tk'}>
                                                {v.y_nghia}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={'ngay_tiet_khi'}>
                                        {v.ngay}
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default TietKhiPopup;