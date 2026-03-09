import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // Removi o 'ebac_sports' daqui
    baseUrl: 'https://api-ebac.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      // O recurso fica apenas aqui
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = api
export default api
