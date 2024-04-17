import React from "react";
import { NavContact } from "./NavContact";
import { TableContact } from "./TableContact";
export const ListContact = () => {
  return (
    <div className=" w-full dark:border border-slate-600">
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div className="text-slate-800 dark:text-white px-4 py-2 text-xl sm:text-2xl md:text-3xl font-bold">
          Latest contact query
        </div>
        <NavContact />
        <TableContact />
      </div>
    </div>
  );
};
