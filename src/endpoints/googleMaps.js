import Promise from 'bluebird';

const API_KEY = 'AIzaSyBH9g0K53ut-coTwkkUPc2It1c-GnrI9ps';

const googleMapsClient = require('@google/maps').createClient({
  key: API_KEY, Promise: Promise
});

export default (postcode) => {
  return googleMapsClient.geocode({
    components: {postal_code: postcode, country: 'US'},
    }).asPromise().then(
    function(response){
      return response.json.results[0].geometry.location;
    }
  );
}
