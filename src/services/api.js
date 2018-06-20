import request from './../utils/request';
let baseUrl = 'http://localhost:3000/';

// let axiosRequest = axios.create({
//   baseURL: baseUrl,
//   timeout: 5000,
//   headers: { 'content-type': 'application/json' },
// });

export function register(data) {
  return request(baseUrl + 'userRegister', {
    method: 'POST',
    body: JSON.stringify(data),
  }).catch(res => {
    console.error(res)
  });
};

export function login(data) {
  return request(baseUrl + 'userLogin', {
    method: 'POST',
    body: JSON.stringify(data),
  }).catch(res => {
    console.error(res)
  });
};