import ConfigKey from "../config/ConfigKey";
import axios from "axios";
class SearchService {
  Search(search, page,ItemsPerPage) {
    const URL = `https://api.unsplash.com/search/photos?page=${page}&per_page=${ItemsPerPage}&query=${search}&client_id=${ConfigKey.ACCESS_KEY}`;
    return axios
      .get(URL)
      .then((response) => {
        console.log(response.data.results);
        return response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default new SearchService();
