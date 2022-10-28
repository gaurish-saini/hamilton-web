import Image from "next/image";
import miltonBrand from "../../styles/assests/milton_brand.png";
import treo from "../../styles/assests/treo.png";
import spotzero from "../../styles/assests/spotzero.png";
import procook from "../../styles/assests/procook.png";
import forwardArrowRed from "../../styles/assests/forward_arrow_red.png";

export default function ShopBrands() {
  const brands = [
    {
      logo: miltonBrand,
      name: "milton",
      subtitle: "Ac nunc amet lacusdo bibendum tortor diams",
      cta: "SHOP",
      width: "116",
      height: "30",
    },
    {
      logo: treo,
      name: "treo",
      subtitle: "Ac nunc amet lacusdo bibendum tortor diams",
      cta: "SHOP",
      width: "78",
      height: "37",
    },
    {
      logo: spotzero,
      name: "spotzero",
      subtitle: "Ac nunc amet lacusdo bibendum tortor diams",
      cta: "SHOP",
      width: "148",
      height: "40",
    },
    {
      logo: procook,
      name: "procook",
      subtitle: "Ac nunc amet lacusdo bibendum tortor diams",
      cta: "SHOP",
      width: "73",
      height: "36",
    },
  ];
  //px-[30px] pb-9 pt-[134px]
  return (
    <div className="bg-tanHide/[0.1]">
      <div className="flex flex-row">
        <div className="origin-center -rotate-90 pt-[134px] px-[30px] pb-9 mr-20 text-riceFlower bg-amaranth text-[28px] font-semibold leading-[30px]">
          Shop Brands
        </div>
        {brands.map((brand) => {
          return (
            <div
              className="p-14 flex flex-col justify-center items-center hover:bg-tanHide"
              key={brand.name}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
              />
              <div className="text-sm opacity-60 text-primaryBlack text-center pb-5 pt-2.5">
                {brand.subtitle}
              </div>
              <a href="#">
                <div className="flex flex-row items-center">
                  <div className="text-amaranth font-bold text-[13px] leading-[20px] tracking-[2px]">
                    SHOP
                  </div>
                  <div className="ml-[7px]">
                    <Image src={forwardArrowRed} alt="cta" width={8} />
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
