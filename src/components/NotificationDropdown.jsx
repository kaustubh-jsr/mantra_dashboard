import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const NotificationDropdown = ({ currentColor, setIsClicked, chatData }) => {
  return (
    <div
      className="absolute right-4 md:right-40 top-16 flex-col justify-center items-center rounded-lg w-96 p-8 border-1 bg-white border-gray-200 dark:bg-secondary-dark-bg"
      style={{ zIndex: 900 }}
    >
      <div className="flex justify-between items-center gap-24 w-full">
        <p className="dark:text-gray-200 font-bold">Notifications</p>
        <button
          className="text-2xl p-2 rounded-full hover:bg-white hover:drop-shadow-xl"
          style={{ color: currentColor }}
          onClick={() =>
            setIsClicked((prev) => ({ ...prev, notification: false }))
          }
        >
          <MdOutlineCancel />
        </button>
      </div>
      {chatData.map((section) => (
        <div
          className={` flex gap-5 border-b-1 p-4 rounded-sm hover:bg-light-gray ${
            section.new && "bg-gray-200"
          } ${
            section.new && "dark:bg-gray-600"
          } cursor-pointer dark:hover:bg-[#42464D] items-center`}
        >
          <img
            className="text-xl rounded-full h-10 w-10 hover:bg-light-gray"
            style={{
              color: section.iconColor,
              backgroundColor: section.iconBg,
            }}
            src={section.image}
            alt="avatar"
          />
          <div>
            <p className="text-lg font-semibold dark:text-gray-200">
              {section.message}
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
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
