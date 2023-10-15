'use client';

import { Auth } from 'aws-amplify';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const VerifyEmailForm = () => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const [code, setCode] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isSuccessCodeSent, setIsSuccessCodeSent] = useState<boolean>(false);

  useEffect(() => {
    let username = searchParams.get('username') || '' as any;

    if(username) {
      setUsername(username);
    }
  }, [searchParams])

  /* Handlers */
  const handleChangeCode = (evt: any) => {
    setCode(evt.target.value);
  }

  const handleConfirmCode = async(evt: any) => {
    evt.preventDefault();
    try {
      const response = await Auth.confirmSignUp(username, code);

      if (response) {
        router.push('/login');
      }

    } catch(error: any) {
      console.error(error);
      setErrorMsg(error.toString());
    }
  }

  const handleResendCode = async() => {
    try {
      const response = await Auth.resendSignUp(username);

      if(response) {
        setIsSuccessCodeSent(true);
      }

    } catch(error: any) {
      console.error(error);
      setErrorMsg(error.toString());
    }
  }

  return (
    <>
      <h4 className="text-md font-normal leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Enter the confirmation code being sent to your email.
      </h4>
      <form
        onSubmit={handleConfirmCode}
        className="space-y-4 md:space-y-6 mt-6">
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Code
          </label>
          <input
            type="text"
            name="code"
            value={code}
            onChange={handleChangeCode}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="132456"
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
            Verify
        </button>
        <p
          className="text-sm font-light text-gray-500 dark:text-gray-400">
          Didnt receive the code?
          <button
            type="button"
            onClick={handleResendCode}
            className="font-medium text-primary-600 dark:text-primary-500 ml-2">
              Resend code
          </button>
          { isSuccessCodeSent &&
            <span
              className="text-base text-green-500">
              Successfully sent new code.
            </span> }
        </p>
        <p
          className="text-sm font-light text-gray-500 dark:text-gray-400 mt-0">
          Already confirmed?
          <a
            href="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2">
              Log in
          </a>
        </p>
      </form>
    </>
  )
}

export default VerifyEmailForm;