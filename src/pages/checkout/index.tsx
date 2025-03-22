import { Input } from "@/components/ui/input";
import { cn, FormatCurrency } from "@/lib/utils";
import { Flame, Headset, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { useFetchProductListById } from "@/hooks/useFetchProductList";
import FallBackLoading from "@/components/loading/fallback-loading";

const CheckOut = () => {
  const [selected, setSelected] = useState(1);
  const { id } = useParams();
  const { data, isLoading } = useFetchProductListById(id as string);
  return (
    <>
      {isLoading ? (
        <FallBackLoading />
      ) : (
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
                {data?.details_products.product_name}
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
                <p
                  className="text-gray-200 font-inter text-sm"
                  dangerouslySetInnerHTML={{
                    __html: data?.details_products?.description || "",
                  }}
                ></p>
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
            <div className="md:col-span-3 flex flex-col gap-5">
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
                <div className="px-4 py-5 ">
                  <div>
                    <div className="user-id-input ">
                      <div
                        className="flex items-center gap-2 "
                        id="list-column-user-id-input"
                      >
                        <Input
                          className={cn(
                            " border-[1.5px] h-12  w-full font-medium text-zinc-900 font-inter md:w-full border-gray-300 placeholder:font-inter placeholder:font-medium placeholder:text-sm focus-visible:outline-none focus-visible:ring-blue-500 focus:border-none "
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
                      tercantum di bawah nama karakter Anda. Contoh:
                      '5363266446'.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" bg-white w-full  mt-3 relative rounded-md">
                <div>
                  <div className="-top-5 absolute left-5 rounded-full ring-4 ring-white">
                    <img
                      src="/assets/number-2.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <h1 className="relative left-20 font-inter text-lg font-bold md:text-xl text-[#2f1236]">
                    Pilih Nominal Top Up
                  </h1>
                </div>
                <div className="px-4 py-5 ">
                  <div className="relative flex items-center font-inter w-full md:w-1/2 font-semibold gap-1 bg-gradient-to-b from-[#d13262] to-[#ff7f98] py-[6px] rounded-full px-3 text-white text-sm overflow-hidden">
                    <Flame size={24} className="block" />
                    <span>11.000 item dibeli dalam satu jam terakhir</span>

                    {/* Efek kilap */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent rotate-45 via-white/30 to-transparent w-full h-full translate-x-[-100%] animate-shine"></div>
                  </div>

                  <div className="mt-8">
                    <div className="grid grid-cols-4 gap-3 font-inter">
                      {data?.details_products?.product_list.map((option) => (
                        <label
                          key={option.id}
                          className={`cursor-pointer relative  border-2 rounded-lg text-sm transition-all ${
                            selected === option.id
                              ? "border-pink-500 bg-pink-100"
                              : `${
                                  option?.is_popularity
                                    ? "border-pink-500"
                                    : "border-gray-300"
                                } bg-white`
                          }`}
                        >
                          {option.is_popularity && (
                            <div className="absolute -top-4 -left-[2px] bg-pink-500 text-white text-xs font-semibold rounded-t-lg rounded-br-lg">
                              <div className="relative px-2 py-1 overflow-hidden flex items-center">
                                <Flame size={20} className="block" />
                                <span className="block">POPULAR</span>
                                <div className="absolute inset-0  bg-gradient-to-r from-transparent rotate-45 via-white/30 to-transparent w-full h-full translate-x-[-100%] animate-shine"></div>
                              </div>
                            </div>
                          )}
                          <div className="flex justify-center gap-4 p-4  flex-col  items-center">
                            <input
                              type="radio"
                              name="custom-radio"
                              value={option.id}
                              checked={selected === option.id}
                              onChange={() => setSelected(option.id)}
                              className="hidden"
                            />
                            <div className="flex flex-col justify-center items-center">
                              <span className="font-semibold text-gray-900 text-base">
                                {option.title}
                              </span>
                              <img
                                src="https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png"
                                alt=""
                                width={50}
                              />
                            </div>
                          </div>
                          <div className="bg-gray-100 w-full overflow-hidden flex flex-col justify-end rounded-b-lg p-3 ">
                            <span className="text-[#f06383] text-xs text-end">
                              Dari
                            </span>
                            <h5 className="text-[#f06383] text-base font-semibold text-end">
                              {FormatCurrency(option.price, "id-ID")}
                            </h5>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default CheckOut;
