import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { setColor } from "@syncfusion/ej2/treemap";

const ThemeSettings = () => {
  const { currentColor, setColor, setMode, themeMode, handleClicked } = useStateContext();

  return (
    <div className="bg-half-transparent fixed w-screen nav-item top-0 right-0">
      <div className="bg-white float-right h-screen dark:text-gray-200 dark:bg-[#484B52] w-400">
        <div className="px-4 ml-4">
          <div className="flex justify-between items-center py-4">
            <p className="font-semibold text-lg ">Theme Setting</p>
            <button
              type="button"
              onClick={() => {
                handleClicked("themeSettings");
              }}
              style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
              className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className="border-t-1 flex-col border-color py-4">
            <p className="font-semibold text-xl">Theme Option</p>
            <div className="mt-4">
              <input
                type="radio"
                id="light"
                name="theme"
                value="Light"
                className="cursor-pointer"
                onChange={(e) => setMode(e.target.value)}
                checked={themeMode === "Light"}
              />
              <label htmlFor="light" className="ml-2 text-md cursor-pointer">
                Light
              </label>
            </div>
            <div className="mt-2">
              <input
                type="radio"
                id="dark"
                name="theme"
                value="Dark"
                className="cursor-pointer"
                onChange={(e) => setMode(e.target.value)}
                checked={themeMode === "Dark"}
              />
              <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
                Dark
              </label>
            </div>
          </div>
          <div className="py-4 border-t-1 border-color">
            <p className="font-semibold text-xl">Theme Colors</p>
            <div className="flex gap-3">
              {themeColors.map((item, index) => (
                <TooltipComponent key={index} position="TopCenter" content={item.name}>
                  <div className="relative mt-4 cursor-pointer flex gap-5 items-center">
                    <button
                      type="button"
                      style={{ backgroundColor: item.color }}
                      onClick={() => setColor(item.color)}
                      className="rounded-full h-10 w-10 cursor-pointer"
                    >
                      <BsCheck
                        className={`ml-2 text-2xl text-white ${item.color === currentColor ? "block" : "hidden"}`}
                      />
                    </button>
                  </div>
                </TooltipComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
