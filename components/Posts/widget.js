import React from "react";
import TopPost from "../Post/TopPost";
import Info from "../Post/Info";
import LoadGoogleAds from "../Ads/googleAds";

const Widget = (props) => {
  const { topPosts } = props;
  return (
    <div className={"post_widget"}>
      <div className={"top-post-list"}>
        <TopPost topPosts={topPosts} marginTop={0} />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <Info />
      </div>
      <div className={"widget-item widget_bottom"}>
        <LoadGoogleAds slot={3089617988} />
      </div>
      <div className={"widget-item widget_bottom"}>
        <LoadGoogleAds slot={3780717276} />
      </div>
    </div>
  );
};

export default Widget;
