import PropTypes from "prop-types";

CustomButton.propTypes = {
  marginLeft: PropTypes.string,
  backgroundColor: PropTypes.string,
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
};

CustomButton.defaultProps = {
  marginLeft: "",
  backgroundColor: "white",
  borderColor: "#304FFD",
  borderRadius: "4px",
  height: "38px",
  disabled: false,
  className: "",
  showBorder: true,
  fontSize: "14px",
  loading: false,
  spinnerColorClassName: "text-dark",
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
  } = props;
  return (
    <button
      // {...props}
      disabled={loading ? disabled : false}
      id={id}
      className={`custom-button ${className} font-sfpro-regular `}
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
      <span
        className="text-truncate"
        title={props.text}
        style={{ fontWeight: "500", fontSize: fontSize }}
      >
        {props.text}
      </span>
    </button>
  );
}

export default CustomButton;
