export const storeUser = (data) => {
  localStorage.setItem('user', JSON.stringify({
      username: data.user.username,
      jwt: data.jwt
  }))
}


function useData() {
  const stringifyUser = localStorage.getItem('user') || '""';
  return JSON.parse(stringifyUser || {})
}

export default useData;