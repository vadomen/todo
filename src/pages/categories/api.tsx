import axios from 'axios';

axios
  .get(`${process.env.REACT_APP_API_URL}/categories`)
  .then(function(response) {
    // handle success
    console.log(response);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .then(function() {
    // always executed
  });
