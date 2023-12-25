import _ from "lodash";
import Select from "react-select";

export const CustomSelect = (props) => {
  const { options = [], onChange, currentValue } = props;
  const value = _.find(options, (item, index) => {
    return item.value === currentValue;
  });
  return (
    <Select
      value={value}
      {...props}
    />
  );
};
