import Image from "next/image";

export default function Brand() {
  return (
    <div className="px-5 md:px-16 py-20 md:py-28 flex flex-col md:flex-row justify-center gap-6 md:gap-12">
      <div className="">
        <div className="space-y-5 mb-6 md:mb-16">
          <h1 className="text-2xl md:text-4xl text-[#44442288]">
            Activate Your <span className="text-primary">Web3 Brand</span>
          </h1>

          <p className="font-mono text-[#999999] text-xl">
            Within our membership platform, our members receive their own
            personal web3 page, livestreaming channel, database of speaking
            outlets, educational programming, and business growth opportunities.
          </p>
        </div>

        {Array.from({ length: 4 }).map((item, index) => (
          <div key={index} className="mt-4">
            <div className="text-[#999999] border border-[#999999] py-2.5 px-[18px] flex items-center justify-between rounded-lg">
              <h2 className="md:text-2xl">Decentralized Identities</h2>
              <Image
                src={"/up.png"}
                width={28}
                height={28}
                alt="up_icon"
                className="h-7 w-7"
              />
            </div>
          </div>
        ))}
      </div>
      <Image
        src={"/videoImage.png"}
        width={372}
        height={578}
        alt="videoImage"
        className="w-[372px] h-[578px] rounded-2xl"
      />
    </div>
  );
}
