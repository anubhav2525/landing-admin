import React from "react";
import { UserProfileCard } from "./dashboard/UserProfileCard";
import { Cards } from "./dashboard/Cards";
import { CustomerList } from "./dashboard/CustomerList";
import { ProductList } from "./dashboard/ProductList";
import { LeadList } from "./dashboard/LeadList";

export const Dashboard = () => {
  return (
    <>
      <UserProfileCard />
      <Cards />
      <div className="flex w-full gap-2">
        <CustomerList />
        <ProductList />
      </div>
      <LeadList />
    </>
  );
};
