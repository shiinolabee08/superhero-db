import SignupForm from '@/app/components/forms/SignupForm';
import { Auth } from 'aws-amplify';

export default function SignupPage() {

  const handleSignup = async ({ username, password, email, address }: any) => {
    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          address,
        }
      });

      console.log('Sign-up successful', user);
    } catch (error) {
      console.error('Error signing up: ', error);
    }
  }

  return (
    <SignupForm signup={handleSignup}/>
  )

}