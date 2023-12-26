import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const Service = {
  signUp: (userData) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.post(`${BASE_URL}/addUsers`, userData, { headers, withCredentials: true });
  },
  signIn: (userData) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.post(`${BASE_URL}/authenticateUsers`, userData, { headers, withCredentials: true });
  },
  getUsers: () => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.get(`${BASE_URL}/users`, { headers, withCredentials: true });
  },
  getUserByUsername: (username) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.get(`${BASE_URL}/users/${username}`, { headers, withCredentials: true });
  },
  updateUserByUsername: (username, userData) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.put(`${BASE_URL}/users/${username}`, userData, { headers, withCredentials: true });
  },
  deleteUserByUsername: (username) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.delete(`${BASE_URL}/users/${username}`, { headers, withCredentials: true });
  },
  getGodowns: () => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.get(`${BASE_URL}/godowns/getAllGodowns`, { headers, withCredentials: true });
  },
  getGodownById: (id) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.get(`${BASE_URL}/godowns/${id}`, { headers, withCredentials: true });
  },
  updateGodownById: (id, godownData) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.put(`${BASE_URL}/godowns/${id}`, godownData, { headers, withCredentials: true });
  },
  deleteGodownById: (id) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.delete(`${BASE_URL}/godowns/${id}`, { headers, withCredentials: true });
  },
  addGodown: (godownData) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.post(`${BASE_URL}/godowns/addGodown`, godownData, { headers, withCredentials: true });
  },
  getInwards: () => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.get(`${BASE_URL}/inwards`, { headers, withCredentials: true });
  },
  getInwardById: (id) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.get(`${BASE_URL}/inwards/${id}`, { headers, withCredentials: true });
  },
  
  addInward: (inwardData) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.post(`${BASE_URL}/inwards/addInwards`, inwardData, { headers, withCredentials: true });
  },
  purchaseInward: (inwardData) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.post(`${BASE_URL}/inwards/purchaseInward`, inwardData, { headers, withCredentials: true });
  },
  deleteInwardById: (id) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.delete(`${BASE_URL}/inwards/deleteInwards/${id}`, { headers, withCredentials: true });
  },
  
};

export default Service;
