import React, {forwardRef} from "react";

const SaoNamCP = (props,ref) => {
    const data = props.data;
    const Son = [
        [
            {
                stt: 4,
                name: 'Tốn',
                color: "color_3",
                son: [{id: 10, name: 'Thìn'}, {id: 11, name: 'Tốn'}, {id: 12, name: 'Tị'}],
                huong: 'Đông Nam',
                image:"image/que/4_Ton.png"
            },
            {
                stt: 9,
                name: 'Ly',
                color: "color_5",
                son: [{id: 13, name: 'Bính'}, {id: 14, name: 'Ngọ'}, {id: 15, name: 'Định'}],
                huong: 'Nam',
                image:"image/que/9_Ly.png"
            },
            {
                stt: 2,
                name: 'Khôn',
                color: "color_2",
                son: [{id: 16, name: 'Mùi'}, {id: 17, name: 'Khôn'}, {id: 18, name: 'Thân'}],
                huong: 'Tây Nam',
                image:"image/que/2_Khon.png"
            },

        ],
        [
            {
                stt: 3,
                name: 'Chấn',
                color: "color_3",
                son: [ {id: 9, name: 'Giáp'}, {id: 8, name: 'Mão'},{id: 7, name: 'Ất'}],
                huong: 'Đông',
                image:"image/que/3_Chan.png"
            },
            {
                stt: 5,
                name: 'Trung',
                color: "color_2",
                son: [{name: 'Mậu'}, {name: 'Kỷ'}],
                huong: '',
                image:""
            },
            {
                stt: 7,
                name: 'Đoài',
                color: "color_4",
                son: [{id: 19, name: 'Canh'}, {id: 20, name: 'Mậu'}, {id: 21, name: 'Tân'}],
                huong: 'Tây',
                image:"image/que/7_Doai.png"
            }
        ],
        [
            {
                stt: 8,
                name: 'Cấn',
                color: "color_2",
                son: [{id: 4, name: 'Dần'}, {id: 5, name: 'Cấn'}, {id: 6, name: 'Sửu'}],
                huong: 'Đông Bắc',
                image:"image/que/8_Can.png"
            },
            {
                stt: 1,
                name: 'Khảm',
                color: "color_1",
                son: [{id: 1, name: 'Quý'}, {id: 2, name: 'Tý'}, {id: 3, name: 'Nhâm'}],
                huong: 'Bắc',
                image:"image/que/1_Kham.png"
            },
            {
                stt: 6,
                name: 'Càn',
                color: "color_4",
                son: [{id: 22, name: 'Tuất'}, {id: 23, name: 'Càn'}, {id: 24, name: 'Hợi'}],
                huong: 'Tây Bắc',
                image:"image/que/6_Can.png"
            }

        ]
    ];

    const clearSao = (data, name) => {
        var out = [[], []];
        data.filter((t) => {
            return (t.hau_thien == name)
        }).forEach((v) => {
            if (!out[0].includes(v.sao) == true) {
                out[0].push(v.sao);
                out[1].push(v.loai_sao);
            }
        })
        if (out[0].length > 0) {
            return out[0].map((i, k) => {
                return (
                    <span key={k}
                          className={out[1][k] == 0 ? 'text-black' : 'text-red'}>{i}{k + 1 < out[0].length ? ", " : ""}</span>
                );
            })
        } else {
            return (<>&nbsp;</>)
        }

    }
    const BoxSao = (value, key) => {
        return (
            <div key={key} className={'box_all_sao ' + value.color}>
                <div className={'saonam-header'}>
                    <div className={'header_stt'}>
                        <div className={'stt_son'}>
                            {value.stt}
                        </div>
                        <div className={'detail_son'}>
                            <p className={'son'}>{value.name}</p>
                            <p className={'huong'}>{value.huong}</p>
                        </div>
                    </div>
                    <div className={'d-flex justify-content-center'}>
                        {
                            value.image ?
                                <img src={value.image} alt="" width={35} height={35}/>
                                :
                                ""
                        }

                    </div>
                </div>
                <div className={'hau_thien'}>
                    {
                        clearSao(data, value.name)
                    }
                </div>
                <div className={'d-flex h-100'}>
                    {
                        value.son.map(function (v, i) {
                            return (
                                <div key={i} className={'ten_son'}
                                     style={{width: "calc(100% / " + value.son.length + ")"}}>
                                    <div className={'border-bottom'}>
                                        {v.name}
                                    </div>
                                    <div className={'all_sao_son'}>
                                        {
                                            !v.id ?
                                                data.filter((t) => {
                                                    return (i.hau_thien == v.name)
                                                }).map(function (o, p) {
                                                    return (
                                                        <p key={p}
                                                           className={o.loai_sao == 0 ? "text-black" : "text-red"}>
                                                            {o.sao}
                                                        </p>
                                                    )
                                                })
                                                : ""
                                        }
                                        {
                                            v.id ?
                                                data.filter((t) => {
                                                    return (t.id_son === v.id && !i.hau_thien)
                                                }).map(function (o, p) {
                                                    return (
                                                        <p key={p}
                                                           className={o.loai_sao == 0 ? "text-black" : "text-red"}>
                                                            {o.sao}
                                                        </p>
                                                    )
                                                })
                                                :
                                                <>
                                                    <p>&nbsp;</p>
                                                    <p>&nbsp;</p>
                                                </>
                                        }

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
    return (
        <div className={'d-gird-3 sao_al'}>
            {
                Son.map(function (value, index) {
                    return value.map(function (v, key) {
                        return BoxSao(v, key)
                    })
                })
            }
        </div>
    );


}

export default SaoNamCP;