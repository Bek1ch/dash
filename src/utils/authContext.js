import React, { createContext, useContext } from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { fetchUserInfo } from "../api/api";

const AuthContext = createContext();

const queryClient = new QueryClient();

export const AuthProvider = ({ children }) => {
  const { data: user, error, isLoading } = useQuery("user", fetchUserInfo);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const AuthProviderWrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>{children}</AuthProvider>
  </QueryClientProvider>
);

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
