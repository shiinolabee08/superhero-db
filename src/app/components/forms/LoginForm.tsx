'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import { CognitoErrorExceptionEnum } from '@/app/enums/cognito-error-exception.enum';

const LoginForm = () => {

  const initialState = {
    username: '',
    password: '',
  }

  const router = useRouter();

  const [formData, setFormData] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState('');

  const usernameRef = useRef(null as any);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  /* Handlers */
  const handleSubmit = async(evt: any) => {
    evt.preventDefault();

    try {
      await Auth.signIn(formData.username, formData.password);

      handleRedirectSuccess();
      handleResetForm();

    } catch (error: any) {
      console.error('Login failed', error);
      setErrorMsg(error.toString());

      if(error.name == CognitoErrorExceptionEnum.USER_NOT_CONFIRMED) {
        const queryParams = { username: formData.username };
        const queryString = new URLSearchParams(queryParams).toString();

        router.push(`/verify-email?username=${queryString}`);
      }
    }
  }

  const handleChange = (evt: any) => {
    const { name, value } = evt.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleResetForm = () => {
    setFormData(initialState);
  }

  const handleRedirectSuccess = () => {
    router.push('/');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 md:space-y-6 mt-6">
      <div>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your username
        </label>
        <input
          type="text"
          name="username"
          ref={usernameRef}
          value={formData.username}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="johndoe08"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
      </div>
      <div className="block my-4">
        { errorMsg &&
          <span
            className="text-red-500 text-base mt-4">
            {errorMsg}
          </span> }
      </div>
      <button
        type="submit"
        className="w-full text-white bg-[#2c66bb] hover:bg-primary-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Log in
      </button>
      <p
        className="text-sm font-light text-gray-500 dark:text-gray-400">
        Dont have an account yet?
        <Link
          href="/signup"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2">
            Sign up
        </Link>
      </p>
    </form>
  )
}

export default LoginForm;