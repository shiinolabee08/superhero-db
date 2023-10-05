import LoginForm from '../../components/forms/LoginForm';
import { Auth } from 'aws-amplify';

export default function LoginPage() {

  const handleLogin = async(username: string, password: string) => {
    try {
      const user = await Auth.signIn(username, password);
    } catch(error) {
      console.error('Login error', error);
    }
  }

  return (
    <LoginForm login={handleLogin}/>
  )
}