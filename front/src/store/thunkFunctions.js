import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/user/register`, body);
      console.log("thunkapi 회원가입");
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);

export const loginUser = createAsyncThunk("user/loginUser", async (body) => {
  try {
    const res = await axiosInstance.post("/user/login", body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const authUser = createAsyncThunk("user/authUser", async (_ ,thunkAPI) => {
  try {
    const response = await axiosInstance.get(`/user/auth`);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data || error.message);
  }
});
//회원정보 수정
export const modifyUser = createAsyncThunk("user/modifyUser", async (_) => {
  try {
    const response = await axiosInstance.get(`/user/modifyUser`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const logoutUser = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.post(`/user/logout`);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data || error.message);
  }
});