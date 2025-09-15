"use client";
import { useEffect, useState } from "react";
import { BannerDataTypes, ProductsTypes } from "../app/page";
import FooterBanner from "../comps/FooterBanner";
import MainBanner from "./MainBanner";
import Products from "../app/Products";

interface HomeProps {
  products: ProductsTypes[];
  bannerData: BannerDataTypes[];
}

const Home = ({ products, bannerData }: HomeProps) => {
  const [sortedProducts, setSortedProducts] = useState<ProductsTypes[]>(products);
  const [sortOrder, setSortOrder] = useState<string>("");

  useEffect(() => {
    let newSortedProducts = [...products];
    if (sortOrder === "lowToHigh") {
      newSortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      newSortedProducts.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(newSortedProducts);
  }, [sortOrder, products]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  return (
    <main>
      {/* === MAIN BANNER  */}
      <MainBanner banner={bannerData[0]} />

      <section className="mb-4 flex items-center flex-col">
        <h1
          className="headTitle px-8 py-4 sm:py-2 sm:text-4xl text-2xl text-secondary
         font-sans font-extrabold sm:rounded-t-3xl"
        >
          Best Selling Headphones
        </h1>
        <div className="mt-4">
          <label htmlFor="sort" className="mr-2 text-secondary">Sort by Price:</label>
          <select
            id="sort"
            onChange={handleSortChange}
            value={sortOrder}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </section>

      {/* === SHOW PRODUCTS  */}
      <section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
       lg:mx-20 overflow-hidden
      "
      >
        {/* === MAP PRODUCTS  */}
        {sortedProducts?.map((product: ProductsTypes) => {
          return <Products key={product._id} products={product} />;
        })}
      </section>

      {/* ==== FOOTER BANNER  */}
      <FooterBanner bannerData={bannerData && bannerData[1]} />
    </main>
  );
};

export default Home;
