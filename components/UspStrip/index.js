import Image from "next/image";
import truck from "../../styles/assests/truck_icon.png";
import calender from "../../styles/assests/calender_icon.png";
import mask from "../../styles/assests/mask_icon.png";
import approve from "../../styles/assests/approv_icon.png";

export default function UspStrip() {
  return (
    <div className="px-[140px] py-[38px] flex flex-row justify-between items-center bg-jaggedIce text-primaryBlack font-semibold text-base">
      <div className="flex flex-row items-center leading-[22px]">
        <div className="min-w-[62px]">
          <Image src={truck} width={62} height={46} alt="truck_icon" />
        </div>
        <text className="ml-[18px]">
          Free Shipping
          <br />
          On All Orders
        </text>
      </div>
      <div className="flex flex-row items-center leading-[22px]">
        <div className="min-w-[44px]">
          <Image src={calender} width={44} height={44} alt="truck_icon" />
        </div>
        <text className="ml-[18px]">
          Easy XX Days <br />
          Returns
        </text>
      </div>
      <div className="flex flex-row items-center leading-[22px]">
        <div className="min-w-[60px]">
          <Image src={mask} width={60} height={32} alt="truck_icon" />
        </div>
        <text className="ml-[18px]">
          Safe Shopping <br />
          Experience at Stores
        </text>
      </div>
      <div className="flex flex-row items-center leading-[22px]">
        <div className="min-w-[45px]">
          <Image src={approve} width={45} height={45} alt="truck_icon" />
        </div>
        <text className="ml-[18px]">
          BPA-Free & FDA- <br />
          Approved Products
        </text>
      </div>
    </div>
  );
}
