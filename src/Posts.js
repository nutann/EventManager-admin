import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";

import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";

export default function Posts({
  signOut
}) {
  const [userId, setUserId] = useState("");
  const [vendorId, setVendorId] = useState("");
  useEffect(() => {
      fetchUserDetails();
  }, []);
  

  async function deleteUser() {
    await API.graphql({
      query: mutations.deleteUser,
      authMode: "API_KEY",
      variables: { input: {id: userId} },
    });
    await API.graphql({
      query: mutations.deleteVendor,
      authMode: "API_KEY",
      variables: { input: {id: vendorId} },
    });
    await Auth.deleteUser();
  }

  async function fetchUserDetails() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userDetails = await API.graphql({
        query: queries.userbyEmail,
        authMode: "API_KEY",
        variables: { email: user.username },
      });
      const vendorDetails = await API.graphql({
        query: queries.vendorbyUserID,
        authMode: "API_KEY",
        variables: { userID: userDetails.data.userbyEmail.items[0].id },
      });
      setUserId(userDetails.data.userbyEmail.items[0].id);
      setVendorId(vendorDetails.data.vendorbyUserID.items[0].id)

    } catch (error) {
      console.log("error retrieving details", error);
    }
  }
  return (
    <>
      <h1>Provision to Delete Account</h1>
      <button onClick={signOut}>Sign out</button>
      <div>
      <button onClick={deleteUser}>Delete Account</button>
      </div>
      
    </>
  )
}

