import LoginForm from '../../components/forms/LoginForm';

export default async function LoginPage() {
  return (
    <div>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Account Log in
      </h1>
      <LoginForm/>
    </div>
  )
}