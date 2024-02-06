import React, { useState } from "react";
import SearchService from "../services/SearchService";
import { useInfiniteQuery } from "react-query";

const useFetch = (value,itemsPerPage) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(value);
  const { data, error, isLoading, isFetching, fetchMore, canFetchMore } =
    useInfiniteQuery({
      queryKey: [search],
      queryFn: () => {
        return SearchService.Search(search, page, itemsPerPage);
      },
      keepPreviousData: true,
      getNextPageParam: (lastPage, pages) => {
        const nextPage = lastPage.length === itemsPerPage ? pages.length + 1 : undefined;
        return nextPage;
      },
    });

  return {data, search, setSearch, isLoading};
};

export default useFetch;
