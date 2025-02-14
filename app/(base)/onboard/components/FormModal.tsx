import { Image } from "antd";
import Link from "next/link";

interface ErrorModalProps{
    errorMessage: string;
    closeModal:()=>void;
}

export function ErrorModal(props: ErrorModalProps) {
    return (
        <div className="fixed top-0 bg-[rgba(0,0,0,0.4)] p-4 left-0 w-full h-full flex items-center justify-center">
            <div className="p-4 sm:p-8 flex-1 max-w-[400px] rounded-lg bg-white min-h-[200px]">
                <p className="text-xl md:text-3xl text-red-400 text-center font-bold">Error!</p>
                <p className="font-mono text-center text-sm my-4">{props.errorMessage || "Sorry could not create a member at the moment please try again later"}</p>
                <button onClick={props.closeModal} className="bg-red-500 text-white w-full p-4 py-2 font-medium rounded-md">Close</button>
            </div>
        </div>
    )
}
export function SuccessModal(){
    return (
        <div className="fixed top-0 bg-[rgba(0,0,0,0.4)] p-4 left-0 w-full h-full flex items-center justify-center">
            <div className="p-4 sm:p-8 flex-1 max-w-[400px] rounded-lg bg-white min-h-[300px]">
                <div className="text-center">
                    <Image className="mx-auto" src="/images/success.png" alt="success"/>
                </div>
                <p className="text-xl md:text-6xl  text-center font-bold font-clesmont">Success!</p>
                <p className="text-center text-sm my-4">Congratulations! you have successfully submitted a membership form and we have received your request, we would get back to you as soon as we can </p>
                <Link href={"/"}>
                    <button className="bg-black text-white min-w-[134px] mx-auto block rounded-full p-4 py-2 font-medium">Back to Home</button>
                </Link>
            </div>
        </div>
    )
}

