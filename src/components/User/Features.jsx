import React from 'react'
import Laptop from '../../assets/img/laptop.png'
import Playstation from '../../assets/img/ip.png'
import Airpod from '../../assets/img/airpod.png'

const Features = () => {
    return (
        <>
            <section className="mb-10 flex flex-col-reverse md:flex-row  bg-blue-900w-full md:h-[34rem] gap-6">

                {/* Left Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">

                    {/* Playstation Card */}
                    <div className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all">
                        <img
                            src={Playstation}
                            alt="PlayStation"
                            className="h-20 w-20 md:h-40 md:w-40 object-contain md:-ml-8"
                        />
                        <div>
                            <h2 className="text-lg md:text-2xl font-semibold mb-2">PlayStation</h2>
                            <p className="text-zinc-500 max-w-xs text-sm md:text-base">
                                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                            </p>
                        </div>
                    </div>

                    {/* AirPods Card */}
                    <div className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all">
                        <img
                            src={Airpod}
                            alt="AirPods"
                            className="h-20 w-20 md:h-40 md:w-40 object-contain md:-ml-8"
                        />
                        <div>
                            <h2 className="text-lg md:text-2xl font-semibold mb-2">
                                Oppo AirPods <span className="font-bold">Max</span>
                            </h2>
                            <p className="text-zinc-500 max-w-xs text-sm md:text-base">
                                Computational audio. Listen — it's powerful.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Right Section (Laptop) */}
                <div className="relative w-full md:w-1/2 bg-white flex items-center justify-center rounded-2xl p-4 shadow-md">
                    <img
                        src={Laptop}
                        alt="Laptop"
                        className="h-48 md:h-[28rem] object-contain"
                    />
                </div>

            </section>
        </>
    )
}

export default Features
