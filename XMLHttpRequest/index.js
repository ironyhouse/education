/*
 * XMLHttpRequest
 */
const URL = 'https://jsonplaceholder.typicode.com/posts';

const XHR = new XMLHttpRequest();

// initializes a request
XHR.open('GET', URL);

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
function sendXMLHttpRequest(method, URL, body = null) {
  return new Promise((resolve, reject) => {
    const XHR = new XMLHttpRequest();

    XHR.open(method, URL);

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
sendXMLHttpRequest('GET', URL)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// POST
sendXMLHttpRequest('POST', URL, {
  name: 'Artsiom',
})
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
