const API_ENDPOINT = 'https://admin.duberex.com/vendors/748abe3e-fccf-4265-8b87-a5f2d73c52ae/search.json?auto_off=web_online&categories%5B%5D=Flowers%25&include_subcategory=false&limit=50&metadata=1&offset=0&order_by=display_name&sort_order=asc&web_online=true';

export const fetchProducts = () => {
  return fetch(API_ENDPOINT).then(function(response){
    return response.json().then(function(json){
      console.log(json);
    }); 
  });
};
