import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // deployed: https://quickstlabs.herokuapp.com/api/v1.0/

  
  const url = 'http://localhost:8000'

  return axios.create({
    baseURL: `${url}`,
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;