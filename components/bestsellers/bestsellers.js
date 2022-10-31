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

export default function Bestsellers() {
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
    <div className="flex flex-col py-20">
      <div className="flex flex-row px-[140px]">
        <text>Bestsellers</text>
        <div className="flex flex-row">
          <button>
            <Image />
          </button>
          <button>
            <Image />
          </button>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row pl-[125px]">
          {bestsellers.map((product) => {
            return (
              <div
                key={product.productName}
                className="flex flex-col hover:bg-primaryBlack/5 p-[15px]"
              >
                <div className="min-w-[260px]">
                  <Image
                    src={product.productImage}
                    width={260}
                    height={260}
                    alt="product"
                  />
                </div>
                <ul className="flex flex-row">
                  <li>
                    <Image
                      src={starFilled}
                      width={13}
                      height={12}
                      alt="rating"
                    />
                  </li>
                  <li>
                    <Image
                      src={starFilled}
                      width={13}
                      height={12}
                      alt="rating"
                    />
                  </li>
                  <li>
                    <Image
                      src={starFilled}
                      width={13}
                      height={12}
                      alt="rating"
                    />
                  </li>
                  <li>
                    <Image
                      src={starFilled}
                      width={13}
                      height={12}
                      alt="rating"
                    />
                  </li>
                  <li>
                    <Image
                      src={starEmpty}
                      width={13}
                      height={12}
                      alt="rating"
                    />
                  </li>
                </ul>
                <text>{product.productName}</text>
                <text>{product.description}</text>
                <text>{product.brand}</text>
                <text>{product.price}</text>
                <button>ADD TO CART</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
