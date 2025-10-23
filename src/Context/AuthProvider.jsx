import React, { Children } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return <AuthContext>{children} </AuthContext>;
};

export default AuthProvider;
