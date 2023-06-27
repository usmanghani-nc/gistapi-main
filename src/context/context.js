import { useContext, createContext } from "react";
import useGetPublicGists from "../hooks/useGetPublicGists";
import useDebouncedFetch from "../hooks/useDebouncedFetch";
import { getGistForUser } from "../services/gistService";

const Context = createContext();

export const useMainContext = () => useContext(Context);

export default function MainContext({ children }) {
  const gists = useGetPublicGists();
  const gistForUser = useDebouncedFetch(getGistForUser, 700);

  const gistData = () => {
    return gistForUser.data ? gistForUser : gists;
  };

  return (
    <Context.Provider
      value={{
        state: { gistData: gistData() },
        fn: {
          setSearchTerm: gistForUser.setSearchTerm,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
}
