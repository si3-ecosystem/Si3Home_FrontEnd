"use client";
import Button from "./shared/Button";

export default function Pricing({ pricing }: any) {
  return (
    <div className="px-5 py-[60px] md:px-16 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-[1440px] mx-auto">
      {pricing?.map((item: any, key: number) => (
        <div
          key={key}
          className="p-4 py-7.5 md:p-[53px] text-white rounded-xl bg-price-card flex flex-col "
        >
          <div className="flex flex-col justify-between gap-8 h-[170px]">
            <div>
              <h4 className="text-4xl font-bold">{item.title}</h4>
              {/* <h3 className="text-[40px] font-medium">
                $300 USD{" "}
                <span className="capitalize text-2xl font-light">
                  (one-time fee)
                </span>
              </h3> */}
              <h3 className="text-[40px] font-medium">{item.status}</h3>
            </div>

            <hr className="" />
          </div>

          <div className="font-outfit text-2xl font-medium flex flex-col gap-10 justify-between  flex-1 mt-12">
            <div className="flex flex-col gap-[36px]">
              <p className="font-outfit text-2xl leading-8 font-medium">
                What you receive:
              </p>
              <ul className="list-disc  pl-8 flex flex-col gap-5 md:gap-6">
                {item?.whatYouReceive?.map((list: any, key: number) => (
                  <li key={key} className="md:text-2xl leading-8">
                    {list.item}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="secondary"
              className="w-full flex justify-center py-3 bg-white font-semibold"
            >
              {item.cta.text}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
