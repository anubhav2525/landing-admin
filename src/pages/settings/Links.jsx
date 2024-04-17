import React, { useState } from "react";

export const Links = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="w-full border-b border-gray-800 dark:border-gray-700">
      <ul
        className="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        role="tablist"
      >
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === "profile" ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => handleTabClick("profile")}
            role="tab"
            aria-controls="profile"
            aria-selected={activeTab === "profile"}
          >
            Profile
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === "dashboard"
                ? "border-blue-500"
                : "border-transparent"
            }`}
            onClick={() => handleTabClick("dashboard")}
            role="tab"
            aria-controls="dashboard"
            aria-selected={activeTab === "dashboard"}
          >
            Dashboard
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === "settings"
                ? "border-blue-500"
                : "border-transparent"
            }`}
            onClick={() => handleTabClick("settings")}
            role="tab"
            aria-controls="settings"
            aria-selected={activeTab === "settings"}
          >
            Settings
          </button>
        </li>
        <li role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === "contacts"
                ? "border-blue-500"
                : "border-transparent"
            }`}
            onClick={() => handleTabClick("contacts")}
            role="tab"
            aria-controls="contacts"
            aria-selected={activeTab === "contacts"}
          >
            Contacts
          </button>
        </li>
      </ul>
      <div id="default-tab-content">
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab !== "profile" ? "hidden" : ""
          }`}
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the Profile tab.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab !== "dashboard" ? "hidden" : ""
          }`}
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the Dashboard tab.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab !== "settings" ? "hidden" : ""
          }`}
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the Settings tab.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab !== "contacts" ? "hidden" : ""
          }`}
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the Contacts tab.
          </p>
        </div>
      </div>
    </div>
  );
};


