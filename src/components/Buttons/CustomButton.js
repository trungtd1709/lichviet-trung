import PropTypes from "prop-types";

CustomButton.propTypes = {
  marginLeft: PropTypes.string,
  background: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.any,
  icon: PropTypes.any,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  showBorder: PropTypes.bool,
  gap: PropTypes.string,
  fontSize: PropTypes.string,
  loading: PropTypes.bool,
  spinnerColorClassName: PropTypes.string,
  imgSrc: PropTypes.string,
  textClassName: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  backgroundColor: PropTypes.string,
};

CustomButton.defaultProps = {
  marginLeft: "",
  background: "white",
  borderColor: "#304FFD",
  borderRadius: "4px",
  height: "38px",
  disabled: false,
  className: "",
  showBorder: true,
  fontSize: "14px",
  loading: false,
  spinnerColorClassName: "text-dark",
  imgSrc: "",
  textClassName: "",
  paddingLeft: "8px",
  paddingRight: "8px",
};

function CustomButton(props) {
  const {
    showBorder,
    icon,
    color,
    onClick,
    className,
    fontSize,
    loading,
    id,
    marginLeft,
    disabled,
    backgroundColor,
    spinnerColorClassName,
    imgSrc,
    textClassName,
    padding,
  } = props;
  return (
    <button
      // {...props}
      disabled={loading ? disabled : false}
      id={id}
      className={`custom-button ${className} d-flex flex-row justify-content-center align-items-center`}
      onClick={onClick}
      style={{
        ...props,
        borderStyle: "solid",
        borderWidth: showBorder ? "1px" : "0px",
        marginLeft: marginLeft,
        // backgroundColor: disabled ? 'white' : backgroundColor,
        // color: disabled ? 'grey' : color,
        // borderColor: disabled ? 'grey' : color,
        // cursor: ''
      }}
    >
      {loading === false ? null : (
        <span
          className={`spinner-border spinner-border-sm mr-2 ${spinnerColorClassName}`}
        ></span>
      )}
      {icon && (
        <i
          style={{
            color: disabled ? "#041847" : color,
            transition: "all ease-in-out .3s",
          }}
          className={icon}
        ></i>
      )}
      {imgSrc && <img src={imgSrc} />}
      <span
        className={`text-truncate ${" "} ${textClassName}`}
        title={props.text}
        style={{ fontWeight: "500", fontSize: fontSize }}
      >
        {props.text}
      </span>
    </button>
  );
}

export default CustomButton;
