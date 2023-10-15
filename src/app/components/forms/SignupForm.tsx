'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';

const SignupForm = () => {

  const initialState =  {
    username : '',
    password : '',
    email: '',
    confirm: '',
  }

  const router = useRouter();

  const [newUser, setNewUser] = useState(initialState as any);
  const emailRef = useRef(null as any);
  const [errorMsg, setErrorMsg] = useState('');


  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  /* Handlers */
  const handleSubmit = async(evt: any) => {
    evt.preventDefault();

    const { username, password, email } = newUser;

    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        }
      });

      handleRedirectSuccess();
      handleResetForm();

      console.log('Sign-up successful', user);
    } catch (error: any) {
      console.error('Error signing up: ', error);
      setErrorMsg(error.toString())
    }
  }

  const handleResetForm = () => {
    setNewUser(initialState);
  }

  const handleRedirectSuccess = () => {
    const queryParams = { username: newUser.username };
    const queryString = new URLSearchParams(queryParams).toString();
    router.push(`/verify-email?${queryString}`);
  }

  const handleChange = (evt: any) => {
    const { name, value } = evt.target;

    setNewUser({
      ...newUser,
      [name]: value
    });
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 md:space-y-6 mt-6">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          name="email"
          ref={emailRef}
          value={newUser.email}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="johndoe08@gmail.com"
        />
      </div>
      <div>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your username
        </label>
        <input
          type="text"
          name="username"
          value={newUser.username}
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
          value={newUser.password}
          onChange={handleChange}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Confirm Password
        </label>
        <input
          type="password"
          name="confirm"
          value={newUser.confirm}
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
          Submit
      </button>
      <p
        className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?
        <Link
          href="/login"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2">
            Log in
        </Link>
      </p>
    </form>
  )

}

export default SignupForm;