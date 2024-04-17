import React from "react";

export const CardList = ({children,svg}) => {
  return (
    <div class="mt-2 flex flex-wrap justify-center items-center gap-4">
      <div class="flex h-24 w-40 flex-col items-center justify-center rounded-lg border border-gray-200 bg-slate-100 dark:bg-slate-700 dark:border-gray-800 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
        <div class="flex flex-row items-center justify-center">
          {svg}
          <span class="font-bold text-gray-600 dark:text-slate-100">12343</span>
        </div>
        <div class="mt-2 text-sm text-gray-600 dark:text-slate-300">{children}</div>
      </div>
    </div>
  );
};
