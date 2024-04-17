import React, { useState } from "react";

export const Accounts = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-full">
      <form className="relative dark:bg-slate-900 bg-slate-50 rounded-md shadow">
        <div className="flex items-start justify-between p-4">
          <div className="text-slate-800 dark:text-white text-xl sm:text-2xl md:text-3xl font-bold">
            Accounts
          </div>
        </div>

        <div className="px-5 py-3 space-y-2">
          {/* Personal details  */}
          <div className="mb-4">
            <p className="text-slate-700 dark:text-slate-300 font-extrabold text-xl mb-2">
              Personal details
            </p>
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
                  First name
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
                  Last name
                </label>
              </div>
              <div className="relative z-0 w-full my-3 group">
                <label htmlFor="gender" className="sr-only">
                  Gender
                </label>
                <select
                  id="gender"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option defaultValue className="text-slate-900">
                    Gender
                  </option>
                  <option className="text-slate-900">Male</option>
                  <option className="text-slate-900">Female</option>
                  <option className="text-slate-900">Transgender</option>
                </select>
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="flex justify-start items-center">
              <div class="flex items-start gap-8 justify-start w-full">
                <div className="font-medium text-sm text-slate-600 dark:text-slate-200">
                  Customer image
                </div>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    className="dark:text-white "
                    onChange={handleImageChange}
                  />
                  {selectedImage && (
                    <div>
                      <h2>Preview</h2>
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="h-32 w-32 rounded-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Contact details */}
          <div className="my-5">
            <p className="text-slate-700 dark:text-slate-300 font-extrabold text-xl mb-2">
              Contact details
            </p>
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
                  type="email"
                  name="alternateEmail"
                  id="alternateEmail"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="alternateEmail"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  Alternate Email address
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
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
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="alternatePhone"
                  id="alternatePhone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="alternatePhone"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  Alternate Phone number
                </label>
              </div>
            </div>
          </div>
          {/* Address details  */}
          <div className="my-5">
            <p className="text-slate-700 dark:text-slate-300 font-extrabold text-xl mb-2">
              Address details
            </p>
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
                  Street Address
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="state"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  State
                </label>
              </div>
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="city"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  City
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="tel"
                  name="pincode"
                  id="pincode"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="pincode"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  Pincode
                </label>
              </div>
              <div className="my-3">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option defaultValue className="text-slate-900">
                    Country
                  </option>
                  <option className="text-slate-900">United States</option>
                </select>
              </div>
            </div>
          </div>
          {/* Contact details */}
          <div className="my-5">
            <p className="text-slate-700 dark:text-slate-300 font-extrabold text-xl mb-2">
              Additional Information
            </p>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="companyName"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  Company Name
                </label>
              </div>
              <div className="my-3">
                <label htmlFor="jobTitle" className="sr-only">
                  Country
                </label>
                <select
                  id="jobTitle"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option defaultValue className="text-slate-900">
                    Job Title
                  </option>
                  <option className="text-slate-900">United States</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="text"
                  name="industry"
                  id="industry"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="industry"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  Industry
                </label>
              </div>
              <div className="relative z-0 w-full my-3 group">
                <input
                  type="text"
                  name="information"
                  id="information"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 capitalize border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="information"
                  className="peer-focus:font-medium absolute text-base text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lg"
                >
                  Information
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
