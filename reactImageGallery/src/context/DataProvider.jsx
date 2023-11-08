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
  const [page, setPage] = useState(1);
  const { Images, search, isloading, isError } = state;

  const FetchApi = async () => {

    setState((prevState) => ({ ...prevState, isloading: true, isError: null }));
    try {
      const Response = await SearchService.Search(search, page);
      if (!Response.ok) {
        throw new Error("Something Went wrong");
      }
      const data = await Response.json();
      setState((prevState) => ({
        ...prevState,
        Images: [...prevState.Images, ...data.results],
      }));

      console.log(page);
    } catch (error) {
      setState((prevState) => ({ ...prevState, isError: error.message }));
    } finally {
      setState((prevState) => ({ ...prevState, isloading: false }));
    
    }
  };

  useEffect(() => {
    FetchApi();
  }, [search, page]);

  const fetchNextPage = () => {
   

    console.log(page);
  };

  const handleInfiniteScroll = async () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    try {
      if (windowHeight + scrollPosition + 1500 >= documentHeight) {
        setState((prev) => ({
          ...prev,
          isloading: true,
        }));
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <DataContext.Provider
      value={{
        ...state,
        setSearch: (newSearch) => {
          // Reset page and clear existing Images when the search term changes
          setState({
            Images: [],
            search: newSearch,
            isloading: false,
            isError: null,
          });
        },
        fetchNextPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default React.memo(DataProvider);
