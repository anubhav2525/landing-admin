import React, { useState } from "react";
import { Link } from "react-router-dom";
export const EditContact = () => {
  return (
    <div className="w-full">
      <form className="relative dark:bg-slate-900 bg-slate-50 rounded-md shadow">
        <div className="flex items-start justify-between p-2">
          <div className="text-slate-800 dark:text-white text-xl sm:text-2xl md:text-3xl font-bold">
            Edit contact
          </div>
          <Link to="/user/contact">
            <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700">
              <svg
                className="h-3.5 w-3.5 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
              Back
            </button>
          </Link>
        </div>

        <div className="px-5 py-3 space-y-2">
          <div className="mb-4">
            <div className="grid md:grid-cols-3 md:gap-8">
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="firstName"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  Query id
                </label>
              </div>
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="lastName"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  Full name
                </label>
              </div>
              <div className="relative z-0 w-full my-3 group">
                <label htmlFor="gender" className="sr-only">
                  Status
                </label>
                <select
                  id="gender"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option defaultValue className="text-slate-900">
                    Status
                  </option>
                  <option className="text-slate-900">Read</option>
                  <option className="text-slate-900">Unread</option>
                  <option className="text-slate-900">Deleted</option>
                </select>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="email"
                  name="officialEmail"
                  id="officialEmail"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="officialEmail"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="phone"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="phone"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  Phone number
                </label>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="grid">
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="email"
                  name="streetAddress"
                  id="streetAddress"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="streetAddress"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  Subject
                </label>
              </div>
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="email"
                  name="streetAddress"
                  id="streetAddress"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="streetAddress"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  Message
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Modal footer */}
        <div className="flex justify-end items-center p-2 space-x-2 rounded-b ">
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-8 py-2 text-center me-2 mb-2 ">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
