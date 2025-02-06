import ImageUrl from "@/utils/imageUrl"
import { Image } from "antd"
import Link from "next/link"

interface TestimonialProps{
    testimonial:{
        [key:string]:any
    }
}

export default function SingleTestimonial(props: TestimonialProps) {
    const {testimonial} = props
    console.log({testimonial})
    return (
        <div className="text-left max-w-[821px] px-4 sm:px-8 p-8 border border-gray-400 rounded-lg lg:rounded-[30px] mx-auto bg-white">
            <p className="font-black uppercase text-2xl lg:text-4xl font-clesmont"> {testimonial.title}</p>
            <p className="text-base lg:text-2xl"> {testimonial.description}</p>
            <div className="lg:flex items-center bg-[#EEEEEE] rounded-lg lg:rounded-full p-4 gap-6 md:gap-36 flex-wrap mt-12">
                  <span className="flex gap-2 items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <ImageUrl
                        image={testimonial?.image}
                        className={
                          "rounded-full w-14 h-14 object-cover object-center aspect-auto"
                        }
                      />
                    </div>

                    <div className="flex flex-col ">
                      <h4 className="font-mono text-sm md:text-base text-[#999999]">{testimonial?.name}</h4>
                      <p className="text-sm sm:text-base">{testimonial?.title}</p>
                    </div>
                  </span>
                  <div className="sm:ml-auto flex items-center gap-2 uppercase font-mono">
                    <Link href={testimonial?.link ?? "/"}><button className="text-sm md:text-base"><Image src="/images/url-icon.svg" alt="Url Icon" preview={false}/></button></Link>
                  </div>
                </div>
        </div>
    )
}