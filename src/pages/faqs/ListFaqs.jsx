import React from "react";
import { NavFaqs } from "./NavFaqs";
import { TableFaqs } from "./TableFaqs";
export const ListFaqs = () => {
  return (
    <div className=" w-full dark:border border-slate-600">
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div className="text-slate-800 dark:text-white px-4 py-2 text-xl sm:text-2xl md:text-3xl font-bold">
          Latest FAQs
        </div>
        <NavFaqs />
        <TableFaqs />
      </div>
    </div>
  );
};
