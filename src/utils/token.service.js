const USER_TOKEN_NAME = "user";

const setToken = (token) => sessionStorage.setItem(USER_TOKEN_NAME, token);

const removeToken = () => sessionStorage.removeItem(USER_TOKEN_NAME);

const getToken = () => sessionStorage.getItem(USER_TOKEN_NAME);

const decodeToken = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const getUserRoles = () => {
  const token = getToken();
  if (!token) return [];
  const decoded = decodeToken(token);
  return decoded?.authorities ? decoded.authorities.split(",") : [];
};

const getUsername = () => {
  const token = getToken();
  if (!token) return null;
  const decoded = decodeToken(token);
  console.log("User roles:", decoded?.authorities);
  return decoded?.username || null;
};

const TokenService = {
  setToken,
  removeToken,
  getToken,
  getUserRoles,
  getUsername,
};
export { TokenService };
