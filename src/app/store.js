import { configureStore } from '@reduxjs/toolkit'
import navReducer from '../redux/NavSlice'

export default configureStore({
  reducer: {
    nav: navReducer
  }
})