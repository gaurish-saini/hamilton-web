export default function Offers() {
  return (
    <div className="bg-riceFlower mx-[140px] my-20 flex flex-row px-[60px] rounded-[5px] ">
      <div className="text-primaryBlack flex flex-col py-[53px]">
        <text className="text-4xl leading-[43px] font-semibold">
          Exciting offers
        </text>
        <p className="font-normal text-base pt-2.5 w-[742px]">
          Get 10% cashback on transactions of Rs.10,000 or more on Citi credit &
          debit cards. T&C apply* <br />
          <text>
            Click & Collect available at just Rs. 99 only (Valid for Hyderabad)
            for Navi Mumbai it&apos;s free.
          </text>
        </p>
      </div>
      <div className="pl-[98px] py-[78px]">
        <button className="bg-amaranth rounded-[5px] px-[30px] py-[15px] w-[200px] h-[50px] text-white tracking-[2px] text-[13px] leading-[20px]">
          View All Offers
        </button>
      </div>
    </div>
  );
}
