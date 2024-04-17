import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layout import
import { WithoutAuth } from "./layout/WithoutAuth";
import { WithAuth } from "./layout/WithAuth";

// components
import { Welcome } from "./component/Welcome";
import { Signin } from "./component/Signin";
import { Forget } from "./component/Forget";
import { Error404 } from "./component/Error404";
import { Reset } from "./component/Reset";

// pages import
import { Dashboard } from "./pages/Dashboard";

// customer different routes and components
import { Customer } from "./pages/Customer";
import { ListCustomer } from "./pages/customers/ListCustomer";
import { AddCustomer } from "./pages/customers/AddCustomer";
import { EditCustomer } from "./pages/customers/EditCustomer";
import { SearchCustomer } from "./pages/customers/SearchCustomer";

// leads different routes and components
import { Leads } from "./pages/Leads";
import { ListLead } from "./pages/leads/ListLead";
import { EditLead } from "./pages/leads/EditLead";
import { AddLead } from "./pages/leads/AddLead";
import { SearchLead } from "./pages/leads/SearchLead";

// products different routes and components
import { Products } from "./pages/Products";
import { ListProduct } from "./pages/products/ListProduct";
import { EditProduct } from "./pages/products/EditProduct";
import { AddProduct } from "./pages/products/AddProduct";
import { SearchProduct } from "./pages/products/SearchProduct";

// contact different routes and components
import { Contact } from "./pages/Contact";
import { ListContact } from "./pages/contact/ListContact";
import { EditContact } from "./pages/contact/EditContact";
import { SearchContact } from "./pages/contact/SearchContact";

// faqs pages and components
import { Faqs } from "./pages/Faqs";
import { ListFaqs } from "./pages/faqs/ListFaqs";
import { SearchFaqs } from "./pages/faqs/SearchFaqs";
import { EditFaqs } from "./pages/faqs/EditFaqs";
import { AddFaqs } from "./pages/faqs/AddFaqs";
// account pages and components
import { Accounts } from "./pages/Accounts";
import { Settings } from "./pages/Settings";

// settings pages and components

const router = createBrowserRouter([
  {
    path: "/",
    element: <WithoutAuth />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      { path: "signin", element: <Signin /> },
      { path: "forget", element: <Forget /> },
      { path: "reset/:token", element: <Reset /> },
    ],
  },
  {
    path: "/user/",
    element: <WithAuth />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "customer",
        element: <Customer />,
        children: [
          { path: "", element: <ListCustomer /> },
          { path: "search", element: <SearchCustomer /> },
          { path: "add", element: <AddCustomer /> },
          { path: "edit", element: <EditCustomer /> },
        ],
      },
      {
        path: "leads",
        element: <Leads />,
        children: [
          { path: "", element: <ListLead /> },
          { path: "search", element: <SearchLead /> },
          { path: "add", element: <AddLead /> },
          { path: "edit", element: <EditLead /> },
        ],
      },
      {
        path: "products",
        element: <Products />,
        children: [
          { path: "", element: <ListProduct /> },
          { path: "search", element: <SearchProduct /> },
          { path: "add", element: <AddProduct /> },
          { path: "edit", element: <EditProduct /> },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
        children: [
          { path: "", element: <ListContact /> },
          { path: "search", element: <SearchContact /> },
          { path: "edit", element: <EditContact /> },
        ],
      },
      {
        path: "faqs",
        element: <Faqs />,
        children: [
          { path: "", element: <ListFaqs /> },
          {
            path: "add",
            element: <AddFaqs />,
          },
          { path: "search", element: <SearchFaqs /> },
          { path: "edit", element: <EditFaqs /> },
        ],
      },
      {
        path: "account",
        element: <Accounts />,
      },
      {
        path: "settings",
        element: <Settings />,
        children: [
          {
            path: "",
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
