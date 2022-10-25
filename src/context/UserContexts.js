import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const UserContexts = ({ children }) => {
  const user = { name: "Emon" };
  const authInfo = { user };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContexts;
