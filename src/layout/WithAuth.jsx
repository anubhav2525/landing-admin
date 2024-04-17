import React from "react";
import { Sidebar } from "../component/Sidebar";
import { Header } from "../component/Header";
import { Outlet } from "react-router-dom";
export const WithAuth = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen overflow-hidden bg-slate-200 dark:bg-gray-800 flex justify-start">
        <div className="sm:w-56 z-20">
          <Sidebar />
        </div>
        <div className="h-screen w-full fixed top-10 sm:relative sm:top-0 z-10">
          <div className="">
            <Header />
          </div>
          <div className="sm:py-4 px-2 pt-4 pb-8  flex flex-col sm:flex-row gap-2 sm:flex-wrap h-screen overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
