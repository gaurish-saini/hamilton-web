import Image from "next/image";
import backward from "../../styles/assests/backward_arrow_bestsellers.png";
import forward from "../../styles/assests/forward_arrow_bestsellers.png";
import forward_blog from "../../styles/assests/forward_arrow_blogs.png";
import image1 from "../../styles/assests/blogs/1.png";
import image2 from "../../styles/assests/blogs/2.png";
import image3 from "../../styles/assests/blogs/3.png";

export default function Blogs() {
  const blogs = [
    {
      image: image1,
      title: "Steel bottle like never before!",
      description:
        "Our new steel bottles come with mirror polish and brush metal design for an attractive finish. 3 different capacities which fits perfectly on all occassions",
      date: "20 Jan 2022",
      time: 6,
      views: 150,
      link: "#",
      category: 1,
    },
    {
      image: image2,
      title: "The Porcelain Dinner Set",
      description:
        "An exquisite dinner set to impress your guest or for the days you want to treat your family to a special spread with our best in class dinner set",
      date: "10 Jan 2022",
      time: 2,
      views: 75,
      link: "#",
      category: 2,
    },
    {
      image: image3,
      title: "Quality Food Storage",
      description:
        "Now more than ever, people are beginning to realize the importance of food storage and emergency preparedness. Having the option of long-lasting",
      date: "20 Feb 2022",
      time: 8,
      views: 200,
      link: "#",
      category: 3,
    },
  ];

  return (
    <div className="flex flex-col mx-[140px]">
      <div className="flex flex-row pb-10 justify-between">
        <text className="text-primaryBlack font-semibold text-4xl leading-[43px]">
          Blogs
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
      <div className="flex flex-row justify-center">
        {blogs.map((blog) => {
          return (
            <div
              className="flex flex-col hover:bg-primaryBlack/5 p-[15px] rounded-[5px]"
              key={blog.title}
            >
              <div className="relative">
                <div className="absolute flex flex-row top-2.5 z-10">
                  <text className="bg-riceFlower h-[22px] rounded-r-[5px] py-1 px-2.5 text-primaryBlack font-bold text-[13px] leading-[15px] tracking-[0.5px]">
                    CATEGORY {blog.category}
                  </text>
                </div>
                <Image src={blog.image} alt="" width={360} height={259} />
              </div>
              <div className="text-xs leading-[20px] text-primaryBlack mt-5">
                {blog.date} | {blog.time} min read | {blog.views} views
              </div>
              <text className="mt-2.5 font-semibold text-primaryBlack text-[22px] leading-[28px]">
                {blog.title}
              </text>
              <p className="w-[360px] h-[72px] text-ellipsis overflow-hidden text-base mt-2.5 text-primaryBlack/70">
                {blog.description}...
              </p>
              <a
                className="mt-5 flex flex-row items-center text-primaryBlack/50 font-semibold text-[13px] leading-[20px] tracking-[2px]"
                href={blog.link}
              >
                <text>READ BLOG</text>
                <div className="ml-2.5 opacity-50">
                  <Image src={forward_blog} alt="" width={8} height={8} />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
