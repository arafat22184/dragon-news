import { CiShare2 } from "react-icons/ci";
import { FaEye, FaStar, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author: { name, img, published_date },
    rating: { number },
    total_view,
    image_url,
    details,
  } = news;

  const formattedDate = new Date(published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 border border-base-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={img}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-600 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-gray-800" />
          <CiShare2 size={22} className="cursor-pointer hover:text-gray-800" />
        </div>
      </div>

      {/* Body */}
      <div className="px-4 pb-4">
        <h2 className="text-xl font-bold my-3">{title}</h2>
        <img
          src={image_url}
          alt={title}
          className="w-full h-auto rounded-lg mb-4"
        />
        <p className="text-gray-700">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="text-orange-500 font-medium cursor-pointer">
                {" "}
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center  py-3 mx-5 border-t border-base-300 text-sm text-gray-600 ">
        <div className="flex items-center gap-1 ">
          {Array.from({ length: number }, (_, i) => (
            <FaStar key={i} size={20} className="text-orange-400" />
          ))}
          <span className="ml-1 font-semibold">{number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye size={20} />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
