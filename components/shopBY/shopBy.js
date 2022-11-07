import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import Image from "next/image";

import image1 from "../../styles/assests/shopBy/1.png";
import image2 from "../../styles/assests/shopBy/2.png";
import image3 from "../../styles/assests/shopBy/3.png";
import image4 from "../../styles/assests/shopBy/4.png";
import image5 from "../../styles/assests/shopBy/5.png";
import image6 from "../../styles/assests/shopBy/6.png";
import image7 from "../../styles/assests/shopBy/7.png";
import image8 from "../../styles/assests/shopBy/8.png";
import image9 from "../../styles/assests/shopBy/9.png";
import image10 from "../../styles/assests/shopBy/10.png";
import image11 from "../../styles/assests/shopBy/11.png";
import image12 from "../../styles/assests/shopBy/12.png";
import forward from "../../styles/assests/forward_arrow_shopBy.png";

const ShopBy = ({ router }) => {
  const {
    query: { tab },
  } = router;

  const isTabOne = tab === "1" || tab == null;
  const isTabTwo = tab === "2";
  const isTabThree = tab === "3";
  const products = [
    {
      image: image1,
      title: "Gifting",
      link: "#",
    },
    {
      image: image2,
      title: "Office",
      link: "#",
    },
    {
      image: image3,
      title: "School & Kids Range",
      link: "#",
    },
    {
      image: image4,
      title: "Gym & Sports",
      link: "#",
    },
    {
      image: image5,
      title: "Travel & Outdoors",
      link: "#",
    },
    {
      image: image6,
      title: "Home & Garden",
      link: "#",
    },
    {
      image: image7,
      title: "Kitchen Essentials",
      link: "#",
    },
    {
      image: image8,
      title: "Fridge-Safe Storage",
      link: "#",
    },
    {
      image: image9,
      title: "Bathroom Supplies",
      link: "#",
    },
    {
      image: image10,
      title: "Cleaning Supplies",
      link: "#",
    },
    {
      image: image11,
      title: "Safety Essentials",
      link: "#",
    },
    {
      image: image12,
      title: "Barware",
      link: "#",
    },
  ];

  const [tabSelected, setTabSelected] = React.useState(false);
  const [tabUnselected, setTabUnselected] = React.useState(true);
  function handleClick() {
    setTabSelected(true);
  }
  return (
    <div className="mx-[140px] mt-20">
      {/* head */}
      <text className="text-primaryBlack font-semibold text-4xl leading-[43px]">
        Shop By
      </text>
      <div className="my-10 flex flex-row border-b-[1px] border-primaryBlack/50 pb-[15px]">
        {/* tabs */}
        <div className="mr-10">
          <Link scroll={false} href={{ pathname: "/", query: { tab: "1" } }}>
            <a onClick={handleClick}>
              <div className="flex flex-row">
                <text className="font-semibold text-amaranth text-[22px] leading-[28px]">
                  Usage
                </text>
                <text className="font-medium ml-2.5 pl-[7px] text-white bg-amaranth rounded-[5px] w-[28px] h-[28px] text-sm leading-[28px]">
                  12
                </text>
              </div>
            </a>
          </Link>
        </div>
        <div className="mr-10">
          <Link scroll={false} href={{ pathname: "/", query: { tab: "2" } }}>
            <a onClick={handleClick}>
              <div className="flex flex-row">
                <text className="font-semibold text-amaranth text-[22px] leading-[28px]">
                  Products
                </text>
                <text className="font-medium ml-2.5 pl-[7px] text-white bg-amaranth rounded-[5px] w-[28px] h-[28px] text-sm leading-[28px]">
                  11
                </text>
              </div>
            </a>
          </Link>
        </div>
        <div className="mr-10">
          <Link scroll={false} href={{ pathname: "/", query: { tab: "3" } }}>
            <a>
              <div className="flex flex-row">
                <text className="font-semibold text-amaranth text-[22px] leading-[28px]">
                  Material
                </text>
                <text className="font-medium ml-2.5 pl-[7px] text-white bg-amaranth rounded-[5px] w-[28px] h-[28px] text-sm leading-[28px]">
                  10
                </text>
              </div>
            </a>
          </Link>
        </div>
      </div>

      {/* body */}
      <div>
        {isTabOne && (
          <React.Fragment>
            <div className="grid grid-cols-4 gap-10">
              {products.map((product) => {
                return (
                  <a
                    className="group py-2.5 pl-2.5 pr-5 flex flex-row items-center justify-between border-[1px] border-primaryBlack/10 rounded-[5px] hover:bg-primaryBlack"
                    key={product.title}
                    href={product.link}
                  >
                    <div className="flex flex-row items-center">
                      <Image
                        className="bg-pearlBush rounded-[5px] group-hover:bg-white"
                        src={product.image}
                        alt={product.title}
                        width={80}
                        height={80}
                      />
                      <text className="group-hover:text-white w-min ml-[23px] font-semibold text-base leading-[22px] text-primaryBlack">
                        {product.title}
                      </text>
                    </div>
                    <div>
                      <Image
                        src={forward}
                        alt="forward button"
                        width={5}
                        height={8}
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </React.Fragment>
        )}
        {isTabTwo && <React.Fragment>This is tab two content</React.Fragment>}
        {isTabThree && (
          <React.Fragment>This is tab three content</React.Fragment>
        )}
      </div>
    </div>
  );
};

export default withRouter(ShopBy);
