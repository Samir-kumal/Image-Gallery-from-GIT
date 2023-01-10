import ConfigKey from '../config/ConfigKey'
class SearchService{
    Search(search){
        const URL = `https://api.unsplash.com/search/photos?page=2&per_page=30&query=${search}&client_id=${ConfigKey.ACCESS_KEY}`;
        return fetch(URL);

    }

}


export default new SearchService;