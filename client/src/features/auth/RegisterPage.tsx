import React, { useEffect } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, ref, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { Rega } from './authType';
import type { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { registration } from './authSlice';

const schema = object().shape({
  firstName: string().required('Необходимо указать имя'),
  secondName: string().required('Необходимо указать  фамилию'),
  telephone: string().required('Необходимо указать  телефон'),
  email: string().required('Необходимо указать электронную почту'),
  password: string()
    .required('Необходимо указать пароль')
    .min(3, 'Пароль должен быть более 8 символов')
    .max(25, 'Пароль должен быть не более 25 символов'),
  cpassword: string()
    .required('Необходимо подтвердить пароль')
    .min(3, 'Пароль должен быть более 8 символов')
    .max(25, 'Пароль должен быть не более 25 символов')
    .oneOf([ref('password')], 'Пароли не совпадают'),
});

function RegisterPage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Rega>({ resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {user,error} = useSelector((store: RootState) => store.auth);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const submit: SubmitHandler<Rega> = (data) => {
    dispatch(registration(data));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white shadow-md rounded px-9 pt-6 pb-9 mb-4"
      >
        <div>{error}</div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Фамилия*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register('secondName')}
          />
          <span>{errors.secondName?.message}</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login">
            Имя*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register('firstName')}
          />
          <span>{errors.firstName?.message}</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Отчество
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="patronymic"
            type="text"
            {...register('patronymic')}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Телефон*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telephone"
            type="tel"
            maxLength={11}
            minLength={6}
            {...register('telephone')}
          />
          <span>{errors.telephone?.message}</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Email*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            {...register('email')}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Пароль*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            {...register('password')}
          />
          <span>{errors.password?.message}</span>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Подтвердите пароль*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            {...register('cpassword')}
          />
          <span>{errors.cpassword?.message}</span>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
