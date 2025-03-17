import { Product } from "@/constants/productList";
import { Link } from "react-router-dom";

const CardList = ({ productData }: { productData: Product[] }) => {
  return (
    <>
      {productData.map((product, i: number) => (
        <Link to={product.product_link} key={i}>
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
      ))}
    </>
  );
};

export default CardList;
