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
import useFetch from "../hooks/useFetch";
const DataContext = createContext(null);
export const useDataProvider = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const {data, search, setSearch, isLoading} = useFetch("Random", 30);

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
    [ search,data, isLoading]
  );

  return (
    <DataContext.Provider value={memoisedValues}>
      {children}
    </DataContext.Provider>
  );
};

export default React.memo(DataProvider);
