import Title from "@/components/title/Title";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import Icons from "@/utils/icon";
function Footer() {
  return (
    <div className="w-full bg-white md:h-[350px] flex justify-center mt-5">
      <div className="w-primary h-full flex flex-col justify-center px-2">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex item-center gap-3">
              <IoHomeOutline className={`text-primary-500 text-[40px]`} />
              <div className="flex flex-col">
                <span className="uppercase text-primary-500 font-bold">
                  Reis
                </span>
                <span className="text-sm text-primary-500">Real State</span>
              </div>
            </div>
            <Title classNameH="text-xl" content="Contact Us" />
            <p className="text-gray-500">Call: +123 400 123</p>
            <p className="text-gray-500">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </p>
            <p className="text-gray-700">Email: example@gmail.com</p>
            <div className="flex gap-4 items-center">
              <div className="flex p-2 bg-primary-100 rounded cursor-pointer ">
                <Icons.FaFacebookF className="text-primary-500" />
              </div>
              <div className="flex p-2 bg-primary-100 rounded cursor-pointer">
                <Icons.FaInstagram className="text-primary-500" />
              </div>
              <div className="flex p-2 bg-primary-100 rounded cursor-pointer">
                <Icons.CgMediaLive className="text-primary-500" />
              </div>
              <div className="flex p-2 bg-primary-100 rounded cursor-pointer">
                <Icons.FaBehance className="text-primary-500" />
              </div>
            </div>
          </div>
          <div>
            <Title
              content="Features"
              classNameDiv="mb-5"
              classNameH="text-xl"
            />
            <ul className="flex flex-col gap-2">
              <li className="text-gray-500">Home</li>
              <li className="text-gray-500">Become a Host</li>
              <li className="text-gray-500">Pricing</li>
              <li className="text-gray-500">Blog</li>
              <li className="text-gray-500">Contact</li>
            </ul>
          </div>
          <div>
            <Title content="Company" classNameDiv="mb-5" classNameH="text-xl" />
            <ul className="flex flex-col gap-2">
              <li className="text-gray-500">Home</li>
              <li className="text-gray-500">Become a Host</li>
              <li className="text-gray-500">Pricing</li>
              <li className="text-gray-500">Blog</li>
              <li className="text-gray-500">Contact</li>
            </ul>
          </div>
          <div>
            <Title
              content="Team and Policies"
              classNameDiv="mb-5"
              classNameH="text-xl"
            />
            <ul className="flex flex-col gap-2">
              <li className="text-gray-500">Teams of servies</li>
              <li className="text-gray-500">Privacy Policy</li>
              <li className="text-gray-500">Security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
