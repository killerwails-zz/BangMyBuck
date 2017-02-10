const API_ENDPOINT = 'https://admin.duberex.com/retailers.json?state=WA';

export const fetchRetailers = () => {
  return fetch(API_ENDPOINT).then(function(response){
    return response.json().then(function(json){
      return json;
    }); 
  });
};

