import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // deployed: https://quickstlabs.herokuapp.com/api/v1.0/

  
  const url = 'https://projectsdata.herokuapp.com'

  return axios.create({
    baseURL: `${url}`,
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;