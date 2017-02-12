const BASE_API_ENDPOINT = 'https://admin.duberex.com/products/geo_search.json';

export default ({ lat, lng }) => {
  return fetch(`${BASE_API_ENDPOINT}?gps[]=${lat}&gps[]=${lng}&searchText=WA`).then(function(response){
    return response.json().then(function(json){
      return json;
    });
  });
}; 

