import profile_img from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
      <img src={profile_img} alt="" />
    </div>
  );
};

export default Header;
