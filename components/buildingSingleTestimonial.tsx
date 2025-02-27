import ImageUrl from "@/utils/imageUrl";
import { Image } from "antd";
import Link from "next/link";

interface TestimonialProps {
  testimonial: {
    [key: string]: any;
  };
}

export default function BuildingSingleTestimonial(props: TestimonialProps) {
  const { testimonial } = props;
  return (
    <div className="text-left max-w-[821px] px-4 sm:px-8 p-8 border border-gray-400 rounded-lg lg:rounded-[30px] mx-auto bg-white">
      {/* <p className="font-black uppercase text-2xl font-clesmont">
        {" "}
        {testimonial.title}
      </p> */}
      <p className="text-base lg:text-2xl font-medium">
        {" "}
        {testimonial.description}
      </p>
      <div className="lg:flex items-center bg-[#EEEEEE] rounded-lg lg:rounded-full p-2 pl-4 py-2 pr-5 gap-6 md:gap-36 flex-wrap mt-12">
        <span className="flex gap-2 items-center">
          <div className="flex flex-col ">
            <h4 className=" text-sm md:text-base leading-none">
              {testimonial?.companyName}
            </h4>
            {/* <p className="text-sm leading-none text-[#999999]">
              {testimonial?.title}
            </p> */}
          </div>
        </span>
        <div className="sm:ml-auto flex items-center gap-2 uppercase ">
          <div className="w-16 flex items-center justify-center">
            <ImageUrl
              image={testimonial?.image}
              className={
                "rounded-full w-16  object-cover object-center aspect-auto"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
