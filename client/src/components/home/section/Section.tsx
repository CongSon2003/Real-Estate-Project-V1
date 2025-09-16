import Image from "next/image";
import React from "react";

function Section() {
  return (
    <div className="relative h-[500px] flex items-center justify-center text-white">
      <Image src={"/house-4.jpg"} fill alt="" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t bg-primary-700/70 to-transparent"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">Find Best Place For Living</h1>
        <p className="mt-2">Spend vacations in best hotels and resorts...</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 rounded-lg">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Section;
