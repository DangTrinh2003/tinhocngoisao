import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Laptop Gaming" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Laptop Gaming MSI GF63"
          price="21,490,000₫"
          color=""
          badge={true}
          des="Không có mô tả."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Laptop Gaming Acer Nitro 5 Tiger"
          price="21,800,000₫"
          color=""
          badge={false}
          des="Không có mô tả."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Laptop Gaming Lenovo Legion 5"
          price="24,990,000₫"
          color=""
          badge={true}
          des="Không có mô tả."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Laptop MSI Thin 15 B13UC"
          price="20,900,000₫"
          color=""
          badge={false}
          des="Không có mô tả."
        />
      </div>
    </div>
  );
};

export default BestSellers;
