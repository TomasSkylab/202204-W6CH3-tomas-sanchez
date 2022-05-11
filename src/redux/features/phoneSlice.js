import { createSlice } from "@reduxjs/toolkit";

const phoneSlices = createSlice({
  name: "phone",
  initialState: {
    telephoneNumber: [],
    callState: false,
  },
  reducers: {},
});

export default phoneSlices;
