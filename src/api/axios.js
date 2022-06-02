// import axios from 'axios';
// const BASE_URL = 'http://tracking.000itkw.com/api/';

// export default axios.create({
//     baseURL: BASE_URL
// });

// const token = localStorage.getItem('token');
// export const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${token}`
//     }
//     // headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
//     // withCredentials: true
// });

import axios from "axios"
// import accessToken from "./jwt-token-access/accessToken"
//pass new generated access token here
const baseUrl = 'http://tracking.000itkw.com/api/'
const token = localStorage.getItem('token');

//apply base url for axios
// const API_URL = "https://jsonplaceholder.typicode.com/"
// const API_URL = "http://localhost:6060/"

const axiosApi = axios.create({
  baseURL: baseUrl,
})

const axios1 = axiosApi

axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }) {
  return axiosApi.post(url, { ...data }, { ...config }).then(response => response.data)
}

export async function postFromData(url, data, config = {}) {
  const formData = new FormData()
  const  dataList = data
  for (let item in dataList) {
    formData.append(item, dataList[item])
  }
  console.log('dataList', dataList);
  console.log('formData', formData);
  axiosApi({
    url: url,
    method: 'POST',
    headers: config,
    data: formData,
  })  
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url)
    .then(response => {
      console.log('response.data', response.data)
      console.log('url', url)
      return response.data
    })
}

export default axios1