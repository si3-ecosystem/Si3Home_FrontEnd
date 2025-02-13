import React from "react";
import Link from "next/link";
import Image from "next/image";
import loginimage from "@/public/loginframe.png";
import ethermailimg from "@/public/ethermail.png";
import walletconnectimg from "@/public/walletconnect.png";
import metamaskimg from "@/public/metamask.png";

const Login: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#FDCFFB] to-[#FFEDCF] p-4">
            <div className="w-full max-w-5xl">
                <nav className="w-full p-4 bg-transparent flex justify-between items-center absolute top-0 left-0">
                    <Link href="/" className="text-white text-5xl font-bold uppercase">
                        <p className="text-2xl md:text-4xl text-black font-clesmont font-black">{"SI<3>"}</p>
                    </Link>
                </nav>
                <div className="flex items-center justify-center p-4 w-full mt-16">
                    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg w-full overflow-hidden max-w-5xl">
                        <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-1/2 order-2 md:order-1">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className=" mt-2 font-medium text-sm">It&apos;s so nice to SI you 👋</p>
                            <div className="mt-4 space-y-3 md:mt-6 md:space-y-4">
                                <button className="w-full flex items-center gap-3 p-2 md:p-3 border rounded-lg bg-gray-100 hover:bg-gray-200">
                                    <Image src={metamaskimg} alt="Metamask" width={20} height={20} />
                                    <span className="text-sm md:text-md">Metamask</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-2 md:p-3 border rounded-lg bg-gray-100 hover:bg-gray-200">
                                    <Image src={walletconnectimg} alt="WalletConnect" width={20} height={20} />
                                    <span className="text-sm md:text-md">WalletConnect</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-2 md:p-3 border rounded-lg bg-gray-100 hover:bg-gray-200">
                                    <Image src={ethermailimg} alt="EtherMail" width={20} height={20} />
                                    <span className="text-sm md:text-md">EtherMail</span>
                                </button>
                            </div>
                            <div className="my-4 md:my-6 flex items-center">
                                <hr className="flex-grow border-gray-300" />
                                <span className="px-2 md:px-3 text-gray-500 text-sm md:text-md">OR</span>
                                <hr className="flex-grow border-gray-300" />
                            </div>
                            <div>
                                <label className="block text-sm md:text-md font-medium">Email</label>
                                <div className="relative mt-2">
                                    <input type="email" className="w-full p-2 md:p-3 border rounded-lg text-sm md:text-md" placeholder="youremail@mail.com" />
                                    <button className="absolute inset-y-0 right-0 px-3 md:px-4 flex items-center bg-purple-500 text-white rounded-r-lg text-sm md:text-md">
                                        →
                                    </button>
                                </div>
                            </div>
                            <p className="mt-3 md:mt-4 text-center text-sm md:text-md text-gray-500">
                                New to Si3? <Link href="/" className="text-purple-500 font-semibold">Explore our membership</Link>
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
                            <Image
                                src={loginimage}
                                alt="Preview"
                                layout="intrinsic"
                                width={600}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
