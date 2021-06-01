import React, { createContext, useContext } from 'react'
import { setupCache } from 'axios-cache-adapter'
import axios from 'axios'


const ApiContext = createContext(null)

function createAxiosInstance() {
  const cache = setupCache({
    maxAge: 15 * 60 * 1000,
    exclude: { query: false }
  })

  const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    adapter: cache.adapter
  })


  instance.interceptors.response.use(
    function(response) {
      return response
    },
    function(error) {
      return Promise.reject(error)
    }
  )

  return instance
}


export const useApi = () => useContext(ApiContext)


export default ({ children }: {children: React.ReactElement}) => {
  
  const instance = createAxiosInstance()

  const apis : any = {get: (url: string) => instance.get(url).then(response => response.data)}

  return <ApiContext.Provider value={apis}>{children}</ApiContext.Provider>
}