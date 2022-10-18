import { configureStore } from "@reduxjs/toolkit";
import PropertyReducer from "../features/properties/propertySlice";
const store = configureStore({
  reducer: {
    properties: PropertyReducer,
  },
});
export default store;
