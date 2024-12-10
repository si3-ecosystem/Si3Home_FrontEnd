export function MembershipBanner() {
  return (
    <div className="w-full bannerBg p-8">
      <div className="max-w-[1002px] w-full mx-auto lg:p-8 rounded-lg">
        <h2 className="text-center text-[#4428F2] text-2xl font-mono mb-4">
          JOIN OUR SI HER CO-ACTIVE.
        </h2>
        <p className="text-center text-gray-700 mb-10  mx-auto">
          Go deeper with SI{"<3>"} and develop your leadership potential in our
          private membership community.
        </p>
        <div className="flex justify-center">
          <button className="bg-black text-white px-6 py-3 lg:py-4 rounded hover:bg-gray-800 transition-colors">
            Apply Here
          </button>
          
        </div>
      </div>
    </div>
  );
}
