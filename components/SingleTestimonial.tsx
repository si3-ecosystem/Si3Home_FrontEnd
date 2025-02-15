import ImageUrl from "@/utils/imageUrl";
import { Image } from "antd";
import Link from "next/link";

interface TestimonialProps {
  testimonial: {
    [key: string]: any;
  };
}

export default function SingleTestimonial(props: TestimonialProps) {
  const { testimonial } = props;
  return (
    <div className="text-left max-w-[821px] px-4 sm:px-8 p-8 border border-gray-400 rounded-lg lg:rounded-[30px] mx-auto bg-white">
      <p className="font-black uppercase text-2xl font-clesmont">
        {" "}
        {testimonial.title}
      </p>
      <p className="text-base lg:text-2xl font-medium">
        {" "}
        {testimonial.description}
      </p>
      <div className="lg:flex items-center bg-[#EEEEEE] rounded-lg lg:rounded-full p-2 py-2 pr-5 gap-6 md:gap-36 flex-wrap mt-12">
        <span className="flex gap-2 items-center">
          <div className="w-11 h-11  rounded-full flex items-center justify-center overflow-hidden">
            <ImageUrl
              image={testimonial?.image}
              className={
                "rounded-full w-11 h-11 object-cover object-center aspect-auto"
              }
            />
          </div>

          <div className="flex flex-col ">
            <h4 className=" text-sm md:text-base leading-none">
              {testimonial?.name}
            </h4>
            <p className="text-sm leading-none text-[#999999]">
              {testimonial?.title}
            </p>
          </div>
        </span>
        <div className="sm:ml-auto flex items-center gap-2 uppercase font-mono">
          <Link target="_blank" href={testimonial?.link ?? "/"}>
            <button className="text-sm md:text-base">
              <Image
                src="/images/url-icon.svg"
                alt="Url Icon"
                preview={false}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
