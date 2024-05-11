import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
const Navbar = () => {
  return (
    <>
      <header className="bg-[#330d3b]  shadow-sm">
        <nav className="w-[90%] m-auto py-3 flex justify-between items-center ">
          <div className="logo flex items-center gap-3">
            <div className="hamburger">
              <IoMenu className="text-white text-3xl" />
            </div>
            <img
              src="https://cdn1.codashop.com/S/content/mobile/images/codashop-logo-new-3a.png"
              alt=""
              className="w-32 h-10 object-contain"
            />
            <span className="text-white  text-lg font-light">
              <i>Website top-up terbesar, tercepat dan terpercaya untu...</i>
            </span>
          </div>
          <div className="menu flex items-center gap-5">
            <div className="search p-2 rounded-full hover:bg-[rgba(221,221,221,.1)] cursor-pointer duration-200 transition-all">
              <IoIosSearch className="text-white text-2xl" />
            </div>
            <div className="login">
              <Button
                className={cn(
                  "bg-blue-600 hover:bg-blue-700 rounded-full px-7 h-8"
                )}
              >
                Daftar
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
