import Button from "./shared/Button";

export default function Pricing() {
  return (
    <div className="px-5 py-[60px] md:px-16 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div className="p-4 py-7.5 md:p-[53px] text-white rounded-xl bg-price-card flex flex-col justify-between">
        <div className="flex flex-col justify-between gap-16">
          <div>
            <h4 className="text-4xl font-bold">
              Si Her Co-Active Membership ACCESS
            </h4>
            <h3 className="text-[40px] font-medium">
              $300 USD{" "}
              <span className="capitalize text-2xl font-light">
                (one-time fee)
              </span>
            </h3>
          </div>

          <hr className="" />
          <p className="font-outfit text-2xl font-medium">What you receive:</p>
        </div>

        <div className="font-outfit text-2xl font-medium space-y-8">
          <ul className="list-disc pl-8">
            <li>Your own web3 website</li>
            <li>Access to speaking opportunities</li>
            <li>Professional growth education</li>
            <li>Collaboration and partnership opportunities</li>
            <li>Trade With Her crypto school (Summer 2024)</li>
          </ul>

          <Button
            variant="secondary"
            className="w-full flex justify-center py-3 bg-white font-semibold"
          >
            Apply to Si Her
          </Button>
        </div>
      </div>

      <div className="p-4 py-7.5 md:p-[53px] text-white rounded-xl bg-price-card flex flex-col justify-between">
        <div className="flex flex-col justify-between gap-16">
          <div>
            <h4 className="text-4xl font-bold">Si3 Ecosystem Access</h4>
            <h3 className="text-[40px] font-medium">(Free)</h3>
          </div>

          <hr className="" />

          <p className="font-outfit text-2xl font-medium">What you receive:</p>
        </div>

        <div className="font-outfit text-2xl font-medium space-y-8">
          <ul className="list-disc pl-8">
            <li>Web3 Educational Content</li>
            <li>Funding Opportunities</li>
            <li>Micro-Influencer Network Access</li>
            <li>Women in Web3 Community Discovery (in development) </li>
          </ul>

          <Button
            variant="secondary"
            className="w-full flex justify-center py-3 bg-white font-semibold"
          >
            Apply to Si Her
          </Button>
        </div>
      </div>
    </div>
  );
}
