import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { details, title, image_url } = news;
  return (
    <div className="space-y-5">
      <img
        className="w-full h-[350px] object-cover"
        src={image_url}
        alt="image"
      />
      <h2 className="text-2xl">{title}</h2>
      <p>{details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
