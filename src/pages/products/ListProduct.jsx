import React from "react";
import { NavProduct } from "./NavProduct";
import { TableProduct } from "./TableProduct";
export const ListProduct = () => {
  return (
    <div className=" w-full dark:border border-slate-600">
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div className="text-slate-800 dark:text-white px-4 py-2 text-xl sm:text-2xl md:text-3xl font-bold">
          Latest Products
        </div>
        <NavProduct />
        <TableProduct />
      </div>
    </div>
  );
};
