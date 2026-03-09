import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload
      if (state.items.find((p) => p.id === item.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(item)
      }
    }
  }
})

export const { adicionar } = cartSlice.actions
export default cartSlice.reducer
