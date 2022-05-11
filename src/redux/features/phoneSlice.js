import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    telephoneNumber: [],
    callState: false,
  },
  reducers: {
    addDigit: (phoneState, action) => ({
      ...phoneState,
      telephoneNumber:
        phoneState.telephoneNumber.length < 9
          ? [...phoneState.telephoneNumber, action.payload]
          : [...phoneState.telephoneNumber],
    }),
    removeLastDigit: (phoneState) => ({
      ...phoneState,
      phoneNumber: [...phoneState.telephoneNumber.slice(0, -1)],
    }),
  },
});

export default phoneSlice.reducer;

export const {
  addDigit: addDigitActionCreator,
  removeLastDigit: removeLastDigitActionCreator,
} = phoneSlice.actions;
