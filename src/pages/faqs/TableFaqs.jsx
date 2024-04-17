import React, { useState } from "react";
import { CardFaqs } from "./CardFaqs";

export const TableFaqs = () => {

  return (
    <>
      <div className="overflow-x-auto p-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <CardFaqs />
        </div>
      </div>
      
    </>
  );
};
