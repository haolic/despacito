import axios from 'axios';
let baseUrl = 'http://localhost:3000/';

let axiosRequest = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: { 'content-type': 'application/json' },
});

export function register(data) {
  return axiosRequest.post('userRegister', data).catch(res => {
    console.error(res)
  });
}
