import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { RootState, useAppDispatch } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { Login } from './authType';
import { object, string } from 'yup';
import { login } from './authSlice';

const schema = object().shape({
  email: string().required('Необходимо указать электронную почту'),
  password: string()
    .required('Необходимо указать пароль')
    .min(3, 'Пароль должен быть более 8 символов')
    .max(25, 'Пароль должен быть не более 25 символов'),
});

function LoginPage():JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({ resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {user,error} = useSelector((store: RootState) => store.auth);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const submit: SubmitHandler<Login> = (data) => {
    dispatch(login(data));
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs mx-auto mt-5">
        <form onSubmit={handleSubmit(submit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div>{error}</div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              {...register('email')}
            />
            <span>{errors.email?.message}</span>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Пароль
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register('password')}
            />
            <span>{errors.password?.message}</span>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Войти
            </button>
            <a href='/auth/registration' className="text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Регистрация</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage