import React from "react";
import { NavLead } from "./NavLead";
import { TableLead } from "./TableLead";

export const ListLead = () => {
  return (
    <div className=" w-full dark:border border-slate-600">
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div className="text-slate-800 dark:text-white px-4 py-2 text-xl sm:text-2xl md:text-3xl font-bold">
          Latest leads
        </div>
        <NavLead />
        <TableLead />
      </div>
    </div>
  );
};
