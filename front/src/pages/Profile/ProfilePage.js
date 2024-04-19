import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import { modifyUser } from '../../store/thunkFunctions'
// import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    watch,
    } = useForm({mode:'onChange'});
const dispatch = useDispatch();
const navigate = useNavigate();

// const body = {
//     id,email,name,image, password
// }
// function hendeLogout () {
//     dispatch(modifyUser()).then(()=>{
//         navigate("/");
//     });
// }
async function onSubmit({ password , image}) {
    const body = {
      password,image
    };
    dispatch(modifyUser(body)).then(()=>{
        navigate("/")
    });
    try {
        const response = await axios.post("/user/modify",body)
    } catch (error) {
        console.log(body);
    }
    reset();
  }
    const userPassword = {
    required: {
        value: true,
        message: "비밀번호는 필수 입니다.",
    },
    minLength: {
        value: 4,
        message: "최소 4자입니다.",
    },
    };
  return (
    <section className='flex max-w-[400px] m-auto rounded-md border mt-20 bg-white shadow-md'>
        <div className='m-auto w-full p-6'>
            <h2 className='font-semibold text-center mb-4'>회원정보수정</h2>
            <hr className='mb-4' />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label htmlFor="email" className="font-semibold mr-2 text-sm text-gray-500 flex mb-2">이메일</label>
                    <input
                        type="text"
                        id="email"
                        className="border w-full rounded-md p-2 text-xs"
                        placeholder="이메일 정보"/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="name" className="font-semibold mr-2 text-sm text-gray-500 flex mb-2">이메일</label>
                    <input
                        type="text"
                        id="name"
                        className="border w-full rounded-md p-2 text-xs"
                        placeholder="이름을 입력하세요"/>
                        {errors.name && (
                        <div className="text-red-500 text-xs mt-1">
                            {errors.name.message}
                        </div>
                        )}
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className="font-semibold mr-2 text-sm text-gray-500 flex mb-2">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        className="border w-full rounded-md p-2 text-xs"
                        placeholder="비밀번호를 입력하세요"
                        {...register("password", userPassword)}
                        />
                        {errors.password && (
                        <div className="text-red-500 text-xs mt-1">
                            {errors.password.message}
                        </div>
                        )}
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className="font-semibold mr-2 text-sm text-gray-500 flex mb-2">비밀번호 확인</label>
                    <input
                        type="password"
                        id="passwordConfirm"
                        className="border w-full rounded-md p-2 text-xs"
                        placeholder="비밀번호 확인입니다."
                        {...register("passwordConfirm", {
                            validate: (value) => {
                            return value === watch("password") || "비밀번호일치안함";
                            },
                        })}
                        />
                        {errors.passwordConfirm && (
                        <div className="text-red-500 text-xs mt-1">
                            {errors.passwordConfirm.message}
                        </div>
                        )}
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className="font-semibold mr-2 text-sm text-gray-500 flex mb-2">이미지 업로드</label>
                    <input type='file'></input> 
                </div>
                <div className='mb-4'>
                    <button className='w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800'>정보수정</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ProfilePage