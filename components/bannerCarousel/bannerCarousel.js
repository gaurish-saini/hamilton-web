import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner from "../../styles/assests/banner.png";

export default function BannerCarousel() {
  return (
    <Carousel className="h-[580px]" showArrows={false} showStatus={false}>
      <div className="relative">
        <Image src={banner} width={1440} height={580} alt="bannerImage 1" />
        <div className="absolute flex flex-col items-start top-10 left-[140px]">
          <text className="text-[40px] leading-[60px] font-bold text-primaryBlack">
            Chillers &
          </text>
          <text className="text-[66px] leading-[99px] font-[275] text-primaryBlack">
            Coolers
          </text>
          <div className="w-[151px] h-[3px] bg-danube"></div>
          <p className="w-[500px] text-start text-base text-primaryBlack pt-4 pb-5  opacity-80">
            Shop from a wide varieties of Coolers and Chillers like Ice Pails
            and Ice Packs at the best price available online.
          </p>
          <button className="bg-amaranth rounded-[5px] text-white px-9 py-[15px] text-bold text-[13px] leading-[20px] tracking-[2px]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src={banner} width={1440} height={580} alt="bannerImage 1" />
        <div className="absolute flex flex-col items-start top-10 left-[140px]">
          <text className="text-[40px] leading-[60px] font-bold text-primaryBlack">
            Chillers &
          </text>
          <text className="text-[66px] leading-[99px] font-[275] text-primaryBlack">
            Coolers
          </text>
          <div className="w-[151px] h-[3px] bg-danube"></div>
          <p className="w-[500px] text-start text-base text-primaryBlack pt-4 pb-5  opacity-80">
            Shop from a wide varieties of Coolers and Chillers like Ice Pails
            and Ice Packs at the best price available online.
          </p>
          <button className="bg-amaranth rounded-[5px] text-white px-9 py-[15px] text-bold text-[13px] leading-[20px] tracking-[2px]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src={banner} width={1440} height={580} alt="bannerImage 1" />
        <div className="absolute flex flex-col items-start top-10 left-[140px]">
          <text className="text-[40px] leading-[60px] font-bold text-primaryBlack">
            Chillers &
          </text>
          <text className="text-[66px] leading-[99px] font-[275] text-primaryBlack">
            Coolers
          </text>
          <div className="w-[151px] h-[3px] bg-danube"></div>
          <p className="w-[500px] text-start text-base text-primaryBlack pt-4 pb-5  opacity-80">
            Shop from a wide varieties of Coolers and Chillers like Ice Pails
            and Ice Packs at the best price available online.
          </p>
          <button className="bg-amaranth rounded-[5px] text-white px-9 py-[15px] text-bold text-[13px] leading-[20px] tracking-[2px]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src={banner} width={1440} height={580} alt="bannerImage 1" />
        <div className="absolute flex flex-col items-start top-10 left-[140px]">
          <text className="text-[40px] leading-[60px] font-bold text-primaryBlack">
            Chillers &
          </text>
          <text className="text-[66px] leading-[99px] font-[275] text-primaryBlack">
            Coolers
          </text>
          <div className="w-[151px] h-[3px] bg-danube"></div>
          <p className="w-[500px] text-start text-base text-primaryBlack pt-4 pb-5  opacity-80">
            Shop from a wide varieties of Coolers and Chillers like Ice Pails
            and Ice Packs at the best price available online.
          </p>
          <button className="bg-amaranth rounded-[5px] text-white px-9 py-[15px] text-bold text-[13px] leading-[20px] tracking-[2px]">
            Shop Now
          </button>
        </div>
      </div>
    </Carousel>
  );
}
