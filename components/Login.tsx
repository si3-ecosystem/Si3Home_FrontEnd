import React from "react";
import Link from "next/link";
import Image from "next/image";
import loginimage from "@/public/loginframe.png"
import ethermailimg from "@/public/ethermail.png"
import walletconnectimg from "@/public/walletconnect.png"
import metamaskimg from "@/public/metamask.png"
import utils from "@/components/Navbar"

const Login: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#FDCFFB] to-[#FFEDCF]">
            <nav className="w-full p-5 bg-transparent flex justify-between items-center">
                <Link
                    href="/"
                    className="text-white text-5xl font-bold uppercase "
                >
                    <p className="text-2xl md:text-4xl text-black font-clesmont font-black">
                        {"SI<3>"}
                    </p>
                </Link>
            </nav>
            <div className="flex flex-grow items-center justify-center p-5 md:p-10 w-full h-auto md:h-full max-h-[90vh]">
                <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg w-full max-w-7xl overflow-hidden">
                    {/* Login Form */}
                    <div className="p-8 md:p-12 flex flex-col justify-center w-full order-1 md:order-1">
                        <h1 className="text-4xl font-bold">Login</h1>
                        <p className="text-gray-500 mt-3 font-bold text-lg">It's so nice to SI you 👋</p>
                        <div className="mt-6 space-y-4 md:mt-8 md:space-y-5">
                            <button className="w-full flex items-center gap-4 p-3 md:p-4 border rounded-lg bg-gray-100 hover:bg-gray-200">
                                <Image src={metamaskimg} alt="Metamask" className="w-6 md:w-7 h-6 md:h-7" />
                                <span className="text-base md:text-lg">Metamask</span>
                            </button>
                            <button className="w-full flex items-center gap-4 p-3 md:p-4 border rounded-lg bg-gray-100 hover:bg-gray-200">
                                <Image src={walletconnectimg} alt="WalletConnect" className="w-6 md:w-7 h-6 md:h-7" />
                                <span className="text-base md:text-lg">WalletConnect</span>
                            </button>
                            <button className="w-full flex items-center gap-4 p-3 md:p-4 border rounded-lg bg-gray-100 hover:bg-gray-200">
                                <Image src={ethermailimg} alt="EtherMail" className="w-6 md:w-7 h-6 md:h-7" />
                                <span className="text-base md:text-lg">EtherMail</span>
                            </button>
                        </div>
                        <div className="my-6 md:my-8 flex items-center">
                            <hr className="flex-grow border-gray-300" />
                            <span className="px-3 md:px-4 text-gray-500 text-base md:text-lg">OR</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>
                        <div>
                            <label className="block text-base md:text-lg font-medium">Email</label>
                            <div className="relative mt-2">
                                <input type="email" className="w-full p-3 md:p-4 border rounded-lg text-base md:text-lg" placeholder="youremail@mail.com" />
                                <button className="absolute inset-y-0 right-0 px-4 md:px-5 flex items-center bg-purple-500 text-white rounded-r-lg text-base md:text-lg">
                                    →
                                </button>
                            </div>
                        </div>
                        <p className="mt-4 md:mt-5 text-center text-base md:text-lg text-gray-500">
                            New to Si3? <Link href="/members" className="text-purple-500 font-semibold">Explore our membership</Link>
                        </p>
                        <span className="mt-4 md:mt-5 text-center text-base md:text-lg text-gray-500">to join our ecosystem.</span>
                    </div>

                    {/* Login Image - Now at Bottom on Mobile & Full Height on Desktop */}
                    <div className="flex items-center justify-center bg-gray-100 relative w-full h-48 md:h-full order-1 md:order-2">
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
