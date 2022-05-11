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
      telephoneNumber: [...phoneState.telephoneNumber, action.payload],
    }),
  },
});

export default phoneSlice.reducer;
