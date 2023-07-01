import IsLoggedIn from "@/components/home/UserLoggedIn";

const navbar = () => {
  return (
    <div className="h-20 w-full bg-black text-white">
       <IsLoggedIn/>
    </div>
  );
};

export default navbar;
