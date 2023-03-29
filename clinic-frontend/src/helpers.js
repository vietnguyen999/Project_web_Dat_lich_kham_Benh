export const storeUser = (data) => {
  localStorage.setItem('user', JSON.stringify({
      usernameStore: data.user.username,
      emailStore: data.user.email,
      idStore: data.user.id,
      passwordStore: data.user.password,
      jwt: data.jwt
  }))
}

export const storeCalendar = (data) => {
  localStorage.setItem('calendar', JSON.stringify({
      idCalendarStore: data.data.data.id,
      usernameCalendarStore: data.data.data.attributes.username,
      emailCalendarStore: data.data.data.attributes.email,
      phoneCalendarStore: data.data.data.attributes.phone,
      datetimeCalendarStore: data.data.data.attributes.datetime,
      describeCalendarStore: data.data.data.attributes.describe,
      jwt: data.jwt
  }))
}

export function useUserData() {
  const stringifyUser = localStorage.getItem('user') || '""';
  return JSON.parse(stringifyUser || {})
}

export function useCalendarData() {
  const stringifyCalendar = localStorage.getItem('calendar') || '""';
  return JSON.parse(stringifyCalendar || {})
}