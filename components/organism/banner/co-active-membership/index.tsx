export function CoActiveMembershipBanner() {
  return (
    <div className="w-full bannerBg p-8">
      <div className="max-w-[1002px] w-full mx-auto lg:p-8 rounded-lg">
        <h2 className="text-center text-[#4428F2] text-2xl font-mono mb-4">
          EXPLORE THE DIVERSITY-LED WEB3 ECOSYSTEM
        </h2>
        <p className="text-center text-gray-700 mb-10  mx-auto">
          Explore the broader women in web3 ecosystem of communities and events.
        </p>
        <div className="flex flex-wrap inline-color gap-4 justify-center">
          <button className="bg-black text-white px-6 py-2 lg:py-3 rounded hover:bg-gray-800 transition-colors">
            Communities
          </button>
          <button className="bg-black text-white px-6 py-2 lg:py-3 rounded hover:bg-gray-800 transition-colors">
            Experiences
          </button>
        </div>
      </div>
    </div>
  );
}
