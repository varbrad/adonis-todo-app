import { create } from 'apisauce'

const api = create({
  baseURL: '/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

api.addResponseTransform(response => {
  if (response.ok) return response.data
  throw response
})

export default api
