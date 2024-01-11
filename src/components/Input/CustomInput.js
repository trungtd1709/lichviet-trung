import { Input } from "antd";
import PropTypes from "prop-types";

CustomInput.propTypes = {
  marginLeft: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.any,
  suffix: PropTypes.any,
  prefix: PropTypes.any,
  fieldHelper: PropTypes.any,
  fieldProps: PropTypes.any,
  fieldMeta: PropTypes.any,
};

CustomInput.defaultProps = {
  marginLeft: "",
  placeholder: "",
};

function CustomInput(props) {
  const {
    suffix,
    prefix,
    placeholder,
    onChange,
    fieldHelper,
    fieldProps,
    fieldMeta,
    type,
    className,
  } = props;
  const { error, touched } = fieldMeta;
  const isError = error && touched;
  return (
    <>
      <Input
        className={className}
        type={type}
        prefix={prefix}
        suffix={suffix}
        placeholder={placeholder}
        // onChange={onChange}
        // value={formik.values.year}
        {...fieldProps}
      />

      {isError && <span className="pc-12px" style={{ color: "red"}}>{error}</span>}
    </>
  );
}

export default CustomInput;
