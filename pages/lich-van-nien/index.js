import MetaHead from "../../components/MetaHead";
import ImageProduct from "../../components/Ui/ImageProduct";

import Link from "next/link";
import { Container } from "react-bootstrap";
import Slider from "../../components/Ui/Slider";
// import Slider from "../Ui/Slider";
// import ImageProduct from "../Ui/ImageProduct";

const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;
const Product = () => {
  return (
    <>
      <MetaHead
        showH1Tag={false}
        title="Lịch Việt | Ứng dụng"
        subtitle="Ứng dụng Lịch Việt - Lịch Vạn Niên được phát triển bởi PPCLINK có tác dụng xem ngày giờ tốt xấu, tra cứu ngày tháng năm âm & dương lịch."
      />
      <Slider
        banner={[BASE_URL_IMAGE + "/images/slider/slider2.jpg"]}
        title={"Lịch Việt - Xem Ngày Tốt, Tử vi & Phong Thuỷ"}
        description={
          "Lịch Việt - Lịch vạn niên 2024 là ứng dụng tra cứu lịch âm dương, lịch tháng, lịch ngày, ngày tốt, tử vi & phong thủy theo ngày giờ sinh, xem thần số học, quản lý lịch sự kiện cá nhân phổ biến nhất hiện nay. Chúng tôi tự hào là ứng dụng lịch đầu tiên cho người Việt cán mốc 15 TRIỆU lượt tải. Lịch Việt giúp bạn thấu hiểu về bản thân, đưa ra các quyết định tài lộc, may mắn và quản lý công việc hằng ngày dễ dàng."
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
        <h1 style={{ fontWeight: "bold" }} className={"py-4"}>
          Lịch Việt | Ứng dụng
        </h1>
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
                Những tiện ích hay khi bạn đăng nhập ứng dụng Lịch Việt:
              </span>
            </div>
            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <h2 className="font-18-bold">Tra cứu Lịch âm dương</h2>
            </div>
            <div>
              <span>
                - Tại ứng dụng Lịch Việt, bạn có thể xem lịch âm dương, lịch
                tháng, lịch ngày, các ngày tốt trong tuần, trong tháng tương ứng
                với thông tin cá nhân của bạn.{" "}
              </span>
            </div>
            <div>
              <span>
                - Các tiện ích tìm ngày, đếm xuôi, đếm ngược cho các mốc sự kiện
                quan trọng, đổi ngày dương thành ngày âm và ngược lại.
              </span>
            </div>
            <div>
              <span>- Hỗ trợ Widget xem Lịch âm dương tiện lợi.</span>
            </div>
            <div>
              <span>
                - Giúp bạn sắp xếp sẵn danh sách các ngày lễ, hội trong năm.
                Tính năng TẠO SỰ KIỆN (trên phiên bản PRO) giúp bạn không lỡ các
                sự kiện cá nhân quan trọng,{" "}
              </span>
            </div>
            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <h2 className="font-18-bold">Tính năng Chọn Ngày Tốt</h2>
            </div>
            <div>
              <span>
                - Khách hàng có thể tìm kiếm ngày tốt dễ dàng theo danh sách 28
                việc đại sự phổ biến nhất như: xuất hành, cưới hỏi, khai trương,
                động thổ, xây nhà, mua xe, ...
              </span>
            </div>
            <div>
              <span>
                - Chỉ cần nhập thông tin ngày tháng năm sinh, Lịch Việt sẽ cho
                ra kết quả chính xác đến từng cá nhân, không chỉ phân tích ngày
                tốt xấu theo các cát tinh và hung tinh, Lịch Việt sẽ cho bạn
                biết mệnh của bạn tốt xấu theo năm tháng ngày giờ cụ thể.{" "}
              </span>
            </div>
            <div>
              <span>
                - Lịch Việt còn đưa ra phương hướng tốt theo năm và phương hướng
                tốt theo tháng giúp các bạn trong việc khởi công, động thổ, xuất
                hành, mua đất,...
              </span>
            </div>

            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <h2 className="font-18-bold">Tính năng Thần Số Học</h2>
            </div>
            <div>
              <span>
                Dựa trên họ và tên, ngày, tháng, năm sinh của bạn, Lịch Việt sẽ
                tính toán và phân tích ý nghĩa của từng con số gắn với cuộc đời
                bạn:
              </span>
            </div>
            <div>
              <span>- Con số chủ đạo</span>
            </div>
            <div>
              <span>- Con số phản ứng</span>
            </div>
            <div>
              <span>- Con số vận mệnh</span>
            </div>
            <div>
              <span>- Con số linh hồn</span>
            </div>
            <div>
              <span>- Con số thể hiện</span>
            </div>
            <div>
              <span>- Giải mã biểu đồ ngày sinh</span>
            </div>
            <div>
              <span>- 4 giai đoạn cuộc đời</span>
            </div>
            <div>
              <span>
                Với những luận giải chi tiết về ý nghĩa con số, bạn có thể:
              </span>
            </div>
            <div>
              <span>- Hiểu rõ mục tiêu và ý nghĩa của cuộc đời.</span>
            </div>
            <div>
              <span>- Chọn nghề nghiệp phù hợp với tiềm năng của bạn.</span>
            </div>
            <div>
              <span>- Xây dựng một tương lai mạnh mẽ và thịnh vượng.</span>
            </div>
            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <h2 className="font-18-bold">Tính năng Phong Thủy</h2>
            </div>
            <div>
              <span>
                - Đánh giá tốt/xấu về mặt phong thủy cho ngôi nhà bạn đang ở,
                hướng bàn làm việc, hướng cửa có phù hợp hay không từ đó hướng
                dẫn bạn cách bố trí các phòng và đồ đạc cho hợp phong thủy và
                gia tăng vượng khí cho gia chủ
              </span>
            </div>
            <div>
              <span>
                - Thông qua năm sinh của vợ chồng đánh giá mối quan hệ vợ chồng
                đưa ra lời khuyên về phong thuỷ cho hướng đặt bàn thờ, hướng
                giường ngủ, hướng phòng bếp cũng như hướng bếp cho phù hợp với
                hạnh phúc lứa đôi.
              </span>
            </div>

            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <h2 className="font-18-bold">Tính năng Tử Vi</h2>
            </div>
            <div>
              <span>
                - Chỉ cần nhập đầy đủ giờ sinh, ngày tháng năm sinh và giới
                tính, lá số tử vi sẽ luận đoán chính xác nhất về quá khứ, hiện
                tại, tương lai của một người thông qua luận giải chi tiết 12
                cung trên lá số.
              </span>
            </div>
            <div>
              <span>
                - Phần mềm lập lá số tử vi của Lịch Việt sẽ giúp bạn biết trước
                được vận mệnh của mình dựa trên biểu đồ cuộc đời theo đại vận 10
                năm, tiểu vận 1 năm để mưu cầu đại sự và cách hóa giải họa
                hung,...
              </span>
            </div>

            <div style={{ maxHeight: "15px" }}>&nbsp;</div>
            <div>
              <h2 className="font-18-bold">Tính năng Gieo Quẻ Hỏi Việc</h2>
            </div>
            <div>
              <span>
                Khi bạn đang phân vân về một vấn đề mà chưa biết cách giải quyết
                như thế nào tính năng Gieo quẻ hỏi việc giúp bạn giải đáp những
                câu hỏi liên quan:
              </span>
            </div>
            <div>
              <span>- Hỏi về thi cử, học hành</span>
            </div>
            <div>
              <span>- Hỏi về sự nghiệp, tiền tài, công danh</span>
            </div>
            <div>
              <span>- Hỏi về tình duyên, gia đạo, hôn nhân, con cái</span>
            </div>
            <div>
              <span>- Chọn đối tác, hợp tác làm việc,...</span>
            </div>
            <div>
              <span>
                Thông qua cách gieo quẻ bằng đồng xu hoặc serie tiền sẽ định
                hướng tiến trình công việc của bạn? những khó khăn và thuận lợi
                gì khi bạn tiến hành công việc.
              </span>
            </div>

            <div style={{ maxHeight: "15px" }}>&nbsp;</div>

            <div>
              <h2 className="font-18-bold">Tính năng Giải Mã Ngày Sinh</h2>
            </div>
            <div>
              <span>
                - Thông qua phân tích ngày sinh, Lịch Việt sẽ giúp bạn xác định
                các tuổi hợp, không hợp, các tuổi hỗ trợ công việc kinh doanh
                giúp bạn phát triển giúp hài hòa các mối quan hệ.
              </span>
            </div>
            <div>
              <span>
                - Giúp bạn xác định được ngày tốt nhất theo năm, tháng tốt nhất
                trong năm và năm tốt nhất trong đại vận 10 năm.
              </span>
            </div>
            <div>
              <span>
                - “Giải mã ngày sinh” còn giúp bạn đánh giá chính xác mối quan
                hệ giữa các thành viên trong gia đình như vợ, con và cách hóa
                giải bằng phong thuỷ.
              </span>
            </div>

            <div style={{ maxHeight: "15px" }}>&nbsp;</div>

            <div>
              <h2 className="font-18-bold">Các tiện ích khác</h2>
            </div>

            <div>
              <span>- Xem tuổi Xông đất</span>
            </div>
            <div>
              <span>- Tiện ích La bàn, Thước lỗ ban</span>
            </div>
            <div>
              <span>- Xem Nhịp sinh học</span>
            </div>
            <div>
              <span>- Xem Tử vi theo năm, Tử vi hàng ngày, Cung hoàng đạo</span>
            </div>
            <div>
              <span>- Nội dung Văn khấn, Giải Mộng, Bói Tình duyên</span>
            </div>
            <div>
              <span>
                - Tính năng Sức Khỏe Tinh Thần: Lịch Việt hợp tác với các chuyên
                gia tâm lý bệnh viện Bạch Mai và chia sẻ những video, bài viết
                bổ ích liên quan đến sức khỏe, tinh thần cùng các công cụ như:
              </span>
            </div>
            <div>
              <span>
                + Công cụ tập thở giúp bạn thiền hành và điều chỉnh hơi thở thư
                giãn tinh thần và tốt cho sức khỏe.
              </span>
            </div>
            <div>
              <span>
                + Công cụ “chiếc lọ biết ơn” giúp bạn chữa lành và thực hành
                lòng biết ơn.
              </span>
            </div>
            <div>
              <span>
                + Công cụ “Thử thách mỗi ngày” giúp bạn cải thiện dần dần những
                thói quen xấu.
              </span>
            </div>
            <div>
              <span>
                + Bạn cũng có thể tham gia các bài test kiểm tra tâm lý trên ứng
                dụng.
              </span>
            </div>
            <div>
              <span>
                - Kho nội dung phong phú về kiến thức, chia sẻ các kinh nghiệm
                hữu ích như: Có thể bạn chưa biết, Phong tục, Lễ hội, Bài viết
                truyền cảm hứng,...
              </span>
            </div>
            <div>
              <span>
                - Các nội dung giải trí được cập nhật hàng ngày: Video hay, Góc
                thư giãn.
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
              <span>Tải ứng dụng miễn ph&iacute; (iOS &amp; Android): </span>{" "}
              <Link
                className={"text-green"}
                target={"_blank"}
                href="https://onelink.to/nh298f"
              >
                https://onelink.to/nh298f
              </Link>
            </div>
            <div>
              <span>Website : &nbsp;</span>
              <Link
                className={"text-green"}
                target={"_blank"}
                href="https://lichviet.app"
              >
                https://lichviet.app/
              </Link>
            </div>
            <div>
              <span>Tiktok: </span>
              <Link
                className={"text-green"}
                target={"_blank"}
                href="https://www.tiktok.com/@lichviet.official"
              >
                https://www.tiktok.com/@lichviet.official
              </Link>
            </div>
            <div>
              <span>Youtube: </span>
              <Link
                className={"text-green"}
                target={"_blank"}
                href="https://www.youtube.com/@lichviet.official"
              >
                https://www.youtube.com/@lichviet.official
              </Link>
            </div>
            <div>
              <span>Facebook : </span>
              <Link
                className={"text-green"}
                target={"_blank"}
                href="https://www.facebook.com/lichviet.official"
              >
                https://www.facebook.com/lichviet.official
              </Link>
            </div>
            <div>
              <span>Cộng đồng Lịch Việt : </span>
              <Link
                className={"text-green"}
                href="https://www.facebook.com/groups/225652377851108"
                target={"_blank"}
              >
                https://www.facebook.com/groups/225652377851108
              </Link>
            </div>
            <div>
              <span>Hotline : </span>
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
