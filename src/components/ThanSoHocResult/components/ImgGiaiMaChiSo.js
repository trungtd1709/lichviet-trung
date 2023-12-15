import MoveLeftButton from "@/components/Buttons/MoveLeftButton";
import MoveRightButton from "@/components/Buttons/MoveRightButton";
import { imgSrc } from "@/const/AppResource";

const ImgGiaiMaChiSo = (props) => {
  const { conSo = {}, handleDecreaseType, handleIncreaseType } = props;
  const { title, type, so } = conSo;
  return (
    <div className="d-flex flex-row justify-content-between align-items-center mb-5 px-5">
      <MoveLeftButton onClick={handleDecreaseType} />
      <div className="img-chi-so-container">
        <span>{title}</span>
        <img
          className="img-chi-so"
          // style={{ backgroundImage: `url(${imgSrc.conSoChuDaoBackground})` }}
          src={
            type === 1
              ? imgSrc.conSoChuDaoBackground
              : imgSrc.cacConSoKhacBackground
          }
        ></img>
        <span className="chi-so">{so}</span>
      </div>
      <MoveRightButton onClick={handleIncreaseType} />
    </div>
  );
};

export default ImgGiaiMaChiSo;
