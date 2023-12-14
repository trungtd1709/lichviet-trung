const MoveLeftButton = ({onClick}) => {
  return (
    <div onClick={onClick} className="move-button">
      <i style={{color:"#ADB1B5"}} className="fas fa-chevron-left"/>
    </div>
  );
};

export default MoveLeftButton;
