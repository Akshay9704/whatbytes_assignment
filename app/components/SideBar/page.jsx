"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faChartSimple,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ openSidebar, setSelected, selected }) {
  return (
    <div
      className={`p-2 px-5 w-[15vw] max-[678px]:bg-gray-100 max-[678px]:w-[35vw] max-[678px]:h-[100vh] ${
        openSidebar
          ? "max-[678px]:absolute max-[678px]:left-0 max-[678px]:visible"
          : "max-[678px]:absolute max-[678px]:left-0 max-[678px]:hidden"
      }`}
    >
      <button
        onClick={() => setSelected(0)}
        className={`flex w-full h-[60px] items-center mt-[40px] p-5 rounded-2xl hover:bg-blue-100 ${
          selected == 0 && "bg-blue-100"
        }`}
      >
        <FontAwesomeIcon
          icon={faChartSimple}
          className={`h-[20px] mr-2  ${selected == 0 && " text-blue-900"}`}
        />
        <p className={`${selected == 0 && " text-blue-900"}`}>Dashboard</p>
      </button>

      <button
        onClick={() => setSelected(1)}
        className={`w-full h-[60px] flex items-center mt-[40px] p-5 rounded-2xl hover:bg-blue-100 ${
          selected == 1 && " bg-blue-100"
        } `}
      >
        <FontAwesomeIcon
          icon={faAward}
          className={`h-[20px] mr-2  ${selected == 1 && " text-blue-800"}`}
        />
        <p className={`${selected == 1 && " text-blue-800"}`}>Skill Test</p>
      </button>
      <button
        onClick={() => setSelected(2)}
        className={`flex w-full h-[60px] items-center mt-[40px] p-5 rounded-2xl hover:bg-blue-100 ${
          selected == 2 && "bg-blue-100"
        }`}
      >
        <FontAwesomeIcon
          icon={faFile}
          className={`h-[20px] mr-2 ${selected == 2 && " text-blue-900"}`}
        />
        <p className={`${selected == 2 && " text-blue-800"}`}>Internship</p>
      </button>
    </div>
  );
}
