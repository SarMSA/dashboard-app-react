import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar4.jpg";

const NavButton = ({ icon, color, dotColor, title, customFunc }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      onClick={() => customFunc()}
      style={{ color }}
    >
      <span
        style={{ background: dotColor }}
        className="absolute top-2 right-2 inline-flex rounded-full h-2 w-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    handleClicked,
    isClicked,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleReSize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleReSize);
    handleReSize();
    return () => window.removeEventListener("resize", handleReSize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="flex justify-between p-2 md:ml-6 relative">
      <NavButton
        title={"Menu"}
        icon={<AiOutlineMenu />}
        color={currentColor}
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
      />
      <div className="flex">
        <NavButton
          title={"Cart"}
          icon={<FiShoppingCart />}
          color={currentColor}
          customFunc={() => handleClicked("cart")}
        />
        <NavButton
          title={"Chat"}
          icon={<BsChatLeft />}
          color={currentColor}
          dotColor={"#03c9D7"}
          customFunc={() => handleClicked("chat")}
        />
        <NavButton
          title={"Notification"}
          icon={<RiNotification3Line />}
          color={currentColor}
          dotColor={"#03c9D7"}
          customFunc={() => handleClicked("notification")}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg=light-gray rounded-lg"
            onClick={() => handleClicked("userProfile")}
          >
            <img src={avatar} alt="profile" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>
              {""}
              <span className="text-gray-400 font-bold">ALi</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
