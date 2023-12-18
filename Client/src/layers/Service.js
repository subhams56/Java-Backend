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
};

export default Service;
