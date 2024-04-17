import React, { useState } from "react";
import { Link } from "react-router-dom";
export const CardFaqs = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet, 
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deserunt minima dolorum non veritatis quod iure magni numquam, sint facilis!
        </p>
        <div className="flex justify-between items-center">
          <Link className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit
          </Link>
          <button onClick={toggleDeleteModal} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800">
            Delete
          </button>
        </div>
      </div>
      {/* Delete Modal */}
      {showDeleteModal && (
        <div
          id="deleteModal"
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className=" bg-white dark:bg-slate-800 rounded-lg p-8 relative">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl dark:text-slate-200 font-semibold ">
                Confirm Deletion
              </h2>
              <button onClick={toggleDeleteModal} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 dark:text-gray-300 dark:hover:text-gray-200 text-slate-800 hover:text-slate-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="dark:text-gray-300 my-6">
              Are you sure you want to delete this customer?
            </p>
            <div className="mt-6 flex justify-around w-full items-center">
              <button
                className="px-4 py-2 bg-slate-300 hover:bg-slate-500 text-gray-800 hover:text-white rounded mr-2"
                onClick={toggleDeleteModal}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 hover:text-white rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
