import Link from "next/link";

export default function JoinForm(){
    return (
        <div className="min-h-[282px] bg-[rgba(213,116,182,0.2)] my-20 py-6">
           <div className="max-w-[1002px] mx-auto">
            <p className="text-4xl font-regular font-mono  uppercase text-[#4428F2]">JOIN OUR SI Her Co-Active.</p>
            <p className="mt-4 text-xl font-mono">Go deeper with {"SI<3>"} and develop your leadership potential in our private membership community.</p>
            <Link href={"/onboard"}>
                <button className="bg-[#1C1B22] mt-10 font-mono text-white py-4 rounded-lg px-6 text-xl">Apply Here</button>
            </Link>
           </div>
        </div>
    )
}