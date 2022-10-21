/*
 * Fetch
 */
const URL = 'https://jsonplaceholder.typicode.com/posts';

function sendFetchRequest(method, URL, body = null) {
  let headers = {
    'Content-Type': 'application/json',
  };
  let parameters = {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  };

  // POST
  if (body) {
    return fetch(URL, parameters).then((response) => {
      return response.json();
    });
  }

  // GET
  return fetch(URL).then((response) => {
    // return response.text();
    return response.json();
  });
}

// GET
sendFetchRequest('GET', URL)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// POST
sendFetchRequest('POST', URL, {
  name: 'Artsiom',
})
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
