import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3">
      <div className=" bg-slate-100 p-5 rounded-lg text-center text-2xl text-violet-600 font-bold border border-violet-600 mb-8">
        <h3>Spentss time on read : {readingTime}</h3>
      </div>
      <div className="bg-slate-100 p-5 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Bookmarked Blogs : {bookmarks.length}
        </h2>

        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
