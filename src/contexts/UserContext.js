import { createContext } from "react";
import { user } from "../utils/user";

export const UserContext = createContext(() => user.getUser());
