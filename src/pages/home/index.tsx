import CardList from "@/components/card-list";
import CardSlider from "@/components/swiper/card-slider";
import { codaAbout } from "@/constants/aboutList";
import { productList } from "@/constants/productList";

const Home = () => {
  return (
    <>
      <main className="w-[90%] m-auto mt-12">
        <section id="swiper">
          <CardSlider />
        </section>
        <section id="productList_recomendation" className="mt-10 md:mt-12">
          <h1 className="text-2xl md:text-3xl font-poetsenOne text-white py-5">
            Recomendation
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 mt-5 gap-5 row-auto">
            <CardList productData={productList} />
          </div>
        </section>

        <section id="productList_kode_voucher" className="mt-12">
          <h1 className="text-2xl md:text-3xl font-poetsenOne text-white py-5">
            BELI KODE VOUCHER
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 mt-5 gap-5 row-auto">
            <CardList productData={productList} />
          </div>
        </section>

        <section id="news" className="mt-12">
          <h1 className="text-2xl md:text-3xl font-poetsenOne text-white py-5">
            News and Update
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[1, 2, 3].map((_, i: number) => (
              <div className="rounded-sm overflow-hidden" key={i}>
                <div className="banner_images">
                  <img
                    src="https://cdn1.codashop.com/S/content/mobile/images/news/MCM-48_ID_CODAREWARDS_NEWSUPDATEBANNER_MCM-48_MAY2024_Indonesia.jpeg"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="news_content bg-white px-3 py-2">
                  <h6 className=" font-semibold  font-karla text-[15px]">
                    AWAS!! Jangan sampai SKIP dapetin Coda Rewards pakai GoPay!
                    Ada Bonus sampai 8% buat kamu!
                  </h6>
                  <p className="font-karla font-text-content text-sm mt-2 pb-1">
                    Terbatas cuma sampai 10 Juli aja! Buruan cek codashop.com
                    sekarang, Kawan Codashop. #codarewards
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about_coda" className="mt-12">
          <h1 className="text-2xl md:text-3xl font-poetsenOne text-white py-5">
            Codashop Indonesia
          </h1>

          <div className="about_coda_header">
            <h4 className="text-white font-karla font-medium text-lg">
              Codashop: Website top-up terbesar, tercepat dan terpercaya di
              Indonesia
            </h4>
            <p className="text-white font-light text-sm mt-2">
              Setiap bulannya, jutaan gamers menggunakan Codashop untuk
              melakukan pembelian kredit game dengan lancar: tanpa registrasi
              ataupun log-in, dan kredit permainan akan ditambahkan secara
              instan. Top-up Mobile Legends, Free Fire, Ragnarok M, dan berbagai
              game lainnya!
            </p>
          </div>

          <div className="about_coda_payment grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
            {codaAbout.slice(0, 6).map((item, i: number) => (
              <div className="flex items-center gap-3 " key={i}>
                <div className="images bg-white p-3 rounded-full relative -top-2">
                  <img
                    src={item.images}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="about_details_payment flex flex-col gap-2 w-full">
                  <h5 className="text-white font-medium font-karla">
                    {item.title}
                  </h5>
                  <p className="text-white font-karla font-light text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
