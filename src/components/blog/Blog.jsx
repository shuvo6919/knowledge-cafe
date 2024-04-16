// import { BsBookmarkStar } from "react-icons/fa";
import { BsBookmarkStar } from "react-icons/bs";

const Blog = ({ blog, handleAddBookmarks, handleMarkAsRead }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-10">
      <img className="w-full rounded-lg" src={cover} alt="" />
      <div className="flex justify-between items-center mt-8 mb-4">
        <div className="flex items-center">
          <img className="w-14 me-6" src={author_img} alt="" />
          <div>
            <h2 className="text-lg font-bold">{author}</h2>
            <p className="text-slate-500">{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="text-slate-500 flex items-center">
            {reading_time} min read{" "}
            <BsBookmarkStar
              onClick={() => handleAddBookmarks(blog)}
              className="ms-2 cursor-pointer text-xl"
            />
          </span>
        </div>
      </div>
      <h1 className="md:text-3xl sm:text-xl font-bold font-bold">{title}</h1>
      <p className="my-4">
        {hashtags.map((hash, idx) => (
          <span className="me-2 text-slate-500" key={idx}>
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="underline text-blue-800 "
        href=""
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
