import {Col} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import TietKhiPopup from "../TietKhiPopup";
import SendUrl from "../../Core/SendDataUrl";
import LoaderData from "../Loader";

const ViewTietKhi = props => {
    const [TietKhi, setTietKhi] = useState(null);

    useEffect(() => {
        const dataCTN = {
            loai: 1,
            ngay: props.date.d + "-" + props.date.m + "-" + props.date.y
        }
        GetTietKhi(dataCTN);
    }, [props.date]);

    const GetTietKhi = (data) => {
        SendUrl(data, '/api/lich/tiet-khi', 'POST').then(
            function (res) {
                if (res.data.status == 1) {
                    setTietKhi(res.data.data);
                }
            }
        )
    }
    const TietKhiImage = {
        1: "image/TietKhi/i_xuanphan.png",
        2: "image/TietKhi/i_thanhminh.png",
        3: "image/TietKhi/i_cocvu.png",
        4: "image/TietKhi/i_lapha.png",
        5: "image/TietKhi/i_tieuman.png",
        6: "image/TietKhi/i_mangchung.png",
        7: "image/TietKhi/i_hachi.png",
        8: "image/TietKhi/i_tieuthu.png",
        9: "image/TietKhi/i_daithu.png",
        10: "image/TietKhi/i_lapthu.png",
        11: "image/TietKhi/i_xuthu.png",
        12: "image/TietKhi/i_bachlo.png",
        13: "image/TietKhi/i_thuphan.png",
        14: "image/TietKhi/i_hanlo.png",
        15: "image/TietKhi/i_suonggiang.png",
        16: "image/TietKhi/i_lapdong.png",
        17: "image/TietKhi/i_tieutuyet.png",
        18: "image/TietKhi/i_daituyet.png",
        19: "image/TietKhi/i_dongchi.png",
        20: "image/TietKhi/i_tieuhan.png",
        21: "image/TietKhi/i_daihan.png",
        22: "image/TietKhi/i_lapxuan.png",
        23: "image/TietKhi/i_vuthuy.png",
        24: "image/TietKhi/i_kinhtrap.png"
    };

    //tính từ lập xuân id lập xuân == 22 chuyển về 0
    const ColorTheoNgayTietKhi ={
        22:[{min:1,max:7,color:"#ffdf7f"},{min:8,max:14,color:"#dd0000"},{min:15,color:"#6edd00"}],
        23:[{min:1,color:"#6edd00"}],
        24:[{min:1,color:"#6edd00"}],
        1:[{min:1,color:"#6edd00"}],
        2:[{min:1,max:9,color:"#6edd00"},{min:10,max:12,color:"#006edd"},{min:13,color:"#ffdf7f"}],
        3:[{min:1,color:"#ffdf7f"}],
        4:[{min:1,max:5,color:"#ffdf7f"},{min:6,max:14,color:"#000000"},{min:15,color:"#dd0000" }],
        5:[{min:1,color:"#dd0000"}],
        6:[{min:1,color:"#dd0000"}],
        7:[{min:1,color:"#dd0000"}],
        8:[{min:1,max:9,color:"#dd0000"},{min:10,max:12,color:"#6edd00"},{min:13,color:"#ffdf7f"}],
        9:[{min:1,color:"#ffdf7f"}],
        10:[{min:1,max:10,color:"#ffdf7f"},{min:11,max:13,color:"#006edd"},{min:14,color:"#000000"}],
        11:[{min:1,color:"#000000"}],
        12:[{min:1,color:"#000000"}],
        13:[{min:1,color:"#000000"}],
        14:[{min:1,max:9,color:"#000000"},{min:10,max:12,color:"#dd0000"},{min:13,color:"#ffdf7f"}],
        15:[{min:1,color:"#ffdf7f"}],
        16:[{min:1,max:8,color:"#ffdf7f"},{min:9,max:12,color:"#6edd00"},{min:13,color:"#006edd"}],
        17:[{min:1,color:"#006edd"}],
        18:[{min:1,color:"#006edd"}],
        19:[{min:1,color:"#006edd"}],
        20:[{min:1,max:9,color:"#006edd"},{min:10,max:12,color:"#000000"},{min:13,color:"#ffdf7f"}],
        21:[{min:1,color:"#ffdf7f"}]
    };
    const setWidthTietKhi = (moc1, moc2, hientai,id_tietkhi =null) => {
        //mốc1 == 1 thì trừ 1 vì trừ đi cái số trên hình tiết khí (VD: 1)
        var day = moc2 - moc1 - (moc2 > 20 ? 0 : 1);
        return (
            <>
                {
                    Array.from({length: day}, function (v, k) {
                        var color = "#000000";
                        var BG = "#E5E5E5";
                        var Mau = {CL:color,BG:BG}
                        if (k + moc1 + 1 <= hientai){
                            Mau = SetColorTietKhi(k+2,id_tietkhi);
                        }
                        return (
                            <span className={"item-range "} key={k}
                                  style={{
                                      width: "calc( 100% / " + day + " - 2px)",
                                      background:Mau.BG,
                                      color:Mau.CL
                                  }}>
                                {moc1 + k + 1}
                                {
                                    k + 1 == hientai - moc1 ?
                                        <i className="fas fa-caret-down moc-tiet-khi"></i>
                                        : ""
                                }
                            </span>
                        )
                    })
                }
            </>
        )
    }
    const SetColorTietKhi = (k,id_tietkhi)=>{
        if (k){
            const setColor = ColorTheoNgayTietKhi[id_tietkhi].filter((v)=>{
                return (k >=v.min && k <=v.max) || (k >=v.min && !v.max);
            });
            var BG = setColor.length ? setColor[0].color : "#E5E5E5";
            var color = setColor.length ? "#ffffff" : "#000000";
            return {CL:color,BG:BG};
        }
        return {};
    }
    return (
        <>
            <TietKhiPopup
                show={props.showTietKhi}
                closeTietKhi={props.setShowTietKhi}
            />
            {
                TietKhi ?
                    <Col md={9} className={' mt-md-3 mx-auto p-xs-0'}>
                        <div className={'calendar-day tiet_khi'}>
                            <div className="font-weight-bold title-footer text-uppercase">TIẾT KHÍ</div>
                            <div className={'div-range'}>

                                <div className={'box-range'} onClick={props.setShowTietKhi} style={{
                                    borderColor:SetColorTietKhi(1,TietKhi.moc1.id).BG
                                }}>
                                    <p style={{
                                        position: "absolute", top: "-25px"

                                    }}
                                       className={TietKhi.moc1.ngay_tietkhi === TietKhi.ngay_hientai ? 'text-red tb' : ""}>
                                        {TietKhi.moc1.ngay_tietkhi}
                                    </p>
                                    <img src={TietKhiImage[TietKhi.moc1.id]} alt=""/>
                                    <div className={'text-box'}>
                                        <p className={'m-0 font-weight-bold'}>
                                            {TietKhi.moc1.ten}
                                        </p>
                                        <p className={'m-0 '}>
                                            {TietKhi.moc1.ten_thang}
                                        </p>
                                        <p className={'house-day'}>
                                            Khởi tiết {TietKhi.moc1.gio_tiet_khi}
                                        </p>
                                        <p className={'house-day m-0'}>
                                            {TietKhi.moc1.ngay_duong.replace("-", ' tháng ')}
                                        </p>
                                    </div>
                                </div>
                                <div className={'box-input-range'}>
                                    <div className={'input-range'}>
                                        {setWidthTietKhi(TietKhi.moc1.ngay_tietkhi, TietKhi.moc2.ngay_tietkhi, TietKhi.ngay_hientai,TietKhi.moc1.id)}
                                    </div>
                                </div>
                                <div className={'box-range'} onClick={props.setShowTietKhi}>
                                    <p style={{
                                        position: "absolute",
                                        top: "-25px"
                                    }}>{TietKhi.moc2.chuyen_giao ?? TietKhi.moc2.ngay_tietkhi}</p>
                                    <img src={TietKhiImage[TietKhi.moc2.id]} alt=""/>
                                    <div className={'text-box'}>
                                        <p className={'m-0 font-weight-bold'}>
                                            {TietKhi.moc2.ten}
                                        </p>
                                        <p className={'m-0 '}>
                                            {TietKhi.moc2.ten_thang}
                                        </p>
                                        <p className={'house-day'}>
                                            Chuyển tiết {TietKhi.moc2.gio_tiet_khi}
                                        </p>
                                        <p className={'house-day m-0'}>
                                            {TietKhi.moc2.ngay_duong.replace("-", '  tháng ')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    :
                    <LoaderData />
            }
        </>
    )
}
export default ViewTietKhi;