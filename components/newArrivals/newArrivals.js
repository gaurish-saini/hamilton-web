import Image from "next/image";
import image1 from "../../styles/assests/bestsellers/1.png";
import image2 from "../../styles/assests/bestsellers/2.png";
import image3 from "../../styles/assests/bestsellers/3.png";
import image4 from "../../styles/assests/bestsellers/4.png";
import image5 from "../../styles/assests/bestsellers/5.png";
import backward from "../../styles/assests/backward_arrow_bestsellers.png";
import forward from "../../styles/assests/forward_arrow_bestsellers.png";
import wishlist from "../../styles/assests/wishlist.png";
import starFilled from "../../styles/assests/star_filled.png";
import starEmpty from "../../styles/assests/star_empty.png";

export default function NewArrivals() {
  const bestsellers = [
    {
      productImage: image1,
      productName: "Elfin",
      description: "Stainless Steel Hot and Cold Water Bottle (300ml)",
      brand: "Milton",
      rating: "4",
      price: "552",
      wishlist: "false",
      status: "BESTSELLER",
      cta: "/",
    },
    {
      productImage: image2,
      productName: "Casserole",
      description: "Milton Crave Insulated Inner Casserole (14cm)",
      brand: "Milton",
      rating: "4",
      price: "450",
      wishlist: "false",
      status: "SALE",
      cta: "/",
    },
    {
      productImage: image3,
      productName: "Electron",
      description: "Executive Lunch Box (Set of 3)",
      brand: "Milton",
      rating: "4",
      price: "350",
      mrp: "700",
      offer: "50% OFF",
      wishlist: "false",
      status: "BESTSELLER",
      cta: "/",
    },
    {
      productImage: image4,
      productName: "Glass Tiffin",
      description: "All Fresh Borosilicate Glass Tiffin (400ml, Set of 3)",
      brand: "Milton",
      rating: "4",
      price: "650",
      wishlist: "false",
      status: "SALE",
      cta: "/",
    },
    {
      productImage: image5,
      productName: "Borosilicate Round Jar",
      description: "Borosilicate Round Storage Glass Jar (600ml)",
      brand: "Milton",
      rating: "4",
      price: "552",
      wishlist: "false",
      status: "SALE",
      cta: "/",
    },
  ];

  return (
    <div className="flex flex-col pt-20">
      <div className="flex flex-row px-[140px] pb-10 justify-between">
        <text className="text-primaryBlack font-semibold text-4xl leading-[43px]">
          New Arrivals
        </text>
        <div className="flex flex-row">
          <button className="bg-primaryBlack w-12 h-12 rounded-l-[5px]">
            <Image alt="backward" src={backward} width={9} height={14} />
          </button>
          <button className="bg-primaryBlack w-12 h-12 rounded-r-[5px]">
            <Image alt="forward" src={forward} width={9} height={14} />
          </button>
        </div>
      </div>
      <div className="flex flex-row pl-[125px] overflow-hidden">
        {bestsellers.map((product) => {
          return (
            <div
              key={product.productName}
              className="flex flex-col hover:bg-primaryBlack/5 p-[15px] rounded-[5px]"
            >
              <div className="min-w-[260px] relative">
                <div className="absolute flex flex-row top-2.5 z-10">
                  <text className="bg-greenYellow h-[22px] rounded-r-[5px] py-1 px-2.5 text-primaryBlack font-bold text-[13px] leading-[15px] tracking-[0.5px]">
                    {product.status}
                  </text>
                  <div className="ml-[114px]">
                    <Image
                      src={wishlist}
                      alt="wishlist"
                      width={35}
                      height={35}
                    />
                  </div>
                </div>
                <Image
                  src={product.productImage}
                  width={260}
                  height={260}
                  alt="product"
                />
              </div>
              <ul className="flex flex-row pt-5">
                <li className="mr-[2px]">
                  <Image src={starFilled} width={13} height={12} alt="rating" />
                </li>
                <li className="mr-[2px]">
                  <Image src={starFilled} width={13} height={12} alt="rating" />
                </li>
                <li className="mr-[2px]">
                  <Image src={starFilled} width={13} height={12} alt="rating" />
                </li>
                <li className="mr-[2px]">
                  <Image src={starFilled} width={13} height={12} alt="rating" />
                </li>
                <li className="mr-[2px]">
                  <Image src={starEmpty} width={13} height={12} alt="rating" />
                </li>
              </ul>
              <text className="text-primaryBlack text-lg leading-[24px] font-bold pt-[15px]">
                {product.productName}
              </text>
              <text className="text-primaryBlack/80 py-[6px] text-sm">
                {product.description}
              </text>
              <text>{product.brand}</text>
              <text className="pt-[6px] text-lg leading-[24px] font-bold">
                <text className="font-normal">&#8377;</text>
                {product.price}
              </text>
              <button className="mt-[15px] py-[15px] px-[76px] font-bold text-white tracking-[2px] text-[13px] leading-[20px] rounded-[5px] bg-amaranth">
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
