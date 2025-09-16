import Title from "@/components/title/Title";
import Image from "next/image";
import React from "react";
import Icons from "@/utils/icon"
function ProperticeStart() {
  return (
    <div className="bg-white md:h-[1100px] lg:h-[830px] flex justify-center">
      <div className="h-full flex-col flex justify-end items-center py-10 w-primary px-2">
        <div className="w-[100%] flex flex-col text-center">
          <Title content="Propertice by Area"classNameH="text-4xl text-primary-800" />
          <div className="w-full flex justify-center mt-5">
            <p className="lg:w-[60%] sm:w-[80%] overflow-hidden text-[#889099]">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <div className="relative rounded-xl overflow-hidden h-[245px]">
            <Image
              alt=""
              src={"/house-1.jpg"}
              width={400}
              height={241}
              className="w-full h-full object-cover"
            />
            <div className="absolute bg-gradient-to-t from-black/20 inset-0 to-transparent p-4 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-lg font-bold">Washington</h3>
                <p className="text-sm">25 listings</p>
              </div>
              <Icons.FiMapPin size={24}/>
            </div>

          </div>
          <div className="relative rounded-xl overflow-hidden h-[245px]">
            <Image
              alt=""
              src={"/house-2.jpg"}
              width={400}
              height={241}
              className="w-full h-full object-cover"
            />
            <div className="absolute bg-gradient-to-t from-black/20 inset-0 to-transparent p-4 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-lg font-bold">Washington</h3>
                <p className="text-sm">25 listings</p>
              </div>
              <Icons.FiMapPin size={24}/>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-[245px]">
            <Image
              alt=""
              src={"/house-3.jpg"}
              width={400}
              height={241}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-lg font-bold">Washington</h3>
                <p className="text-sm">25 listings</p>
              </div>
              <Icons.FiMapPin size={24}/>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden sm:col-span-1 lg:col-span-2 h-[245px]">
            <Image
              alt=""
              src={"/house-5.jpg"}
              width={400}
              height={241}
              className="w-full h-full object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-lg font-bold">Washington</h3>
                <p className="text-sm">25 listings</p>
              </div>
              <Icons.FiMapPin size={24}/>
              <button className="mt-2 hover:bg-gray-50 hover:text-primary-500 border border-white text-white rounded-lg px-4 py-2 bg-none text-sm absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                View Detail
              </button>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-[245px]">
            <Image
              alt=""
              src={"/house-4.jpg"}
              width={400}
              height={241}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-lg font-bold">Washington</h3>
                <p className="text-sm">25 listings</p>
              </div>
              <Icons.FiMapPin size={24}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProperticeStart;
