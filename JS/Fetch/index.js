/*
 * Fetch
 */
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

function sendFetchRequest(method, POSTS_URL, body = null) {
  let headers = {
    'Content-Type': 'application/json',
  };
  let parameters = {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  };

  // POST, PUT, PATCH, DELETE
  if (body) {
    return fetch(POSTS_URL, parameters).then((response) => {
      return response.json();
    });
  }

  // GET
  return fetch(POSTS_URL).then((response) => {
    // return response.text();
    return response.json();
  });
}

// GET
sendFetchRequest('GET', POSTS_URL)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// POST
sendFetchRequest('POST', POSTS_URL, {
  name: 'Artsiom',
})
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/*
 * XMLHttpRequest with async/await
 */
async function sendAsyncFetchRequest(POSTS_URL) {
  try {
    const response = await fetch(POSTS_URL);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

sendAsyncFetchRequest(POSTS_URL).then(response => console.log(response))