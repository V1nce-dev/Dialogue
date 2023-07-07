import IsLoggedIn from "../home/UserLoggedIn";

const navbar = () => {
  return (
    <div className="h-20 w-full bg-black text-white">
      <div className="flex">
        <h1>Home</h1>
        <IsLoggedIn />
      </div>
    </div>
  );
};

export default navbar;
