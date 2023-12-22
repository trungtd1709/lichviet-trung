export const SoDoGiaiMaNgaySinh = ({ conSoGiaiMaNgaySinh = [] }) => {
  return (
    <div className="grid-container">
      {/* {conSoGiaiMaNgaySinh.map((conSo, index) => (
          <div key={index} className={`grid-item ${conSo && "haveNumber"}`}>
            {conSo}
          </div>
        ))} */}
      <div className={`grid-item ${conSoGiaiMaNgaySinh[2] && "haveNumber"}`}>
        {conSoGiaiMaNgaySinh[2]}
      </div>
      <div className={`grid-item ${conSoGiaiMaNgaySinh[5] && "haveNumber"}`}>
        {conSoGiaiMaNgaySinh[5]}
      </div>
      <div className={`grid-item ${conSoGiaiMaNgaySinh[8] && "haveNumber"}`}>
        {conSoGiaiMaNgaySinh[8]}
      </div>
      <div className={`grid-item ${conSoGiaiMaNgaySinh[1] && "haveNumber"}`}>
        {conSoGiaiMaNgaySinh[1]}
      </div>
      <div className={`grid-item ${conSoGiaiMaNgaySinh[4] && "haveNumber"}`}>
        {conSoGiaiMaNgaySinh[4]}
      </div>
      <div className={`grid-item ${conSoGiaiMaNgaySinh[7] && "haveNumber"}`}>
        {conSoGiaiMaNgaySinh[7]}
      </div>
      <div className={`grid-item ${conSoGiaiMaNgaySinh[0] && "haveNumber"}`}>
        {conSoGiaiMaNgaySinh[0]}
      </div>
      <div className={`grid-item ${conSoGiaiMaNgaySinh[3] && "haveNumber"}`}>
        {conSoGiaiMaNgaySinh[3]}
      </div>
      <div className={`grid-item ${conSoGiaiMaNgaySinh[6] && "haveNumber"}`}>
        {conSoGiaiMaNgaySinh[6]}
      </div>
    </div>
  );
};
