const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white rounded-md font-bold my-4 p-5">
      <h3>{title}</h3>
    </div>
  );
};

export default Bookmark;
