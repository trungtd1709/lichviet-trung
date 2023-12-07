import MetaHead from "@/components/MetaHead";
import ImageProduct from "@/components/Ui/ImageProduct";
import Slider from "@/components/Ui/Slider";
import Link from "next/link";
import { Container } from "react-bootstrap";
// import Slider from "../Ui/Slider";
// import ImageProduct from "../Ui/ImageProduct";

const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;
const Product = () => {
  return (
    <>
      
      <MetaHead
        title="Lịch Việt | Ứng dụng"
        subtitle="Ứng dụng Lịch Việt - Lịch Vạn Niên được phát triển bởi PPCLINK có tác dụng xem ngày giờ tốt xấu, tra cứu ngày tháng năm âm & dương lịch."
      />
      <Slider
        banner={[BASE_URL_IMAGE + "/images/slider/slider2.jpg"]}
        title={"Lịch Việt - Xem Ngày Tốt, Tử vi & Phong Thuỷ"}
        description={
          "Ứng dụng tra cứu lịch vạn niên 2024, lịch âm dương, xem ngày tốt, tử vi & phong thủy theo ngày giờ sinh, quản lý lịch sự kiện cá nhân phổ biến nhất hiện nay. Tự hào là ứng dụng lịch đầu tiên cho người Việt cán mốc 15 TRIỆU lượt tải. Tải ứng dụng ngay để Lịch Việt giúp bạn thấu hiểu về bản thân, đưa ra các quyết định tài lộc, may mắn và quản lý công việc hằng ngày dễ dàng."
        }
        link={true}
      />
      <Container className={"mt-3"}>
        <div className={"d-flex justify-content-start align-items-start"}>
          <img
            src={"/images/logo_lichviet.png"}
            alt=""
            width={150}
            className={"img__mb-70 "}
          />
          <div className={"ml-md-4 ml-3 my-auto"}>
            <p className={"title-1 product"}>Lịch Việt - Lịch Vạn Niên 2024</p>
            <p>
              Ứng dụng xem ngày tốt, tử vi & phong thủy, tra cứu lịch âm dương
              và quản lý <br /> lịch sự kiện cá nhân phổ biến nhất.
            </p>
          </div>
        </div>
        <div className={"mt-md-5"}>
          <ImageProduct />
        </div>
        <h2 className={"py-4"}>Về ứng dụng Lịch Việt</h2>
        <div className={"content-product"}>
          <div className="content-description">
            <div>
              <span>
                Lịch Việt - Lịch vạn niên 2024 là ứng dụng tra cứu lịch âm
                dương, lịch tháng, lịch ngày, ngày tốt, tử vi & phong thủy theo
                ngày giờ sinh, xem thần số học, quản lý lịch sự kiện cá nhân phổ
                biến nhất hiện nay. Chúng tôi tự hào là ứng dụng lịch đầu tiên
                cho người Việt cán mốc 15 TRIỆU lượt tải.
              </span>
              <br />
              <span>
                Lịch Việt giúp bạn thấu hiểu về bản thân, đưa ra các quyết định
                tài lộc, may mắn và quản lý công việc hằng ngày dễ dàng.
              </span>
            </div>
            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <span>
                Những tiện ích hay khi bạn đăng nhập ứng dụng Lịch Việt::
              </span>
            </div>
            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <span>
                ► Tra cứu lịch &acirc;m dương, ng&agrave;y l&agrave;nh
                th&aacute;ng tốt, ng&agrave;y ki&ecirc;ng kỵ thuận tiện
                v&agrave; nhanh ch&oacute;ng:
              </span>
            </div>
            <div>
              <span>- Xem lịch ng&agrave;y&nbsp;</span>
            </div>
            <div>
              <span>- Xem lịch th&aacute;ng</span>
            </div>
            <div>
              <span>- Xem lịch &acirc;m h&ocirc;m nay</span>
            </div>
            <div>
              <span>- Tra cứu ng&agrave;y giờ tốt xấu</span>
            </div>
            <div>
              <span>- Đổi lịch dương - lịch &acirc;m</span>
            </div>
            <div>
              <span>- Widget lịch tuần, lịch th&aacute;ng</span>
            </div>
            <div>
              <span>
                - Chi tiết ng&agrave;y h&ocirc;m nay: Tiết kh&iacute;, tuổi
                xung, sao tốt - xấu, c&aacute;c việc n&ecirc;n l&agrave;m,
                kh&ocirc;ng n&ecirc;n l&agrave;m, giờ tốt trong
                ng&agrave;y,...ch&iacute;nh x&aacute;c theo hệ Lịch Hiệp Kỷ.
              </span>
            </div>
            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <span>
                ► Xem ng&agrave;y tốt - Lịch Việt ph&acirc;n t&iacute;ch
                ch&iacute;nh x&aacute;c theo ng&agrave;y sinh, l&agrave; ứng
                dụng duy nhất chọn ng&agrave;y tốt theo đủ 3 ti&ecirc;u
                ch&iacute; Thi&ecirc;n - Địa - Nh&acirc;n:
              </span>
            </div>
            <div>
              <span>- Xem ng&agrave;y xuất h&agrave;nh</span>
            </div>
            <div>
              <span>- Xem ng&agrave;y động thổ, l&agrave;m m&oacute;ng</span>
            </div>
            <div>
              <span>- Xem ng&agrave;y khởi c&ocirc;ng, x&acirc;y dựng</span>
            </div>
            <div>
              <span>- Xem ng&agrave;y nhập trạch</span>
            </div>
            <div>
              <span>- Xem ng&agrave;y khai trương</span>
            </div>
            <div>
              <span>- Xem ng&agrave;y cưới hỏi</span>
            </div>
            <div>
              <span>- Xem ng&agrave;y mua nh&agrave;</span>
            </div>
            <div>
              <span>- Xem ng&agrave;y mua xe</span>
            </div>
            <div>
              <span>
                - Đặt lịch xem ng&agrave;y tốt trực tuyến 1-1 với chuy&ecirc;n
                gia Lịch Việt
              </span>
            </div>
            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <span>
                ► Xem tử vi - Lịch Việt gi&uacute;p xem trọn bộ tử vi bao gồm:
              </span>
            </div>
            <div>
              <span>
                - Xem Tử vi 12 con gi&aacute;p h&agrave;ng ng&agrave;y&nbsp;
              </span>
            </div>
            <div>
              <span>- Xem Tử vi h&agrave;ng năm&nbsp;</span>
            </div>
            <div>
              <span>- Xem Tử vi trọn đời&nbsp;</span>
            </div>
            <div>
              <span>
                - Lập l&aacute; số tử vi theo ng&agrave;y giờ sinh &amp; xem
                luận giải chi tiết&nbsp;
              </span>
            </div>
            <div>
              <span>- Xem Tử vi 12 cung ho&agrave;ng đạo</span>
            </div>
            <div>
              <span>
                - Đặt lịch xem tử vi trực tuyến 1-1 với chuy&ecirc;n gia Lịch
                Việt
              </span>
            </div>
            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <span>
                ► Xem phong thuỷ dựa tr&ecirc;n Phong thủy B&aacute;t Trạch -
                Lịch Việt gi&uacute;p bạn:
              </span>
            </div>
            <div>
              <span>
                - Hướng tốt hợp mệnh, hướng mua đất, x&acirc;y nh&agrave;.
              </span>
            </div>
            <div>
              <span>
                - Hướng đặt b&agrave;n l&agrave;m việc, ph&ograve;ng ngủ&hellip;
                để tốt cho c&ocirc;ng việc v&agrave; sức khỏe.
              </span>
            </div>
            <div>
              <span>
                - Vị tr&iacute; đặt ph&ograve;ng kh&aacute;ch, ph&ograve;ng thờ,
                đặt bếp&hellip;&nbsp;
              </span>
            </div>
            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <span>► Quản l&yacute; sự kiện c&aacute; nh&acirc;n:</span>
            </div>
            <div>
              <span>
                - Đặt lịch &amp; nhắc nhở ng&agrave;y giỗ, hiếu hỷ theo lịch
                &acirc;m.
              </span>
            </div>
            <div>
              <span>
                - Nhắc lịch ng&agrave;y mồng 1, ng&agrave;y rằm, ng&agrave;y lễ.
              </span>
            </div>
            <div>
              <span>
                - Đồng bộ lịch l&agrave;m việc, lịch c&aacute; nh&acirc;n với
                Google Calendar&nbsp;
              </span>
            </div>
            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <span>
                ► Kh&aacute;m ph&aacute; &amp; ph&aacute;t triển sức khoẻ tinh
                thần:
              </span>
            </div>
            <div>
              <span>
                - Lịch hạnh ph&uacute;c gi&uacute;p theo d&otilde;i &amp; quản
                l&yacute; cảm x&uacute;c hằng ng&agrave;y&nbsp;
              </span>
            </div>
            <div>
              <span>
                - C&aacute;c trắc nghiệm t&acirc;m l&yacute; đ&aacute;nh
                gi&aacute; sức khoẻ tinh thần: đ&aacute;nh gi&aacute; trầm cảm,
                rối loạn lo &acirc;u, t&igrave;nh trạng kiệt sức, chứng tăng
                động giảm ch&uacute; &yacute; của trẻ,...
              </span>
            </div>
            <div>
              <span>
                - Kho&aacute; học gi&uacute;p ph&aacute;t triển sức khoẻ tinh
                thần
              </span>
            </div>
            <div>
              <span>
                - Đặt lịch tư vấn t&acirc;m l&yacute; trực tuyến 1-1 với
                chuy&ecirc;n gia&nbsp;
              </span>
            </div>
            <div>
              <span>
                - C&aacute;c b&agrave;i viết/video, tiện &iacute;ch hay như tập
                thở mỗi ng&agrave;y, đặt thử th&aacute;ch sống l&agrave;nh
                mạnh,..
              </span>
            </div>
            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <span>
                ► Ngo&agrave;i ra, Lịch Việt c&ograve;n c&oacute; c&aacute;c
                t&iacute;nh năng, tiện &iacute;ch nổi bật kh&aacute;c như:
              </span>
            </div>
            <div>
              <span>
                - Giải m&atilde; ng&agrave;y sinh, gi&uacute;p bản thấu hiểu bản
                th&acirc;n, xem tuổi hợp/tuổi xung
              </span>
            </div>
            <div>
              <span>
                - Gieo quẻ hỏi việc - gieo quẻ lục h&agrave;o ứng dụng 64 quẻ
                kinh dịch, gi&uacute;p giải đ&aacute;p c&aacute;c thắc mắc trong
                cuộc sống
              </span>
            </div>
            <div>
              <span>
                - Kh&aacute;m ph&aacute; video v&agrave; b&agrave;i viết hay về
                tử vi &amp; phong thuỷ hằng ng&agrave;y.
              </span>
            </div>
            <div>
              <span>- Theo d&otilde;i thời tiết hằng ng&agrave;y</span>
            </div>
            <div>
              <span>- Đổi ng&agrave;y &Acirc;m Dương</span>
            </div>
            <div>
              <span>- La b&agrave;n, thước lỗ ban&nbsp;</span>
            </div>
            <div>
              <span>
                - Đếm xu&ocirc;i ngược c&aacute;c sự kiện quan trọng&nbsp;
              </span>
            </div>
            <div>
              <span>
                - Kh&aacute;m ph&aacute; c&aacute;c sự kiện Ng&agrave;y
                n&agrave;y năm xưa
              </span>
            </div>
            <div>
              <span>
                - Xem sao giải hạn, văn khấn d&ugrave;ng cho c&aacute;c dịp
                c&uacute;ng lễ
              </span>
            </div>
            <div>
              <span>- B&oacute;i t&igrave;nh duy&ecirc;n</span>
            </div>
            <div>
              <span>- Giải m&atilde; giấc mơ&nbsp;</span>
            </div>
            <div>
              <span>
                - X&acirc;y dựng &amp; quản l&yacute; C&acirc;y gia phả cho
                d&ograve;ng họ, gia đ&igrave;nh.
              </span>
            </div>
            <div>
              <span>
                - Gửi thiệp ch&uacute;c mừng c&aacute;c dịp quan trọng:
                Ch&uacute;c mừng năm mới, Valentine, 8/3, 20/10,...
              </span>
            </div>
            <div>
              <span>
                - Chơi game nhận thưởng: Pikachu, Lines98, Solitaire,...
              </span>
            </div>
            <div>
              <span>
                - Kh&aacute;m ph&aacute; c&aacute;c nội dung: văn ho&aacute;
                Việt, tr&ograve; chơi d&acirc;n gian,...
              </span>
            </div>
            <div>
              <span>
                Lịch Việt tự h&agrave;o l&agrave; c&ocirc;ng ty đầu ti&ecirc;n
                ph&aacute;t triển ứng dụng Lịch cho người Việt tr&ecirc;n di
                động v&agrave; l&agrave; ứng dụng Lịch phổ biến nhất Việt Nam
                với 15 TRIỆU lượt tải. Ch&uacute;ng t&ocirc;i vẫn tiếp tục
                n&acirc;ng cấp để sản phẩm ng&agrave;y c&agrave;ng ho&agrave;n
                thiện hơn. Nếu gặp vấn đề khi sử dụng ứng dụng, xin vui
                l&ograve;ng gửi phản hồi cho ch&uacute;ng t&ocirc;i qua email
                support@lichviet.app. Xin cảm ơn Qu&yacute; kh&aacute;ch
                v&igrave; đ&atilde; lu&ocirc;n tin tưởng v&agrave; ủng hộ Lịch
                Việt.
              </span>
            </div>
            <div>
              <span>================</span>
            </div>
            <div>
              <span>
                T&igrave;m hiểu th&ecirc;m về Lịch Việt - Xem ng&agrave;y tốt,
                Tử Vi &amp; Phong Thuỷ:
              </span>
            </div>
            <div>
              <span>► Tải ứng dụng miễn ph&iacute; (iOS &amp; Android): </span>{" "}
              <Link
                className={"text-green"}
                target={"_blank"}
                href="https://onelink.to/nh298f"
              >
                https://onelink.to/nh298f
              </Link>
            </div>
            <div>
              <span>► Website : &nbsp;</span>
              <Link
                className={"text-green"}
                target={"_blank"}
                href="https://lichviet.app"
              >
                https://lichviet.app/
              </Link>
            </div>
            <div>
              <span>► Tiktok: </span>
              <Link
                className={"text-green"}
                target={"_blank"}
                href="https://www.tiktok.com/@lichviet.official"
              >
                https://www.tiktok.com/@lichviet.official
              </Link>
            </div>
            <div>
              <span>► Youtube: </span>
              <Link
                className={"text-green"}
                target={"_blank"}
                href="https://www.youtube.com/@lichviet.official"
              >
                https://www.youtube.com/@lichviet.official
              </Link>
            </div>
            <div>
              <span>► Facebook : </span>
              <Link
                className={"text-green"}
                target={"_blank"}
                href="https://www.facebook.com/lichviet.official"
              >
                https://www.facebook.com/lichviet.official
              </Link>
            </div>
            <div>
              <span>► Cộng đồng Lịch Việt : </span>
              <Link
                className={"text-green"}
                href="https://www.facebook.com/groups/225652377851108"
                target={"_blank"}
              >
                https://www.facebook.com/groups/225652377851108
              </Link>
            </div>
            <div>
              <span>► Hotline : </span>
              <Link className={"text-green"} href="tel:0766002689">
                076 600 2689
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Product;
