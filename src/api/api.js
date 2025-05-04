// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api',
//   withCredentials: true,
// });

// export default api;


import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fullstackbackend-1-9nc2.onrender.com/api', // your backend URL
  withCredentials: true // 👈 crucial for cookies to work
});

export default api;


// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api', // your backend URL
//   withCredentials: true, // <-- VERY IMPORTANT!
// });

// export default api;
