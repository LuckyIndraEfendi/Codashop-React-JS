import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { HiOutlineChat } from "react-icons/hi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="mt-40">
        <div className="footer-header bg-yellow-300">
          <div className="w-[90%] m-auto pt-20 pb-10 flex gap-10">
            <div className="contact_us">
              <h1 className="font-text-content font-karla text-lg font-bold">
                Butuh Bantuan?
              </h1>
              <Button
                variant={"ghost"}
                className={cn(
                  "bg-[#c5d122] flex gap-2 hover:bg-[#c5cf3a] mt-3"
                )}
              >
                <HiOutlineChat />
                <span>Hubungi Kami</span>
              </Button>
            </div>
            <div className="language">
              <h1 className="font-text-content font-karla text-lg font-bold">
                Language
              </h1>
              <div className="select_language mt-3">
                <Select defaultValue="indonesia">
                  <SelectTrigger className={cn("w-[180px] bg-[#c5d122] ")}>
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Language</SelectLabel>
                      <SelectItem value="indonesia">
                        <div className="flex gap-3 font-karla font-medium">
                          <img
                            src="https://unpkg.com/language-icons/icons/id.svg"
                            alt=""
                            width={20}
                          />
                          <h1>Indonesia</h1>
                        </div>
                      </SelectItem>
                      <SelectItem value="english">
                        <div className="flex gap-3 font-karla font-medium">
                          <img
                            src="https://unpkg.com/language-icons/icons/en.svg"
                            alt=""
                            width={20}
                          />
                          <h1>English</h1>
                        </div>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="contact_us">
              <h1 className="font-text-content font-karla text-lg font-bold">
                Follow Us
              </h1>
              <div className="mt-5 flex gap-2">
                <Link to={"/facebook"}>
                  <FaFacebookSquare className="text-3xl text-blue-600" />
                </Link>
                <Link to={"/instagram"}>
                  <FaInstagramSquare className="text-3xl text-[#e04d33]" />
                </Link>
                <Link to={"/instagram"}>
                  <FaTwitterSquare className="text-3xl text-blue-600" />
                </Link>
                <Link to={"/youtube"}>
                  <FaYoutubeSquare className="text-3xl text-red-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-header-created bg-gray-200">
          <div className="w-[90%] m-auto py-4 flex justify-between items-center">
            <div className="copy_right">
              <h1 className="text-sm text-zinc-800 font-karla">
                © 2024 PT. Coda Payments
              </h1>
            </div>
            <div className="footer_link">
              <Link to={"/terms"} className="text-zinc-800 font-karla text-sm">
                Terms & Conditions
              </Link>
              <Link
                to={"/privacy"}
                className="text-zinc-800 font-karla text-sm ml-5"
              >
                Privacy Policy
              </Link>
              <Link
                to={"/privacy"}
                className="text-zinc-800 font-karla text-sm ml-5"
              >
                Bug Bounty
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
