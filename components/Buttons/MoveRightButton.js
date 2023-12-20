const MoveRightButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="move-button">
      <i style={{ color: "#ADB1B5" }} className="fas fa-chevron-right" />
    </div>
  );
};

export default MoveRightButton;
