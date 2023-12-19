import Link from "next/link";

export const OtherNews = (props) => {
  const { listPost = [] } = props;
  return (
    <div className={"other_news"}>
      <div className={"title_other"}>Tin tức khác</div>
      <div className={"other_list"}>
        {listPost.map(function (item, k) {
          return (
            <Link className="card" href={"/" + item.slug} key={k}>
              <h2
                style={{ marginBottom: "0" }}
                className={"card_title hidden-md"}
              >
                {item.title}
              </h2>
              <div className={"post_thumb"}>
                <figure className={"imghover"}>
                  <img
                    className={"image-hover"}
                    src={item.image}
                    alt={item.image_alt}
                    loading={"lazy"}
                  />
                </figure>
              </div>
              <div className={"card_content"}>
                <h2
                  style={{ marginBottom: "0" }}
                  className={"card_title hidden-xs"}
                >
                  {item.title}
                </h2>
                <p style={{ marginBottom: "0" }} className={"card_subtitle"}>
                  {item.subtitle}
                </p>
                <div className={"card_date"}>{item.date}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
