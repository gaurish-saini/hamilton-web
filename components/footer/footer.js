import Image from "next/image";
import twitter from "../../styles/assests/twitter.png";
import facebook from "../../styles/assests/facebook.png";
import youtube from "../../styles/assests/youtube.png";

export default function Footer() {
  const aboutUs = [
    {
      title: "About Milton",
      link: "/",
    },
    {
      title: "Vision, Mission & Values",
      link: "/",
    },
    {
      title: "Awards",
      link: "/",
    },
  ];
  const career = [
    {
      title: "Life at Milton",
      link: "/",
    },
    {
      title: "Opportunities",
      link: "/",
    },
  ];
  const policies = [
    {
      title: "Terms & Conditions",
      link: "/",
    },
    {
      title: "Privacy Policy",
      link: "/",
    },
    {
      title: "Shipping Policy",
      link: "/",
    },
    {
      title: "Cancellation & Return Policy",
      link: "/",
    },
    {
      title: "Payment Policy",
      link: "/",
    },
    {
      title: "Security",
      link: "/",
    },
  ];
  const otherOptions = [
    {
      title: "Blogs",
      link: "/",
    },
    {
      title: "Contact Us",
      link: "/",
    },
    {
      title: "Distributors Application Form",
      link: "/",
    },
    {
      title: "Media",
      link: "/",
    },
    {
      title: "FAQs",
      link: "/",
    },
    {
      title: "Catalog",
      link: "/",
    },
    {
      title: "Sitemap",
      link: "/",
    },
  ];

  return (
    <div className="flex flex-col bg-riceFlower px-[140px] pt-[60px] text-primaryBlack">
      <div className="flex flex-row pb-10 border-b-[1px] border-oxfordBlue/[50] ">
        <div className="flex flex-col">
          <text className="font-bold text-lg leading-[24px]">Join us</text>
          <text className="mt-[2px]">
            Get exclusive offers, inspiration, and lots more to help bring your
            ideas to life. All for free!
          </text>
          <button className="mt-[15px] font-bold text-white bg-primaryBlack rounded-[5px] py-[15px] px-[47px] w-[157px] h-[50px] tracking-[2px] text-[13px]">
            Join Us
          </button>
        </div>
        <div className="flex flex-col pl-10">
          <text className="font-bold text-base">About Us</text>
          {aboutUs.map((about) => {
            return (
              <a className="pt-2.5" href={about.link} key={about.title}>
                <text>{about.title}</text>
              </a>
            );
          })}
        </div>
        <div className="flex flex-col pl-10">
          <text className="font-bold text-base">Career</text>
          {career.map((career) => {
            return (
              <a className="pt-2.5" href={career.link} key={career.title}>
                <text>{career.title}</text>
              </a>
            );
          })}
        </div>
        <div className="flex flex-col pl-10">
          <text className="font-bold text-base">Policies</text>
          {policies.map((policy) => {
            return (
              <a className="pt-2.5" href={policy.link} key={policy.title}>
                <text>{policy.title}</text>
              </a>
            );
          })}
        </div>
        <div className="flex flex-col pl-10 font-semibold">
          {otherOptions.map((option) => {
            return (
              <a className="pb-2.5" href={option.link} key={option.title}>
                <text>{option.title}</text>
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-between py-5">
        <text className="text-primaryBlack/[80] ">
          Copyright@2021 Hamilton Housewares Pvt. Ltd. All Right Reserved
        </text>
        <div>
          <ul className="flex flex-row">
            <li>
              <a href="#">
                <Image src={twitter} alt="twitter" width={25} height={25} />
              </a>
            </li>
            <li className="px-3.5">
              <a href="#">
                <Image src={facebook} alt="facebook" width={25} height={25} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={youtube} alt="youtube" width={25} height={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
