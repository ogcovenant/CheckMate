export const getJWT = () => {
  const jwt = document.cookie.split(';').find(c => c.includes("access_token"));
  return jwt ? jwt.trim().split('=')[1] : '';
}

export const getAuth = () => {
  const isAuth = document.cookie.split(';').find(c => c.includes("isAuthenticated"));
  return isAuth ? isAuth.trim().split('=')[1] : '';
}

export default getJWT