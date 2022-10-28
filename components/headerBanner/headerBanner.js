import Image from "next/image";
import backwardButton from "../../styles/assests/backward_arrow.png";
import forwardButton from "../../styles/assests/forward_arrow.png";

export default function HomeBanner() {
  return (
    <div className="flex flex-row justify-center py-3 text-white bg-primaryBlack">
      <div>
        <Image
          src={backwardButton}
          alt="backward_arrow"
          width={7}
          height={12}
        />
      </div>
      <div>
        <span className="font-sans text-sm font-medium mx-[140px]">
          Explore all Milton brands right here
        </span>
      </div>
      <div>
        <Image src={forwardButton} alt="forward_arrow" width={7} height={12} />
      </div>
    </div>
  );
}
