export const storeUser = (data) => {
  localStorage.setItem('user', JSON.stringify({
      usernameStore:data.username ||  data.user.username,
      emailStore:data.email || data.user.email,
      idStore:data.id || data.user.id,
      jwt: data.jwt
  }))
}

export const storeCalendar = (data) => {
  localStorage.setItem('calendar', JSON.stringify({
      idCalendarStore: data.data.data.id,
      usernameCalendarStore: data.data.data.attributes.username,
      emailCalendarStore: data.data.data.attributes.email,
      phoneCalendarStore: data.data.data.attributes.phone,
      dateCalendarStore: data.data.data.attributes.date,
      timeCalendarStore: data.data.data.attributes.time,
      describeCalendarStore: data.data.data.attributes.describe,
      jwt: data.jwt
  }))
}

export const storeUserNameDoctor = (data) => {
  localStorage.setItem('usernameDoctor', JSON.stringify({
      usernameDoctorStore: data,
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

export function useDoctorData() {
  const stringifyDoctor = localStorage.getItem('usernameDoctor') || '""';
  return JSON.parse(stringifyDoctor || {})
}