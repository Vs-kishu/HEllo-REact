import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  isMenuEnabled: false,
});

export default UserContext;
