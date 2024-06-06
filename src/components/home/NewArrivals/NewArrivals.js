import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="PC Gaming" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="PC Gaming STAR CHICKEN MINI |  GTX 1030, Intel"
            price="6,999,000₫"
            color=""
            badge={true}
            des="Không có mô tả."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="PC Gaming STAR CHICKEN MINI | GTX 1650, Intel"
            price="9,580,000₫"
            color=""
            badge={true}
            des="Không có mô tả."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="PC Gaming STAR CHICKEN PLUS White | GTX 1650, Intel"
            price="10,155,000₫"
            color=""
            badge={true}
            des="Không có mô tả."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="PC Gaming STAR CHICKEN ASSASSIN | R5 3600, GTX 1660 SUPER"
            price="11,770,000₫"
            color=""
            badge={false}
            des="Không có mô tả."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrFive}
            productName="PC Gaming STAR CYPHER | I3 12100F, RTX 3050, Intel"
            price="11,799,000₫"
            color=""
            badge={false}
            des="Không có mô tả."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
