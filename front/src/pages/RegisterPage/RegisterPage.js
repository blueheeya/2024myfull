// import { Axios } from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';

function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        watch,
      } = useForm();
    // const onSubmit = data => console.log(data);
    function onSubmit({email,name, password}){
        const body = {
            email,name, password
        };
    // Axios.post(url,body);
    toast('🦄 회원가입을 성공하였습니다.', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
    console.log(body);
    reset();  
    }
    const userEmail = {
    required: {
        value: true,
        message: "이메일은 필수 입니다.",
    },
    pattern: {
        value: /^\S+@\S+$/i,
        message: "이메일을 입력",
    },
    minLength: {
        value: 6,
        message: "최소 6자입니다.",
    },
    };
    const userName = {
    required: {
        value: true,
        message: "이름은 필수 입니다.",
    },
    minLength: {
        value: 2,
        message: "최소 2자입니다.",
    },
    };
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
            <h2 className='font-semibold text-center mb-4'>회원가입</h2>
            <hr className='mb-4' />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label htmlFor="email" className="font-semibold mr-2 text-sm text-gray-500 flex mb-2">이메일</label>
                    <input
                        type="text"
                        id="email"
                        className="border w-full rounded-md p-2 text-xs"
                        placeholder="이메일을 입력하세요"
                        {...register("email", userEmail)}
                        />
                        {errors.email && (
                        <div className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                        </div>
                        )}
                </div>
                <div className='mb-4'>
                    <label htmlFor="name" className="font-semibold mr-2 text-sm text-gray-500 flex mb-2">이메일</label>
                    <input
                        type="text"
                        id="name"
                        className="border w-full rounded-md p-2 text-xs"
                        placeholder="이름을 입력하세요"
                        {...register("name", userName)}
                        />
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
                    <button className='w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800'>회원가입</button>
                </div>
                <div className='text-center text-sm'>아이디가 있다면 <a href='./login' className="text-slate-500">로그인</a>하세요</div>
            </form>
            
        </div>
    </section>
  )
}

export default RegisterPage