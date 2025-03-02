export function MembershipBanner() {
  return (
    <div className="w-full bg-[url('/images/membershipbg.png')] bg-cover p-8 h-full z-10">
      <div className="h-[409px] z-20  w-full mx-auto  rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-center  text-[32px] lg:text-5xl font-clesmont mb-4">
          JOIN OUR SI Her Co-Active.
        </h2>
        <p className="text-center text-gray-700 mb-8 text-[17px] lg:text-[28px] mx-auto max-w-[700px]">
          Go deeper with SI{"<3>"} and develop your leadership potential in our
          private membership community.
        </p>
        <div className="flex justify-center">
          <button className="bg-black text-white px-6 py-3 lg:py-4 rounded-full hover:bg-[#3c1fef] transition-colors">
            Apply Here
          </button>
        </div>
      </div>
    </div>
  );
}
