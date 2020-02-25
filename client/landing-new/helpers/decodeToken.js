import jwt from 'jwt-decode';


const decodeToken = (token) => {
  const decodedToken = jwt(token);
  return decodedToken;
};

export default decodeToken;
