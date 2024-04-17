import React from "react";
import { CardList } from "./CardList";

export const Cards = () => {
  return (
    <div className="w-full h-96 md:h-32 sm:w-6/12 flex gap-1 flex-wrap items-start justify-start bg-slate-300 dark:bg-slate-900 border dark:border-2 dark:border-slate-700 rounded-lg p-1 text-white">
      <CardList
        svg={
          <svg
            class="mr-3 fill-gray-600 dark:fill-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
          </svg>
        }
      >
        Comments
      </CardList>
    </div>
  );
};
