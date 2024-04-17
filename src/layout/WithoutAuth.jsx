import React from "react";
import { Outlet } from "react-router-dom";

export const WithoutAuth = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
