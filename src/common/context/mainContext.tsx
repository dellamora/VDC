import { createContext } from "react";

interface AppContextInterface {
  name: string;
}

const AppContext = createContext<AppContextInterface>(null);

const ctx: AppContextInterface = {
  name: "",
};

export const AppContextProvider: React.FC = ({ children }) => {
  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};

export default AppContext;
