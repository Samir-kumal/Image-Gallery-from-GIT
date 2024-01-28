import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useCallback,
  useMemo,
} from "react";
import SearchService from "../services/SearchService";
import { useInfiniteQuery } from "react-query";
const DataContext = createContext(null);
export const useDataProvider = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("Random");
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isFetching, fetchMore, canFetchMore } =
    useInfiniteQuery({
      queryKey: [ search],
      queryFn: () => {
        return SearchService.Search(search, page);
      },
      keepPreviousData: true,
      getNextPageParam: (lastPage, pages) => {
        const nextPage = lastPage.length === 30 ? pages.length + 1 : undefined;
        return nextPage;
      },
    });


  const handleSearch = (value) => {
    setSearch(value);
  };

 


  const memoisedValues = useMemo(
    () => ({
      data,
      search,
      handleSearch,
      isLoading,
    
    }),
    [search, page, data, isLoading]
  );

  return (
    <DataContext.Provider value={memoisedValues}>
      {children}
    </DataContext.Provider>
  );
};

export default React.memo(DataProvider);
