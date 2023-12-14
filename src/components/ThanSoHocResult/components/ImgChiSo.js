import MoveLeftButton from "@/components/Buttons/MoveLeftButton";
import MoveRightButton from "@/components/Buttons/MoveRightButton";
import { imgSrc } from "@/const/AppResource";

const ImgChiSo = (props) => {
  const { number, handleDecreaseType, handleIncreaseType } = props;
  return (
    <div className="d-flex flex-row justify-content-between align-items-center mb-5 px-5">
      <MoveLeftButton onClick={handleDecreaseType} />
      <div className="img-chi-so-container">
        <span>Con số chủ đạo của bạn</span>
        <img className="img-chi-so" src={imgSrc.conSoChuDaoBackground} />
      </div>
      <MoveRightButton onClick={handleIncreaseType} />
    </div>
  );
};

export default ImgChiSo;
