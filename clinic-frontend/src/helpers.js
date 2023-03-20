export const storeUser = (data) => {
  localStorage.setItem('user', JSON.stringify({
      usernameStore: data.user.username,
      emailStore: data.user.email,
      jwt: data.jwt
  }))
}


function useData() {
  const stringifyUser = localStorage.getItem('user') || '""';
  return JSON.parse(stringifyUser || {})
}

export default useData;