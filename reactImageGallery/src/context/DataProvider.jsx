import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useMemo,
} from "react";
import SearchService from "../services/SearchService";

const DataContext = createContext(null);
export const useDataProvider = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [state, setState] = useState({
    Images: [],
    search: "Random",
    isloading: false,
    isError: null,
  });
  const { Images, search, isloading, isError } = state;
  const FetchApi = async () => {
    setState((prevState) => ({ ...prevState, isloading: true, isError: null }));
    try {
      const Response = await SearchService.Search(search);
      if (!Response.ok) {
        throw new Error("Something Went wrong");
      }
      const data = await Response.json();
      setState((prevState) => ({ ...prevState, Images: data.results }));
    } catch (error) {
      setState((prevState) => ({ ...prevState, isError: error.message }));
    }
    setState((prevState) => ({ ...prevState, isloading: false }));
  };

  useEffect(() => {
    FetchApi();
  }, [search]);

  //   const contextValue = useMemo(() => {
  //     return {
  //       Images,
  //       setImages,
  //       search,
  //       setSearch,
  //       isloading,
  //       setIsLoading,
  //       isError, // Include isError in the context value
  //     };
  //   }, [Images, setImages, search, setSearch, isloading, setIsLoading, isError]);

  return (
    // <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
    <DataContext.Provider
      value={{
        ...state,
        setSearch: (newSearch) => setState({ ...state, search: newSearch }),
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default React.memo(DataProvider);
