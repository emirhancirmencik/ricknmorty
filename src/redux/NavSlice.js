import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    value: "All"
  },
  reducers: {
    changeNav: ((state, action) =>
    {
        state.value = action.payload
    })}
})

// Action creators are generated for each case reducer function
export const { changeNav } = navSlice.actions
export default navSlice.reducer

