import Button from "./shared/Button";

export default function Granting() {
  return (
    <div className="px-5 md:px-16">
      <Button className="w-full md:w-fit flex justify-center">
        SUBSCRIBE FOR GRANT UPDATES
      </Button>
      <h1 className="text-2xl md:text-4xl md:text-primary mt-6 font-1000">
        Granting Access
      </h1>
      <p className="font-mono mt-4">
        JULY 10TH 2024 - 11 am - 3 pm CST / UTC 5 (FREE & OPEN EVENT)
      </p>

      <p className="font-mono my-4 md:my-6">
        Discover grant funding opportunities from leading blockchains, <br />{" "}
        protocols and foundations in support of women & non-binary- <br />{" "}
        builders.
      </p>

      <div className="bg-indigo-400 w-3/4 h-2 ml-auto">
        <div></div>
      </div>
    </div>
  );
}
