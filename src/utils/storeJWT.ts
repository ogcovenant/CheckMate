export const storeJWT = ( token: string ) => {
  document.cookie = `access_token=${token}; path=/; secure; sameSite=Strict`;
}

export default storeJWT