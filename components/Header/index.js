import Image from "next/image";
import logo from "../../styles/assests/milton_logo.png";
import search from "../../styles/assests/search.png";
import locationPin from "../../styles/assests/location_pin.png";
import bag from "../../styles/assests/bag.png";
import user from "../../styles/assests/profile.png";

export default function Header() {
  return (
    <div className="px-20 py-[30px] headerShadow">
      <div className="flex flex-row ">
        <Image src={logo} alt="logo" width={94} height={31} />
        <div className="ml-[30px]">
          <ul className="flex flex-row">
            <li>New Launches</li>
            <li className="ml-5">Products</li>
            <li className="ml-5">Brands</li>
            <li className="ml-5">Sales</li>
          </ul>
        </div>
        <form className="ml-[200px] rounded-[5px] flex flex-row">
          <input
            className=""
            placeholder="What are you looking for today?"
            type="text"
          />
          <button>
            <Image src={search} width={18} height={18} alt="search" />
          </button>
        </form>
        <div className="flex flex-row ml-[30px]">
          <div className="flex flex-row">
            <button>
              <Image src={locationPin} width={13} height={19} alt="pin" />
            </button>
            <span className="ml-2 font-medium text-xs">PINCODE</span>
          </div>
          <button className="ml-[30px]">
            <Image src={user} width={16} height={18} alt="user" />
          </button>
          <button className="ml-[30px]">
            <Image src={bag} width={16} height={18} alt="bag" />
          </button>
        </div>
      </div>
    </div>
  );
}
