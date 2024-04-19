import {createSlice} from "@reduxjs/toolkit";
import {loginUser, modifyUser} from "./thunkFunctions";
import {toast} from "react-toastify";
import {authUser, logoutUser} from "./thunkFunctions";

const initialState = {
  userData: {
    id: "",
    eamil: "",
    name: "",
    role: 0,
    image: "",
    createdAt: "",
  },
  isAuth: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        toast.info(action.payload.message);
        state.isAuth = true;
        localStorage.setItem("accessToken", action.payload.accessToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload.message);
      })
      //로그인 완료
      .addCase(authUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.isAuth = true;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuth = false;
        state.userData = initialState.userData;
        localStorage.removeItem("accessToken");
      })
      //회원정보 수정
      .addCase(modifyUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(modifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.isAuth = true;
      })
      .addCase(modifyUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuth = false;
        state.userData = initialState.userData;
        localStorage.removeItem("accessToken");
      })

      //회원 로그아웃
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = initialState.userData; // 초기화
        state.isAuth = false;
        localStorage.removeItem("accessToken"); //토큰 삭제
        // toast.info(action.payload.message);
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export default userSlice.reducer;