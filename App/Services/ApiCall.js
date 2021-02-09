import 'whatwg-fetch';

const apiCall = async (url, options) =>
  fetch(url, options)
    .then((response) => {
      // console.log('response', response);
      if (response.status === 200) {
        return response.json();
      }
      if (response.status === 401) {
        throw Error('Unauthorized');
      } else {
        throw Error('Network Error');
      }
    })
    .then((json) => {
      // console.log('json', json);
      if (json.response_code === 200) {
        return json.data;
      }
      throw Error(`${json.message}`);
    })
    .catch((error) => {
      // console.log('error', error);
      throw Error(error.message || error);
    });

export default apiCall;
