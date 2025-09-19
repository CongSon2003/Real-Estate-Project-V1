"use client";
import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import Icons from "../../../utils/icon";
import Button from "@/components/button/Button";
import Link from "next/link";
import { navigations } from "@/utils/constants";
import { usePathname } from 'next/navigation';
import clsx from "clsx";
export default function Nav() {
  const [scrollY, setScrollY] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY > 0);
    };

    // đăng ký sự kiện
    window.addEventListener("scroll", handleScroll);

    // cleanup khi component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(pathname);
  return (
    <div
      id="header"
      className={`w-[100%] z-50 flex justify-center bg-white transition-all ease-linear duration-300 text-black ${
        scrollY ? "h-[60px]" : "h-[80px]"
      } sticky top-0 shadow`}
    >
      <div className="w-main mx-auto md:px-6 flex justify-between items-center px-2">
        <Link href={'/'}>
          <div className="flex item-center gap-3">
            <IoHomeOutline className={`text-primary-500 text-[40px]`} />
            <div className="flex flex-col">
              <span className="uppercase text-primary-500 font-bold">Reis</span>
              <span className="text-sm text-primary-500">Real State</span>
            </div>
          </div>
        </Link>
        <ul className="hidden lg:flex item-center gap-5 uppercase">
          {navigations.map((item, index) => (
            <Link href={item.path} key={index} className={clsx(pathname === item.path && 'text-primary-500')}>{item.text}</Link>
          ))}
        </ul>
        <div className="hidden lg:flex items-center">
          <div className="border-r px-[10px]">
            <button className="">Sign in</button>
          </div>
          <div className="pl-[10px]">
            <Button className="text-white rounded-md px-[20px] py-[7px]">Join</Button>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button>
            <Icons.FiMenu size={40} />
          </button>
        </div>
      </div>
    </div>
  );
}
