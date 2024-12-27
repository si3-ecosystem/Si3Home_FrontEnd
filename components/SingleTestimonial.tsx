import ImageUrl from "@/utils/imageUrl"
import Link from "next/link"

interface TestimonialProps{
    testimonial:{
        [key:string]:any
    }
}

export default function SingleTestimonial(props: TestimonialProps) {
    const {testimonial} = props
    return (
        <div className="my-12 text-left max-w-[976px] min-h-[700px]">
            <p className="text-[#4428F2] font-medium text-[40px] leading-[68px] mb-12">TESTIMONIALS</p>
            <p className="font-mono text-[40px] leading-[68px]"> <span className="text-[80px]">{`“`}</span> <br /> {testimonial.description} {`”`}</p>
            <div className="flex items-center gap-6 md:gap-36 flex-wrap mt-12 pr-8">
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
                      <h4 className="font-mono text-[#999999]">{testimonial?.name}</h4>
                      <p className="font-mono text-[#999999]">
                        {/* {testimonial?.title},{" "} */}
                        {/* <a href={testimonial?.link} target="_blank">
                          {testimonial?.companyName}
                        </a> */}
                      </p>
                    </div>
                  </span>
                  <div className="ml-auto flex gap-2 uppercase font-mono">
                    <p>{testimonial?.title}</p>
                    <Link href={testimonial?.link}><button className="text-[#999999] uppercase">{testimonial?.link}</button></Link>
                  </div>
                </div>
        </div>
    )
}