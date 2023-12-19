import MetaHead from "@/components/MetaHead";
import { Container } from "react-bootstrap";

const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;
const TaiAppNhanQua = () => {
  return (
    <div
      className={"tai-app-nhan-qua"}
      style={{
        maxWidth: 500,
        margin: "10px auto",
      }}
    >
      <MetaHead title="Lịch Việt | Tải app nhận quà" />
      <a
        href="https://kplusvn.onelink.me/kml2/dsozqa6u"
        target="_blank"
        rel="noreferrer"
        className="position-relative d-flex align-items-center"
      >
        <img
          src="/image/banner_tai_app_nhan_qua2.jpg"
          className="object-fit-contain w-full"
          alt=""
        />
      </a>
      <Container
        style={{
          display: "flex",
          gap: "10px",
          padding: "10px 16px",
          flexDirection: "column",
        }}
      >
        <p>
          Trở lại và lợi hại hơn xưa! Lựa chọn tốt nhất cho tài khoản tiết kiệm
          của bạn với tiền gửi kỳ hạn 6 tháng, lãi suất cao nhất 6,0%/năm cộng
          thêm thưởng tiền mặt 0,5%. <br /> <br />
          Mở tiết kiệm ngay hôm nay qua ứng dụng ngân hàng di động K PLUS
          Vietnam.{" "}
        </p>
        <div>
          <p>
            <strong>Điều kiện chương trình:</strong>
          </p>
          <div className="d-flex justify-content-start align-items-start gap-2 my-1">
            <img
              src="/image/checkbox_green.jpg"
              width={26}
              height={26}
              alt=""
            />
            <p>
              Mở tài khoản tiền gửi kỳ hạn 6 tháng từ 20 triệu đồng - 2 tỷ đồng.
            </p>
          </div>
          <div className="d-flex justify-content-start align-items-start gap-2 my-1">
            <img
              src="/image/checkbox_green.jpg"
              width={26}
              height={26}
              alt=""
            />
            <p>
              Mở tài khoản trực tuyến K PLUS và duy trì số dư cuối ngày tương
              đương 10% số tiền gửi có kỳ hạn trong suốt kỳ hạn.
            </p>
          </div>
          <div className="d-flex justify-content-start align-items-start gap-2 my-1">
            <img
              src="/image/checkbox_green.jpg"
              width={26}
              height={26}
              alt=""
            />
            <p>
              Nhận thưởng tiền mặt 0,5% lên đến 10 triệu đồng vào cuối kỳ hạn
              gửi tiền.
            </p>
          </div>
          <div className="d-flex justify-content-start align-items-start gap-2 my-1">
            <img
              src="/image/checkbox_green.jpg"
              width={26}
              height={26}
              alt=""
            />
            <p>
              Áp dụng cho khách hàng chưa từng mở tài khoản gửi tiền có kỳ hạn
              tại KBank.
            </p>
          </div>
          <div className="d-flex justify-content-start align-items-start gap-2 my-1">
            <img
              src="/image/checkbox_green.jpg"
              width={26}
              height={26}
              alt=""
            />
            <p>
              Chương trình áp dụng cho một tài khoản tiền gửi hợp lệ trên mỗi
              khách hàng hợp lệ.
            </p>
          </div>
        </div>
        <div>
          <p>
            <strong>Thời gian áp dụng:</strong>
          </p>
          <div className="d-flex justify-content-start align-items-start gap-2 my-1">
            <img src="/image/icon_dong_ho.jpg" width={26} height={26} alt="" />
            <p>4/12/2023 - 31/01/2024</p>
          </div>
        </div>
        <div>
          <div
            style={{
              borderRadius: "7.5px 7.5px 0px 0px",
              background: "linear-gradient(180deg, #44AA6B 0%, #1E924B 100%)",
            }}
          >
            <p
              className="text-center"
              style={{
                fontWeight: 600,
                padding: 10,
                color: "#fff",
              }}
            >
              Hướng dẫn đăng ký Tài khoản tiết kiệm 6 tháng với siêu lãi suất
            </p>
          </div>
          <img
            src="/image/bg_hd_kbank.jpg"
            width={800}
            className="w-full"
            alt=""
          />
        </div>
        <a
          href="https://kplusvn.onelink.me/kml2/dsozqa6u"
          target="_blank"
          className="text-center"
          rel="noreferrer"
        >
          <img
            src="/image/button_dang_ky_ngay.png"
            className="object-fit-contain"
            width={190}
            alt=""
          />
        </a>
      </Container>
      <div
        className="px-4 d-flex justify-content-evenly gap-4"
        style={{
          backgroundImage: "url(/image/background_footer_kbank.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          paddingBottom: 55,
          paddingTop: 45,
          marginTop: "-30px",
        }}
      >
        <a
          href="https://kplusvn.onelink.me/kml2/dsozqa6u"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#16A168",
            padding: 10,
            flex: 1,
            fontSize: "13px",
            borderRadius: "5px",
            boxShadow: "rgb(51 50 50) 1px 2px 3px 0px",
          }}
        >
          <p className="text-center mb-1">
            <img src="/image/icon_download.png" width={30} height={30} alt="" />
          </p>
          <p className="text-white text-center">Tải ứng dụng K PLUS Vietnam</p>
        </a>
        <a
          href="https://kbankwbg.co/3GmteDL"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#16A168",
            padding: 10,
            flex: 1,
            fontSize: "13px",
            borderRadius: "5px",
            boxShadow: "rgb(51 50 50) 1px 2px 3px 0px",
          }}
        >
          <p className="text-center mb-1">
            <img src="/image/icon_notebook.png" width={30} height={30} alt="" />
          </p>
          <p className="text-white text-center">
            Điều khoản và điều kiện chi tiết của chương trình
          </p>
        </a>
        <a
          href="https://youtu.be/MZEoquhzqW0"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#16A168",
            padding: 10,
            flex: 1,
            fontSize: "13px",
            borderRadius: "5px",
            boxShadow: "rgb(51 50 50) 1px 2px 3px 0px",
          }}
        >
          <p className="text-center mb-1">
            <img src="/image/icon_play.png" width={30} height={30} alt="" />
          </p>
          <p className="text-white text-center">
            Xem video hướng dẫn đăng ký K PLUS Vietnam
          </p>
        </a>
      </div>

      {/*<Container className={'mt-4 '}>*/}
      {/*    <h5 className={'tb title-page'}>3 bước đơn giản để nhận thưởng từ <br/> KBank & Lịch Việt</h5>*/}
      {/*    <Col md={5} className={'steps mt-4 mx-auto px-1'}>*/}
      {/*        <div className={'step'}>*/}
      {/*            <div className={'group_dotter'}>*/}
      {/*                <p className={'_icon'}>*/}
      {/*                    <img src={BASE_URL_IMAGE + "/images/taiappnhanqua/download.png"} width={23} alt=""/>*/}
      {/*                </p>*/}
      {/*                <span/>*/}
      {/*                <span/>*/}
      {/*                <span/>*/}
      {/*                <span/>*/}
      {/*                <span/>*/}
      {/*                <span/>*/}
      {/*                <span/>*/}
      {/*                <span/>*/}
      {/*            </div>*/}
      {/*            <div className={'_text'}>*/}
      {/*                <p className={'step_title'}>Tải ứng dụng <b>K PLUS Vietnam</b> và nhập mã giới*/}
      {/*                    thiệu <b>LICHVIET23</b></p>*/}
      {/*                <div className={'icon-kbank'}>*/}
      {/*                    <a href="https://onelink.to/4ujbhq" rel={'noreferrer'} target={'_blank'}>*/}
      {/*                        <img width={57.4} src={BASE_URL_IMAGE + "/images/taiappnhanqua/i_KBank.png"} alt=""/>*/}
      {/*                    </a>*/}
      {/*                    <img width={15}*/}
      {/*                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFYSURBVHgBxdZBSsNAFAbg/80Uu80RegTdWIobA7WbijAnUE8gvUF7A49QTxBBdxbaXXVlbmCP0GVRZ54z1kIIJm3IJPkhkLxk+MjMZCYED3mavd4xYWxP15pppPrdx31tCCUTzZcdqekjWROgm8t+9yGvnUDJHH3JIF0z4Onz7O0aVcLDwWlsu22Bgnhp2OVbthWBYhTAS4/xLtH8PWjpzzmDj9P3NEilJ5w3OB+ntTYUKjsslcBFcO/woXglcC5OWGnRPqHdQ9hsAviONIGUMgKjkywz84TcdDfE9/amfzgr9q2FRce1oi62B0Tt6F8cPEHNYSCueHLJQAoT2bNOsqwZo4Y+Jw7rXUAIayl0OAzP4vqWzAS6vWwA3ZYaQF28/Ajk7sWGVRr1BmehMHyrLnqL/9qUhqOX5XkWejXoTbPalX/jFlYoiHqBVdhbuW3OTaLf4wDU5Qd7ZOJMsO3nOAAAAABJRU5ErkJggg=="*/}
      {/*                         alt=""/>*/}
      {/*                    <img className={'unlock_code'} src={BASE_URL_IMAGE + "/images/taiappnhanqua/unlock_code.png"} alt="" width={25}/>*/}
      {/*                    <div className={'ma_gioi_thieu'}>*/}
      {/*                        <p className={'text_mgt'}>Mã giới thiệu</p>*/}
      {/*                        <p className={'code_mgt'}>LICHVIET23</p>*/}
      {/*                    </div>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*        <div className={'step'}>*/}
      {/*            <div className={'group_dotter'}>*/}
      {/*                <p className={'_icon'}>*/}
      {/*                    <img style={{marginRight: "-5px"}} src={BASE_URL_IMAGE + "/images/taiappnhanqua/register.png"} width={23} alt=""/>*/}
      {/*                </p>*/}
      {/*                <span/>*/}
      {/*                <span/>*/}
      {/*                <span/>*/}
      {/*            </div>*/}

      {/*            <div className={'_text'}>*/}
      {/*                <p className={'step_title'}>Đăng ký tài khoản <b>K PLUS Vietnam</b></p>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*        <div className={'step'}>*/}
      {/*            <div className={'group_dotter'}>*/}
      {/*                <p className={'_icon'}>*/}
      {/*                    <img src={BASE_URL_IMAGE + "/images/taiappnhanqua/gift.png"} width={21} alt=""/>*/}
      {/*                </p>*/}
      {/*            </div>*/}
      {/*            <div className={'_text'}>*/}
      {/*                <p className={'m-0'}>Nhận ngay mã code <b><span className={'color_red tb'}>6 tháng Chọn ngày tốt & Bỏ toàn bộ quảng cáo trên ứng dụng Lịch Việt</span></b></p>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*        <div className={'mt-2 dieu-khoan'}>*/}
      {/*            <i>*/}
      {/*                <a href="https://www.kasikornbank.com.vn/VN/Campaign/Pages/LichViet23_6MonthPropackage.aspx"*/}
      {/*                   className={'underlined tb text-black'} rel={'noreferrer'} target={'_blank'}>Điều khoản sử*/}
      {/*                    dụng</a>*/}
      {/*            </i>*/}
      {/*        </div>*/}
      {/*        <div className={'pb-2 d-flex align-items-end justify-content-between download-css'}>*/}
      {/*            <img src={BASE_URL_IMAGE + "/images/dich_vu/xnt_mobile.png"} className={'hidden-md'} width={150} alt=""/>*/}
      {/*            <a href="https://onelink.to/4ujbhq" className={'button__download no-hover one'}>*/}
      {/*                tải ngay*/}
      {/*            </a>*/}
      {/*        </div>*/}
      {/*    </Col>*/}

      {/*    <Row className=" mx-auto steps_img-active hidden-xs col-9">*/}
      {/*        <Col md={6} className={'text-left'}>*/}
      {/*            <img src={BASE_URL_IMAGE + "/images/dich_vu/boy_lichviet_xnt.png"} alt=""*/}
      {/*                 width="260" className="img-scale-down"/>*/}
      {/*        </Col>*/}
      {/*        <Col md={6} className={'text-right'}>*/}
      {/*            <img src={BASE_URL_IMAGE + "/images/dich_vu/gift_lichviet_xnt.png"} alt=""*/}
      {/*                 width="300" className="img-scale-down"/>*/}
      {/*        </Col>*/}
      {/*    </Row>*/}
      {/*</Container>*/}
      {/*<Container>*/}
      {/*    <hr/>*/}
      {/*    <Col md={8} className={'mx-auto p-sx-0'}>*/}
      {/*        <h5 className={'text-center title-page'}>*/}
      {/*            Hướng dẫn 3 bước tạo tài khoản K PLUS Vietnam để nhận ngay quà tặng từ Lịch Việt*/}
      {/*        </h5>*/}
      {/*        <div className={'video-youtube'}>*/}
      {/*            <iframe width="560" height="315" src="https://www.youtube.com/embed/nTPwE5yxeKs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>*/}
      {/*        </div>*/}
      {/*        <Col className={'note-important mx-auto'}>*/}
      {/*            <p className={'text-red'}>Lưu ý quan trọng khi đăng ký tài khoản Kplus:</p>*/}
      {/*            <Row className={'mb-3 align-items-center'}>*/}
      {/*                <Col md={7} className={'d-flex align-items-start'}>*/}
      {/*                    <img src={BASE_URL_IMAGE + '/images/icon/icon_warning.png'} className={'mr-3 mt-1'} alt="" width={20}/>*/}
      {/*                    <p style={{fontWeight: 500}}><span className={'text-red'}>Chỉ nhập tiếng Việt KHÔNG DẤU</span>. Ở các trường thông tin, khi nhập tiếng việt có dấu sẽ báo không hợp lệ.</p>*/}
      {/*                </Col>*/}
      {/*                <Col md={5}>*/}
      {/*                    <img src={BASE_URL_IMAGE + "/images/dich_vu/warning1.png"} alt=""/></Col>*/}
      {/*            </Row>*/}
      {/*            <Row className={'mb-3 align-items-center'}>*/}
      {/*                <Col md={7} className={'d-flex align-items-start'}>*/}
      {/*                    <img src={BASE_URL_IMAGE + '/images/icon/icon_warning.png'} className={'mr-3 mt-1'} alt="" width={20}/>*/}
      {/*                    <p style={{fontWeight: 500}}><span className={'text-red'}>Không chụp ảnh CCCD có bóng sáng.</span> Bạn nên tìm địa điểm không có bóng sáng từ đèn để chụp ảnh.</p>*/}
      {/*                </Col>*/}
      {/*                <Col md={5}>*/}
      {/*                    <img src={BASE_URL_IMAGE + "/images/dich_vu/warning2.png"} alt=""/></Col>*/}
      {/*            </Row>*/}
      {/*        </Col>*/}
      {/*        <Col className={'huong-dan mx-auto'}>*/}
      {/*            <div className={'title p-sx-0'}>*/}
      {/*                <p>*/}
      {/*                    Sau khi nhận mã quà tặng, bạn có thể kích hoạt mã 6 tháng gói "Chọn Ngày Tốt" & "Bỏ quảng cáo" trên Lịch Việt theo 2 cách:*/}
      {/*                </p>*/}
      {/*            </div>*/}
      {/*            <div className={'hd c1 p-sx-0'}>*/}
      {/*                <p>Cách 1</p>*/}
      {/*                <div>*/}
      {/*                    <p className={'m-0'}>Kích hoạt mã trên ứng dụng Lịch Việt, truy cập link:&nbsp;</p>*/}
      {/*                    <a href="https://deeplink.lichviet.app/redeemcode" className={'text-blue'}>https://deeplink.lichviet.app/redeemcode</a>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*            <div className={'hd c2 p-sx-0'}>*/}
      {/*                <p>Cách 2</p>*/}
      {/*                <div>*/}
      {/*                    <p className={'m-0'}>Kích hoạt mã trên website, truy cập link: &nbsp;</p>*/}
      {/*                    <a href="https://lichviet.app/kich-hoat-pro" className={'text-blue'}>https://lichviet.app/kich-hoat-pro</a>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </Col>*/}
      {/*    </Col>*/}
      {/*    <hr/>*/}
      {/*    <Col md={8} className={'mx-auto mt-3 p-sx-0'}>*/}
      {/*        <h5 className={'text-center title-page'}>*/}
      {/*            K PLUS Vietnam - Giúp bạn quản lý tài chính đơn giản và nhận nhiều ưu đãi hấp dẫn!*/}
      {/*        </h5>*/}
      {/*        <div className={'d-flex justify-content-center py-3'}>*/}
      {/*            <a href="https://onelink.to/4ujbhq">*/}
      {/*                <img src={BASE_URL_IMAGE + "/images/taiappnhanqua/i_KBank.png"} alt="" width={80} height={80}/>*/}
      {/*            </a>*/}
      {/*        </div>*/}
      {/*        <Col md={10}>*/}
      {/*            <p className={'kbank-info'}>"K PLUS Vietnam" - ứng dụng ngân hàng di động từ ngân hàng KASIKORN - Top 3 ngân hàng lớn nhất của Thái Lan,*/}
      {/*                với hơn 70 năm hoạt động & được cấp phép hoạt động tại Việt Nam vào năm 2021. Ứng dụng có nhiều tính năng*/}
      {/*                nổi bật như:</p>*/}
      {/*        </Col>*/}
      {/*        <Row>*/}
      {/*            <Col md={8}>*/}
      {/*                <ul className={'kbank-preferential'}>*/}
      {/*                    <li><img src={BASE_URL_IMAGE + "/images/icon/check.png"} width={20} alt=""/><p>Hoàn tiền hấp dẫn khi nạp thẻ điện thoại</p></li>*/}
      {/*                    <li><img src={BASE_URL_IMAGE + "/images/icon/check.png"} width={20} alt=""/><p>Miễn phí mọi giao dịch 24/7!</p></li>*/}
      {/*                    <li><img src={BASE_URL_IMAGE + "/images/icon/check.png"} width={20} alt=""/><p>Nạp tiền hay thanh toán cũng được hoàn tiền thả ga!</p></li>*/}
      {/*                    <li><img src={BASE_URL_IMAGE + "/images/icon/check.png"} width={20} alt=""/><p>Công nghệ mã bảo mật OTP tiên tiến.</p></li>*/}
      {/*                    <li><img src={BASE_URL_IMAGE + "/images/icon/check.png"} width={20} alt=""/><p>Có thể mở tài khoản trực tuyến</p></li>*/}
      {/*                </ul>*/}
      {/*            </Col>*/}
      {/*            <Col md={4}>*/}
      {/*                <img className={'hidden-xs kbank-preferential-img'}  width={270}  src={BASE_URL_IMAGE + "/images/dich_vu/app-kbank.png"} alt=""/>*/}
      {/*            </Col>*/}
      {/*        </Row>*/}
      {/*        <div className={'pb-2 d-flex'}>*/}
      {/*            <a href="https://onelink.to/4ujbhq" className={'button__download no-hover'} style={{margin: '20px auto 0'}}>*/}
      {/*                tải ngay*/}
      {/*            </a>*/}
      {/*        </div>*/}
      {/*    </Col>*/}
      {/*    <hr/>*/}
      {/*    <Col md={10} className={'mx-auto p-xs-0'}>*/}
      {/*        <h5 className={'text-center title-page'}>*/}
      {/*            Nhập mã giới thiệu <span className={'text-green'}>"LICHVIET23"</span> khi đăng ký tài khoản K PLUS*/}
      {/*            NHẬN NGAY gói "Chọn Ngày Tốt" & "Bỏ quảng cáo"*/}
      {/*            6 tháng miễn phí!!!*/}
      {/*        </h5>*/}
      {/*        <Row className={'ma-gioi-thieu'}>*/}
      {/*            <Col md={5} className={'icon-lich-chon-ngay-tot'}>*/}
      {/*                <img src={BASE_URL_IMAGE + '/images/dich_vu/lich_chon_ngay_tot.png'} alt="" width={400}/>*/}
      {/*            </Col>*/}

      {/*            <Col md={7}>*/}
      {/*                <p className={'title-feature p-xs-0'}>Tính năng "Chọn Ngày Tốt" giúp bạn:</p>*/}
      {/*                <div className={'lv-feature'}>*/}
      {/*                    <ul className={'p-xs-0'}>*/}
      {/*                        <li>*/}
      {/*                            <img*/}
      {/*                                width={25}*/}
      {/*                                height={25}*/}
      {/*                                src="data:image/png;base64,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"*/}
      {/*                                alt=""/>*/}
      {/*                            <p>Chọn ngày tốt khai trương, ma chay, cưới hỏi, động thổ, mua nhà, mua xe... nhanh chóng</p>*/}
      {/*                        </li>*/}
      {/*                        <li>*/}
      {/*                            <img*/}
      {/*                                width={25}*/}
      {/*                                height={25}*/}
      {/*                                src="data:image/png;base64,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"*/}
      {/*                                alt=""/>*/}
      {/*                            <p>Được phân tích cá nhân hóa dựa trên ngày, tháng, năm, sinh của bạn</p>*/}
      {/*                        </li>*/}
      {/*                        <li>*/}
      {/*                            <img*/}
      {/*                                width={25}*/}
      {/*                                height={25}*/}
      {/*                                src="data:image/png;base64,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"*/}
      {/*                                alt=""/>*/}
      {/*                            <p>BỎ TOÀN BỘ QUẢNG CÁO trên ứng dụng Lịch Việt</p>*/}
      {/*                        </li>*/}
      {/*                    </ul>*/}

      {/*                </div>*/}
      {/*                <p className={'title-feature p-xs-0'}>TẢI K PLUS NGAY ĐỂ NHẬN VÔ VÀN ƯU ĐÃI</p>*/}
      {/*            </Col>*/}
      {/*            <Col className={'hidden-md'}>*/}
      {/*                <div className={'pb-2 justify-content-center mt-3 mt-md-0 d-flex'}>*/}
      {/*                    <a href="https://onelink.to/4ujbhq" className={'button__download no-hover'}>*/}
      {/*                        tải ngay*/}
      {/*                    </a>*/}
      {/*                </div>*/}
      {/*            </Col>*/}

      {/*        </Row>*/}
      {/*        <div className={'pb-2 d-flex justify-content-center mt-3 mt-md-0 hidden-xs'}>*/}
      {/*            <a href="https://onelink.to/4ujbhq" className={'button__download no-hover'}>*/}
      {/*                tải ngay*/}
      {/*            </a>*/}
      {/*        </div>*/}
      {/*    </Col>*/}
      {/*</Container>*/}
    </div>
  );
};

export default TaiAppNhanQua;
