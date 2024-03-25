import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { get } from "../services/api.ts";
import { getCookie, removeCookie } from "../libs/getCookie.ts";

const AuthContext = createContext(undefined);

export const useAuthProvider = () => {
  const data = useContext(AuthContext);
  if (data === undefined) {
    throw new Error("useAuthProvider must be used within a AuthProvider tag");
  }
  return data;
};

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState<any>(undefined);

  const fetchProfile = async () => {
    if (getCookie("accessToken") && getCookie("userId")) {
      try {
        const res = await get(`/users/${getCookie("userId")}`);
        setUserInfo(res.data);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
  };

  // check auth in admin page
  if (
    userInfo &&
    userInfo?.role !== "admin" &&
    window.location.pathname.includes("/admin")
  ) {
    window.location.href = "/";
  }

  const logout = () => {
    setUserInfo(undefined);
    removeCookie("accessToken");
    removeCookie("userId");
    window.location.href = "/login";
  };

  const authContextValue = useMemo(
    () => ({
      userInfo,
      setUserInfo,
      logout,
    }),
    [userInfo]
  );

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider value={authContextValue as any}>
      {/* TODO: check permission private route by role*/}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
