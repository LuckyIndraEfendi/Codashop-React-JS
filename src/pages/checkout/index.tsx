import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Headset, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CheckOut = () => {
  return (
    <>
      <main className="sm:w-[80%] mx-auto mt-4">
        <div className="grid md:grid-cols-5 gap-5">
          <div className="md:col-span-2">
            <div className="checkout-banner">
              <img
                src="https://cdn1.codashop.com/S/content/common/images/mno/freefire_new_640x241.jpg"
                alt=""
              />
            </div>
            <h1 className="text-2xl my-2 lg:text-2xl font-bold text-gray-100 font-inter ">
              Free Fire Top-Up
            </h1>
            <div className="flex gap-3 mt-3">
              <span className="bg-gray-50 pl-2 pr-6 py-1 flex items-center justify-center text-xs font-medium rounded-full gap-2">
                <ShieldCheck size={18} className="text-gray-800" />
                <span className="flex">
                  Pembayaran yang <br />
                  aman
                </span>
              </span>
              <span className="bg-gray-50 pl-2 pr-6 py-1 flex items-center justify-center text-xs font-medium rounded-full gap-2">
                <Headset size={18} className="text-gray-800" />
                <span className="flex">
                  Layanan Pelanggan
                  <br />
                  24/7
                </span>
              </span>
            </div>
            <div className="mt-5">
              <p className="text-gray-200  font-inter text-sm">
                Codashop menawarkan top up Free Fire yang mudah, aman, dan
                instan.
                <br />
                <br />
                Pembayaran tersedia melalui pulsa (Telkomsel, Indosat, Tri, XL,
                Smartfren), Codacash, QRIS, GoPay, OVO, DANA, ShopeePay,
                LinkAja, Krevido, Alfamart, Indomaret, DOKU, Bank Transfer and
                Card Payments.
                <br />
                <br />
                Cukup masukkan user ID anda, Pilih jumlah Diamond yang ingin
                anda beli, pilih metode pembayaran yang anda inginkan,
                selesaikan pembayaran, dan Diamonds anda akan segera ditambahkan
                ke akun Free Fire.
                <br />
                <br />
                <Link className="underline text-yellow-300" to="">
                  Login ke Codashop
                </Link>{" "}
                akunmu dan dapatkan akses ke promo Free Fire dan event lainnya.
                Belum punya akun Codashop?{" "}
                <Link className="underline text-yellow-300" to="">
                  Daftar sekarang
                </Link>{" "}
                <br />
                <br />
                Unduh Free Fire sekarang!
              </p>
              <div className="mt-3 flex items-center gap-3">
                <Link to={"https://apps.apple.com/US/app/id1300146617?mt=8"}>
                  <img
                    src="/app_store_coda.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
                <Link
                  to={
                    "https://play.google.com/store/apps/details?id=com.dts.freefireth"
                  }
                >
                  <img
                    src="/google_play_coda.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className=" bg-white w-full  mt-3 relative rounded-md">
              <div>
                <div className="-top-5 absolute left-5 rounded-full ring-4 ring-white">
                  <img
                    src="/assets/number-1.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <h1 className="relative left-20 font-inter text-lg font-bold md:text-xl text-[#2f1236]">
                  Masukkan ID Player
                </h1>
              </div>
              <div className="px-4 py-5">
                <div>
                  <div className="user-id-input">
                    <div
                      className="flex items-center gap-2"
                      id="list-column-user-id-input"
                    >
                      <Input
                        className={cn(
                          " border-[1.5px] w-full h-12 font-medium text-zinc-900 font-inter md:w-1/2 border-gray-300 placeholder:font-inter placeholder:font-medium placeholder:text-sm focus-visible:outline-none focus-visible:ring-blue-500 focus:border-none "
                        )}
                        placeholder="Masukkan ID Player"
                      />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <img
                              src="/assets/question.png"
                              alt=""
                              width={20}
                              height={20}
                              className="hover:cursor-pointer"
                            />
                          </TooltipTrigger>
                          <TooltipContent
                            className={cn("p-0 rounded-lg")}
                            side="bottom"
                          >
                            <img
                              src="https://cdn1.codashop.com/S/content/common/images/helpers/33.png"
                              alt=""
                            />
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <p className="text-xs text-[#918da1] font-inter font-normal mt-3">
                    Untuk menemukan ID Anda, klik pada ikon karakter. User ID
                    tercantum di bawah nama karakter Anda. Contoh: '5363266446'.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckOut;
