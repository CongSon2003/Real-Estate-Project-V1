import Image from "next/image";
import React from "react";
import Icons from "@/utils/icon";
import Title from "../title/Title";
function Cart() {
  return (
    <div className="border rounded-md">
      <div>
        <div>
          <Image alt="" src={"/Rectangle 18.png"} width={424} height={240} />
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-col justify-between border-b gap-[16px]">
          <Title
            content="92 ALLIUM PLACE, ORLANDO FL 32827"
            classNameH="text-gray-700 font-bold"
          />
          <span className="text-primary-500 font-bold">$ 590,693</span>
          <div className="flex justify-start mb-[16px] text-gray-500">
            <span className="flex items-center gap-2 mr-5">
              <Icons.IoCarOutline />
              <span>4</span>
            </span>
            <span className="flex items-center gap-2 mr-5">
              <Icons.LuBath />
              <span>4</span>
            </span>
            <span className="flex items-center gap-2 mr-5">
              <Icons.BsArrowsFullscreen />
              <span>4.666212 ft</span>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-[16px]">
          <div className="flex gap-3 items-center">
            <Image
              alt=""
              src={"/Percy _ Clarence _.jpg"}
              width={50}
              height={50}
              className="rounded-full object-center object-cover"
            />
            <span className="text-gray-700">Pham Cong Son</span>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-primary-50 w-[33px] h-[33px] text-center justify-center flex items-center rounded">
              <Icons.CiShare2 className="text-primary-500" size={20} />
            </div>
            <div className="bg-primary-50 w-[33px] h-[33px] text-center justify-center flex items-center rounded">
              <Icons.CiHeart className="text-primary-500" size={20} />
            </div>
            <div className="bg-primary-50 w-[33px] h-[33px] text-center justify-center flex items-center rounded">
              <Icons.GoPlus className="text-primary-500" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
