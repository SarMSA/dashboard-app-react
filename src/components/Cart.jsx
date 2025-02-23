import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { cartData, themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from ".";

const ThemeSettings = () => {
  const { currentColor, themeMode, handleClicked } = useStateContext();
  console.log(cartData);

  return (
    <div className="bg-half-transparent fixed w-screen nav-item top-0 right-0">
      <div className="bg-white float-right duration-1000 ease-in-out transition-all h-screen dark:text-gray-200 dark:bg-[#484B52] md:w-400 p-8">
        <div className="flex justify-between items-center py-4">
          <p className="font-semibold text-lg ">Shopping Cart</p>
          <Button
            type="cart"
            color="rgb(153, 171, 180)"
            borderRadius="50%"
            icon={<MdOutlineCancel />}
            size={"2xl"}
            bgHoverColor={"light-gray"}
          />
        </div>

        {cartData?.map((item, index) => (
          <div key={index}>
            <div className="flex items-center gap-5 leading-8 border-b-1 border-color dark:border-gray-600 p-4">
              <img className="rounded-lg h-80 w-24" src={item.image} alt={item.name} />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                  {item.category}
                </p>
                <div className="flex gap-4 mt-2 items-center">
                  <p>{item.price}</p>
                  <div className="flex gap-2 items-center border-1 border-r-0 border-color rounded">
                    <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 ">
                      <AiOutlineMinus />
                    </p>
                    <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                      0
                    </p>
                    <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                      <AiOutlinePlus />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="my-3 ">
          <div className="flex justify-between items-center">
            <p className="tex-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$ 890</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$ 890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text={"Place Order"}
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
