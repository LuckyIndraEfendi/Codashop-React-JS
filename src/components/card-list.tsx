import { Link } from "react-router-dom";
import { useFetchProductList } from "@/hooks/useFetchProductList";
import FallBackLoading from "./loading/fallback-loading";
import { MotionDiv } from "./motion";
import { variant } from "@/lib/utils";

const CardList = () => {
  const { data, isLoading } = useFetchProductList();

  return (
    <>
      {isLoading ? (
        <FallBackLoading />
      ) : (
        data?.map((product, i: number) => (
          <MotionDiv
            className="item sm:px-1 group"
            variants={variant}
            animate="visible"
            initial="hidden"
            transition={{
              delay: i * 0.15,
              ease: "easeInOut",
              duration: "1",
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{ amount: 0 }}
          >
            <Link to={`/checkout/${product.slug_name}`} key={i}>
              <div className="rounded-lg overflow-hidden ">
                <div className="images">
                  <img src={product.thumbnail} alt="" width="100%" />
                </div>
                <div className="home-feeds-clip-path"></div>
                <div className="product-name bg-[rgba(243,239,239,0.1)] py-2 px-2 flex items-center justify-center h-16 md:h-20">
                  <h1 className="text-white text-sm md:text-base lg:text-lg font-karla font-medium text-center">
                    {product.name}
                  </h1>
                </div>
              </div>
            </Link>
          </MotionDiv>
        ))
      )}
    </>
  );
};

export default CardList;
