import { useEffect, useState } from "react";
import AppContext from "./appContext";

const AppState = (props:any) => {
  // declare your states here
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState();

  const fetchUserProfile = async () => {
    console.log("hello");
  };

  useEffect(() => {
    if (localStorage.getItem("authToken")) fetchUserProfile();
  }, [localStorage.getItem("authToken")]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        userProfile,
        setUserProfile,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
