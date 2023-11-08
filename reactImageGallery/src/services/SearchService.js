import ConfigKey from '../config/ConfigKey'
class SearchService{
    Search(search,page){
        const URL = `https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=${search}&client_id=${ConfigKey.ACCESS_KEY}`;
        return fetch(URL);

    }

}


export default new SearchService;