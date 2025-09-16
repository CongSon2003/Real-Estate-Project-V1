import React from "react";
import Icons from '../../../utils/icon'
function TopHeader() {

  return (
    <div className="w-[100%] h-[85px] text-white flex justify-center border-b border-[#DBDFEC] sticky top-0">
      <div className="flex justify-between w-main items-center text-center">
        <div className="flex item-center gap-3">
          <Icons.TfiEmail size={24}/>
          <span>
            <span className="font-bold ">Email us at : </span>
            example@gmail.com
          </span>
        </div>
        <div className="flex">
          <div className="border-r pr-3">Login</div>
          <div className="flex items-center gap-3 pl-3">
            <Icons.HiOutlinePhone size={24}/>
            <span>0961804813</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
