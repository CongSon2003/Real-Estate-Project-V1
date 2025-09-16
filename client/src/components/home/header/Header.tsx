import React from "react";
import Search from "./Search";
import Title from "@/components/title/Title";
import Icons from "../../../utils/icon";

function Header() {
  return (
    <div className="w-full">
      <div className="bg-header-primary1 h-[550px] bg-cover bg-center bg-no-repeat text-white flex justify-center">
        <div className="flex flex-col text-center gap-5 justify-center">
          <Title content="Find Your Dream Home" classNameH="text-5xl" />
          <div className="text-center flex justify-center">
            <p className="w-[60%] overflow-hidden text-primary-50">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>
        </div>
      </div>
      <div className="md:relative max-md:hidden">
        <Search />
      </div>
      <div className="max-md:flex hidden w-full justify-center mt-5 px-2">
        <div className="w-full shadow rounded-md">
          <div className="flex justify-center items-center pt-5">
            <ul className="flex text-white gap-3">
              <li className="py-[10px] px-[24px] cursor-pointer bg-primary-500 rounded-md relative text-center ">
                Rent
                <div
                  id="triangle_down"
                  className="absolute bottom-[-10px] mx-auto left-[50%] translate-x-[-50%]"
                ></div>
              </li>
              <li className="py-[10px] px-[24px] border cursor-pointer bg-white text-primary-500 rounded-md">
                Sale
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 p-[20px] bg-white rounded-md">
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
            <div className="grid sm:grid-col-3 grid-col-1 w-full gap-2">
              <select className=" border rounded p-2">
                <option value={""}>--Select--</option>
                <option>a</option>
                <option>a</option>
              </select>
              <select className="border rounded p-2">
                <option value={""}>--Select--</option>
                <option>a</option>
                <option>a</option>
              </select>
              <select className="border rounded p-2">
                <option value={""}>--Select--</option>
                <option>a</option>
                <option>a</option>
                <option>a</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
