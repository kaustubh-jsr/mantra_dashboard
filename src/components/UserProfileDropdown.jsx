import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FiCreditCard } from "react-icons/fi";
import { userProfileData } from "../data/dummy";
import Button from "./Button";
const UserProfileDropdown = ({ currentColor, setIsClicked, avatar }) => {
  return (
    <div
      className="absolute right-1 top-16 flex-col justify-center items-center rounded-lg w-96 p-8 border-1 bg-white border-gray-200 dark:bg-secondary-dark-bg"
      style={{ zIndex: 900 }}
    >
      <div className="flex justify-between items-center gap-24 w-full">
        <p className="dark:text-gray-200 font-bold">User Profile</p>
        <button
          className="text-2xl p-2 rounded-full hover:bg-white hover:drop-shadow-xl"
          style={{ color: currentColor }}
          onClick={() =>
            setIsClicked((prev) => ({ ...prev, userProfile: false }))
          }
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex gap-5 border-b-1 pb-4 mt-4 items-center">
        <img src={avatar} className="w-24 h-24 rounded-full" alt="user" />
        <div className="flex-col gap-1 dark:text-gray-400">
          <p className="font-semibold text-xl dark:text-gray-200">Kaustubh</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Administrator
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            mantra_admin@gmail.com
          </p>
        </div>
      </div>
      {userProfileData.map((section) => (
        <div className="flex gap-5 border-b-1 p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] items-center">
          <button
            className="text-xl rounded-lg p-3 hover:bg-light-gray"
            style={{
              color: section.iconColor,
              backgroundColor: section.iconBg,
            }}
          >
            {section.icon}
          </button>
          <div>
            <p className="text-lg font-semibold dark:text-gray-200">
              {section.title}
            </p>
            <p className="text-sm dark:text-gray-400">{section.desc}</p>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <button
          style={{ color: "white", backgroundColor: currentColor }}
          className="text-lg w-full p-4 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfileDropdown;
