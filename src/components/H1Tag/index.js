const { systemMetaData } = require("@/const/const");

const H1Tag = (props) => {
  const {
    title = systemMetaData.default.title,
    subtitle = systemMetaData.default.description,
    image = systemMetaData.default.image,
    pageUrl,
  } = props;
  return <h1 style={{ display: "none" }}>{title}</h1>;
};
