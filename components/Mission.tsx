export default function Mission() {
  return (
    <div className="bg-[url('/mission.png')] md:bg-[url('/mission-2.png')] bg-no-repeat px-5 md:px-16  bg-cover bg-center h-[832px] flex items-center">
      <div className="flex flex-col md:flex-row gap-6 md:gap-44">
        <div className="text-white w-full md:w-3/4">
          <h1 className="text-2xl md:text-4xl">Our Mission</h1>
          <p className="font-mono text-xl py-3 md:pt-4">
            Our mission is to co-create a more accessible technology and
            currency landscape, based on Web 3.0 principles of a decentralized
            and fair internet. We create applications and programming centering
            women and non-binary humans, with a strong focus on the emerging
            markets. We believe that diverse voices and perspectives,
            particularly those that are undervalued, hold great potential to
            disrupt and evolve our present-day systems.
          </p>
        </div>

        <div className="bg-blackish px-8 py-12 w-full md:w-1/4 text-white">
          <h3>{"Si3's Values:"}</h3>
          <ul className="list-disc font-mono pl-5">
            <li>Accessibility</li>
            <li>Collaborative Growth</li>
            <li>Financial Inclusion</li>
            <li>Diverse Representation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
