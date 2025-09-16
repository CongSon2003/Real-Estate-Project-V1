import React from "react";
import Icons from "../../../utils/icon";
function Search() {
  return (
    <div className="absolute bottom-0 flex justify-center w-full translate-y-[40%]">
      <div className="lg:w-[60%] md:w-[80%] shadow rounded-md duration-500 ease-in-out transition-all">
        <div className="flex justify-center items-center">
          <ul className="flex text-white gap-3">
            <li className="py-[10px] px-[24px] cursor-pointer bg-primary-500 rounded-md mb-3 relative text-center ">
              Rent
              <div
                id="triangle_down"
                className="absolute bottom-[-10px] mx-auto left-[50%] translate-x-[-50%]"
              ></div>
            </li>
            <li className="py-[10px] px-[24px] cursor-pointer bg-white text-primary-500 rounded-md mb-3">
              Sale
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 px-[20px] p-[20px] bg-white rounded-md">
          <div className="grid grid-cols-7 p-[7px] h-[48px] bg-primary-50 rounded-md border">
            <div className="col-span-6 max-xl:col-span-5 my-auto flex items-center">
              <div className="mr-[7px]">
                <Icons.IoSearchOutline size={24} />
              </div>
              <input
                placeholder="Trên toàn quốc"
                className="w-full rounded bg-primary-50 placeholder:text-black focus:border-none"
              />
            </div>
            <div className="col-span-1 max-xl:col-span-2 text-end my-auto">
              <button className="text-white bg-primary-500 rounded-md py-1 px-5">
                Search
              </button>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <select className="flex-1 border rounded p-2">
              <option>a</option>
              <option>a</option>
              <option>a</option>
            </select>
            <select className="flex-1 border rounded p-2">
              <option>a</option>
              <option>a</option>
              <option>a</option>
            </select>
            <select className="flex-1 border rounded p-2">
              <option>a</option>
              <option>a</option>
              <option>a</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
