import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useCallback,
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
  const [Images, setImages] = useState([]);
  const [search, setSearch] = useState("Random");
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [page, setPage] = useState(1);
  const [isContentLoading, setContentLoading] = useState(false);
  const [isInitialRender, setInitialRender] =useState(true);

  const FetchApi = async () => {
    try {
      const Response = await SearchService.Search(search, page);
      if (!Response.ok) {
        throw new Error("Something Went wrong");
      }
      const data = await Response.json();
      setImages((prev) => [...prev, ...data.results]);
    } catch (error) {
      setIsError(true);
      console.log("error");
    } finally {
      if (isloading) {
        setIsLoading(false);
      }
      setContentLoading(false);
      setInitialRender(false);
    }
  };

  const handleSearch = (value) => {
    setSearch(value);
    FetchApi();
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
  }, [search]);

  useEffect(() => {
    // Only fetch if it's not the initial render
    if (isInitialRender) {
      FetchApi();
    }
  }, [isInitialRender, FetchApi]);

  useEffect(() => {
    FetchApi(); // This will still fetch on the initial render
  }, [page, isInitialRender]);

  console.log("rendered");

  const handleInfiniteScroll = useCallback(async () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    try {
      if (windowHeight + scrollPosition + 1500 >= documentHeight) {
        setContentLoading(true);
        setPage((prevPage) => prevPage + 1);

        await FetchApi();
      }
    } catch (error) {
      console.error(error);
    }
  }, [setPage, setContentLoading, FetchApi]);

  useEffect(() => {
    const onScroll = () => handleInfiniteScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleInfiniteScroll]);

  const memoisedValues = useMemo(
    () => ({
      Images,
      search,
      handleSearch,
      isloading,
      isContentLoading,
    }),
    [search, page, Images, isloading, isContentLoading]
  );

  return (
    <DataContext.Provider value={memoisedValues}>
      {children}
    </DataContext.Provider>
  );
};

export default React.memo(DataProvider);
