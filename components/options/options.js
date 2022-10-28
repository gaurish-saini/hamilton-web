import Image from "next/image";
import download from "../../styles/assests/download_catalogue.png";
import store from "../../styles/assests/store.png";
import forwardArrow from "../../styles/assests/forward_arrow_options.png";

export default function OptionCatalogue() {
  return (
    <div className="grid grid-cols-2 gap-[20px] py-5 text-primaryBlack">
      <a href="#">
        <div className="flex flex-row bg-danube/[0.4] pl-[140px] py-[58px] pr-[66px] rounded-r-[5px]">
          <div className="py-[18px]">
            <Image src={download} width={45} height={50} alt="download" />
          </div>
          <div className="flex flex-col pl-5 justify-center">
            <text className="text-[26px] leading-[39px] font-semibold">
              Download Catlogue
            </text>
            <div className="flex flex-row items-center">
              <div className="w-[402px]">
                <text className="text-base opacity-70">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </text>
              </div>
              <div className="pl-[30px]">
                <Image src={forwardArrow} alt="arrow" width={8} height={12} />
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="#">
        <div className="flex flex-row items-center bg-jaggedIce/[0.8] pr-[140px] py-[58px] pl-[62px] rounded-l-[5px]">
          <div className="py-[18px]">
            <Image src={store} width={47} height={43} alt="download" />
          </div>
          <div className="flex flex-col pl-5 justify-center">
            <text className="text-[26px] leading-[39px] font-semibold">
              Store Locator
            </text>
            <div className="flex flex-row items-center">
              <div className="w-[402px]">
                <text className="text-base opacity-70">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </text>
              </div>
              <div className="pl-[30px]">
                <Image src={forwardArrow} alt="arrow" width={8} height={12} />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
