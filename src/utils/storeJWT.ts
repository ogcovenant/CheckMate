export const storeJWT = ( token: string ) => {
  document.cookie = `access_token=${token}; isAuthenticated=true; path=/; secure; sameSite=Strict`;
}

export default storeJWT