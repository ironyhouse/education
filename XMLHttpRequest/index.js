/*
 * XMLHttpRequest
 */
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const XHR = new XMLHttpRequest();

// initializes a request
XHR.open('GET', POSTS_URL);

XHR.responseType = 'json';

XHR.onload = () => {
  if (XHR.status >= 400) {
    console.error(XHR.response);
  } else {
    console.log(XHR.response);
  }

  // without XHR.responseType
  // console.log(JSON.parse(XHR.response))
};

XHR.send();

/*
 * XMLHttpRequest with Promise
 */
function sendXMLHttpRequest(method, POSTS_URL, body = null) {
  return new Promise((resolve, reject) => {
    const XHR = new XMLHttpRequest();

    XHR.open(method, POSTS_URL);

    XHR.responseType = 'json';
    XHR.setRequestHeader('Content-Type', 'application/json');

    XHR.onload = () => {
      if (XHR.status >= 400) {
        reject(XHR.response);
      } else {
        resolve(XHR.response);
      }
    };

    XHR.send(JSON.stringify(body));
  });
}

// GET
sendXMLHttpRequest('GET', POSTS_URL)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// POST
sendXMLHttpRequest('POST', POSTS_URL, {
  name: 'Artsiom',
})
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
