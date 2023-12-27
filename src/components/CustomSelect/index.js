import _ from "lodash";
import Select from "react-select";

export const CustomSelect = (props) => {
  const styles = {
    dropdownIndicator: (base) => {
      let changes = {
        width: 0,
        height: 0,
        borderLeft: "7px solid transparent",
        borderRight: "7px solid transparent",
        borderTop: "7px solid #66BB6A",
        padding: 0,
        borderRadius: "10px",
        marginRight: "5px",
      };
      return Object.assign(base, changes);
    },
    valueContainer: (base) => ({
      ...base,
      minHeight: "25px",
      fontSize: "14px",
    }),
    control: (base) => ({
      ...base,
      maxHeight: "40px",
      minHeight: "40px",
      fontSize: "14px",
    }),
    option: (base) => ({
      ...base,
      maxHeight: "30px",
      minHeight: "30px",
      fontSize: "14px",
      lineHeight: "15px",
      // textAlign: "center",
    }),
    singleValue: (base) => ({
      ...base,
      // textAlign: "center",
    }),
  };

  const { options = [], onChange, currentValue } = props;
  const value = _.find(options, (item, index) => {
    return item.value === currentValue;
  });
  return (
    <Select
      // className="w-100"
      // components={{
      //   DropdownIndicator: () => {
      //     <i className="fas fa-caret-down"></i>;
      //   },
      //   IndicatorSeparator: () => null,
      // }}
      value={value}
      isSearchable={false}
      
      components={{ IndicatorSeparator: () => null }}
      {...props}
      styles={styles}
    />
  );
};
