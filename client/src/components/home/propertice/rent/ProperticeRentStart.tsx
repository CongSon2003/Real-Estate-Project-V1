import Cart from "@/components/cart/Cart";
import Title from "@/components/title/Title";
import React from "react";
import Button from "@/components/button/Button";
function ProperticeRentStart() {
  return (
    <div className="bg-white flex justify-center lg:h-[800px] mb-14">
      <div className="w-primary flex flex-col justify-center items-center px-2">
        <div className="w-[100%] flex flex-col text-center mb-14 mt-14 gap-5">
          <Title
            content="Letest Properties of Rent"
            classNameH="text-4xl text-primary-800"
          />
          <div className="w-full flex justify-center">
            <p className="lg:w-[60%] sm:w-[80%] overflow-hidden text-[#889099]">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Cart/>
          <Cart/>
          <Cart/>
        </div>
        <div className="w-full text-center mt-[32px]">
          <Button className="text-white w-[180px] h-[48px]">Load more listing</Button>
        </div>
      </div>
    </div>
  );
}

export default ProperticeRentStart;
