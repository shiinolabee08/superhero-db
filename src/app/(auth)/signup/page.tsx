import SignupForm from '@/app/components/forms/SignupForm';

export default function SignupPage() {
  return (
    <div>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Create your account
      </h1>
      <SignupForm/>
    </div>
  )

}