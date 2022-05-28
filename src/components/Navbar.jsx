import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { userProfileData, chatData } from "../data/dummy";
import avatar from "../data/avatar.jpg";
import { Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import UserProfileDropdown from "./UserProfileDropdown";
import NotificationDropdown from "./NotificationDropdown";

const NavButton = ({ clickHandler, title, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title}>
      <button
        onClick={clickHandler}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-2xl h-2 w-2 right-2 top-2"
        ></span>
        {icon}
      </button>
    </TooltipComponent>
  );
};
const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    sideIconsIntialState,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <nav className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        clickHandler={() => {
          setIsClicked(sideIconsIntialState);
          setActiveMenu((prev) => !prev);
        }}
        title="Menu"
        icon={<AiOutlineMenu />}
        color={currentColor}
      />
      <div className="flex gap-5">
        <NavButton
          clickHandler={() => handleClick("chat")}
          title="Chat"
          icon={<BsChatLeft />}
          color={currentColor}
          dotColor="hotpink"
        />
        <NavButton
          clickHandler={() => handleClick("notification")}
          title="Notification"
          icon={<RiNotification3Line />}
          color={currentColor}
          dotColor="hotpink"
        />
        <TooltipComponent content="Profile">
          <div
            className="flex items-center hover:bg-light-gray cursor-pointer rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={avatar}
              alt="Kaustubh"
              className="rounded-full h-10 w-10"
            />
            <span className="text-gray-400 text-14">Hi,</span>
            <span className="text-gray-400 font-bold ml-1 text-14">
              Kaustubh
            </span>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.userProfile && (
          <UserProfileDropdown
            currentColor={currentColor}
            setIsClicked={setIsClicked}
            avatar={avatar}
            userProfileData={userProfileData}
          />
        )}
        {isClicked.notification && (
          <NotificationDropdown
            currentColor={currentColor}
            setIsClicked={setIsClicked}
            chatData={chatData}
          />
        )}
        {/* {screenSize} */}
        {isClicked.chat && "Chat"}
      </div>
    </nav>
  );
};

export default Navbar;
