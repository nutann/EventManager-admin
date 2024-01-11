import { Route, Routes } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import Posts from "./Posts";
import Vendor from "./Vendor";
import Vendors from "./components/Vendors/vendors";

const AppRouter = (prop) => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <Routes>
      <Route path="/" element={<Vendors signOut={signOut} />}></Route>
      <Route path="/vendor" element={<Vendor />}></Route>
    </Routes>
  );
};

export default AppRouter;
