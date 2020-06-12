// eslint-disable-next-line import/prefer-default-export
// export const ajax = (() => {
//   const req = (method, url, callback, payload) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.send(JSON.stringify(payload));

//     xhr.onload = () => {
//       if (xhr.status === 200 || xhr.status === 201) {
//         callback(JSON.parse(xhr.response));
//         render();
//       } else {
//         console.error(xhr.status);
//       }
//     };
//   };

//   return {
//     get(url, callback) {
//       req('GET', url, callback);
//     },
//     post(url, callback, payload) {
//       req('POST', url, callback, payload);
//     },
//     patch(url, callback, payload) {
//       req('PATCH', callback, payload);
//     },
//     delete(url, callback) {
//       req('DELETE', callback);
//     }
//   };
// })();
