import { Image } from "antd";

export default function HeroDiversityTracker() {
  return (
    <section className="min-h-[300px] lg:min-h-[493px] p-8 flex items-center bg-gradient-to-r relative from-[#B3F1FF] to-[#DFD8FA]">
      <div className="max-w-7xl flex flex-col gap-y-3 md:flex-row items-center justify-between mx-auto flex-1">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl sm:text-[40px] text-center md:text-left leading-[120%] sm:leading-10 font-black font-clesmont">
            ECOSYSTEMS FLOURISH WITH DIVERSITY
          </h1>
          {/* <p>
            Your participation matters. By taking a few moments to complete the
            tracker, you help shape a more inclusive Web3. All responses are
            anonymous & confidential, and your feedback directly impacts how we
            evolve as a community.
          </p> */}
        </div>
        <div className="max-w-[200.245px] sm:max-w-[384.589px] w-full">
          <Image
            src="/images/deai-tracker-banner-img.png"
            alt="Image"
            preview={false}
          />
        </div>
      </div>
    </section>
  );
}
