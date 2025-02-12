import React from "react";
import Link from "next/link";
import Image from "next/image";
import loginimage from "@/public/loginframe.png";
import ethermailimg from "@/public/ethermail.png";
import walletconnectimg from "@/public/walletconnect.png";
import metamaskimg from "@/public/metamask.png";

const Login: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#FDCFFB] to-[#FFEDCF]">
            {/* Navbar */}
            <nav className="w-full p-5 bg-transparent flex justify-between items-center">
                <Link href="/" className="text-white text-5xl font-bold uppercase">
                    <p className="text-2xl md:text-4xl text-black font-clesmont font-black">
                        {"SI<3>"}
                    </p>
                </Link>
            </nav>
            <div className="flex flex-grow items-center justify-center p-5 md:p-10 w-full h-auto md:h-full max-h-[90vh]">
                <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md w-full max-w-3xl overflow-hidden">
                    <div className="p-6 md:p-8 flex flex-col justify-center w-full order-1 md:order-1">
                        <h1 className="text-2xl font-bold">Login</h1>
                        <p className="text-gray-500 mt-2 font-medium text-sm">
                            It&apos;s so nice to SI you 👋
                        </p>
                        <div className="mt-4 space-y-3 md:mt-6 md:space-y-4">
                            <button className="w-full flex items-center gap-3 p-2 md:p-3 border rounded-md bg-gray-100 hover:bg-gray-200">
                                <Image src={metamaskimg} alt="Metamask" className="w-5 md:w-6 h-5 md:h-6" />
                                <span className="text-sm md:text-base">Metamask</span>
                            </button>
                            <button className="w-full flex items-center gap-3 p-2 md:p-3 border rounded-md bg-gray-100 hover:bg-gray-200">
                                <Image src={walletconnectimg} alt="WalletConnect" className="w-5 md:w-6 h-5 md:h-6" />
                                <span className="text-sm md:text-base">WalletConnect</span>
                            </button>
                            <button className="w-full flex items-center gap-3 p-2 md:p-3 border rounded-md bg-gray-100 hover:bg-gray-200">
                                <Image src={ethermailimg} alt="EtherMail" className="w-5 md:w-6 h-5 md:h-6" />
                                <span className="text-sm md:text-base">EtherMail</span>
                            </button>
                        </div>
                        <div className="my-4 md:my-5 flex items-center">
                            <hr className="flex-grow border-gray-300" />
                            <span className="px-2 md:px-3 text-gray-500 text-sm md:text-base">OR</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>
                        <div>
                            <label className="block text-sm md:text-base font-medium">Email</label>
                            <div className="relative mt-2">
                                <input 
                                    type="email" 
                                    className="w-full p-2 md:p-3 border rounded-md text-sm md:text-base" 
                                    placeholder="youremail@mail.com" 
                                />
                                <button className="absolute inset-y-0 right-0 px-3 md:px-4 flex items-center bg-purple-500 text-white rounded-r-md text-sm md:text-base">
                                    →
                                </button>
                            </div>
                        </div>
                        <p className="mt-4 text-center text-sm md:text-base text-gray-500">
                            New to Si3? <Link href="/member-policy" className="text-purple-500 font-semibold">Explore our membership</Link>
                        </p>
                        <span className="mt-2 text-center text-sm md:text-base text-gray-500">to join our ecosystem.</span>
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 relative w-full h-40 md:h-full order-2">
                        <Image 
                            src={loginimage} 
                            alt="Preview" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
