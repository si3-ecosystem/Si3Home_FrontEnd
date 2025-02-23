import Link from "next/link";
import { ConfigProvider, Image, Spin } from "antd";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface ErrorModalProps {
  errorMessage: string;
  closeModal: () => void;
}

export default function Loader() {
  return (
    <div className="fixed top-0 bg-[rgba(0,0,0,0.4)] left-0 w-full h-full flex items-center justify-center">
      <div className="p-4">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#FAB7D0",
            },
          }}
        >
          <Spin size="large" />
        </ConfigProvider>
      </div>
    </div>
  );
}
export function ErrorModal(props: ErrorModalProps) {
  return (
    <div className="fixed top-0 bg-[rgba(0,0,0,0.4)] p-4 left-0 w-full h-full flex items-center justify-center">
      <div className="p-4 sm:p-8 flex-1 max-w-[400px] rounded-lg bg-white min-h-[200px]">
        <p className="text-xl md:text-3xl text-red-400 text-center font-bold">
          Error!
        </p>
        <p className="font-mono text-center text-sm my-4">
          {props.errorMessage ||
            "Sorry could not submit at the moment please try again later"}
        </p>
        <button
          onClick={props.closeModal}
          className="bg-red-500 text-white w-full p-4 py-2 font-medium rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
export function SuccessModal(props: { closeModal: () => void }) {
  return (
    <div className="fixed top-0 bg-[rgba(0,0,0,0.4)] p-4 left-0 w-full h-full flex items-center justify-center z-50 ">
      <div className="p-4 relative sm:p-8 flex-1 max-w-[731px] w-full rounded-lg bg-white min-h-[300px]">
        <div className="absolute top-4 right-4 w-fit bg-[#e7e7e7] rounded-full p-1">
          <XMarkIcon
            onClick={props.closeModal}
            className="cursor-pointer size-6"
          />
        </div>
        <div className="text-center">
          <Image
            className="mx-auto"
            src="/images/success.png"
            alt="success"
            preview={false}
          />
        </div>
        <p className="text-2xl text-center font-bold font-clesmont">
          Thank you for sharing your voice! 🎉
        </p>
        <p className="text-center text-lg my-4 mb-9">
          Your input helps us build a more inclusive and equitable Web3
          community. Stay connected for updates and meaningful changes inspired
          by your feedback!{" "}
        </p>
        <Link href={"/"}>
          <button className="bg-black text-white min-w-[134px] mx-auto block rounded-full p-4 py-2 font-medium">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
