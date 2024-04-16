import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
  };
  return (
    <>
      <div className=" p-4 mx-4 ">
        <Header></Header>
        <hr />
        <button class="btn" onclick="my_modal_2.showModal()">
          open modal
        </button>
        <dialog id="my_modal_2" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Press ESC key or click outside to close</p>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <div className="md:flex  mt-8">
          <Blogs
            handleMarkAsRead={handleMarkAsRead}
            handleAddBookmarks={handleAddBookmarks}
          ></Blogs>
          <Bookmarks
            readingTime={readingTime}
            bookmarks={bookmarks}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
