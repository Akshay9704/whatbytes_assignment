"use client";
import React from "react";

export default function NavBar({ setOpenSidebar }) {
  return (
    <div className="p-3 flex items-center justify-between w-full border-b-[1px]">
      <button
        className="logo-div flex"
        onClick={() => setOpenSidebar((prev) => !prev)}
      >
        <img
          src="https://photos.wellfound.com/startups/i/10130633-833576a963b41d8946174d102bdc1200-medium_jpg.jpg?buster=1717832532"
          className="h-[40px] mr-2"
        />
        <h1 className="font-bold text-[20px]">WhatBytes</h1>
      </button>
      <div className="flex border-[1px] rounded-md p-4">
        <p className="font-semibold">Akshay Bhasin</p>
      </div>
    </div>
  );
}
