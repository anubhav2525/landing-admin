import React from "react";
import { Link } from "react-router-dom";
import ProductImage from "../../assests/image/profileBackground.jpg";
export const ProductList = () => {
  return (
    <div className="w-full md:max-w-3xl bg-slate-300 dark:bg-slate-900 border dark:border-2 dark:border-slate-700 rounded-lg p-3">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Product
        </h5>
        <Link className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </Link>
      </div>

      {/* product listing */}
      <div className="flex gap-2 flex-wrap">
        <div className="w-full sm:w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="p-4 rounded-lg"
            src={ProductImage}
            alt="product image"
          />
          <div className="px-5 pb-5">
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
              Product name
            </h5>
            <div className="text-xs tracking-tight text-gray-900 dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, delectus!
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
