import axios from 'axios';
import { useCallback, useState } from 'react';
import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Button, Input } from "@/components/Index"

export async function getServerSideProps(context: NextPageContext): Promise<{ redirect: { destination: string; permanent: boolean; }; props?: undefined; } | { props: {}; redirect?: undefined; }> {
  
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Auth = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      });

      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      });

      login();
    } catch (error) {
        console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div>
      <div>
        <div>
          <div>
            <h2>
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div>
              <Input
                id="email"
                type="email"
                label="Email address"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)} 
                />
              {variant === 'register' && (
                <Input
                  id="name"
                  type="text"
                  label="Full name"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)} 
                />
              )}
              <Input
                type="password" 
                id="password" 
                label="Password" 
                value={password}
                onChange={(e: any) => setPassword(e.target.value)} 
              />
            </div>
            <Button onClick={variant === 'login' ? login : register}>
              {variant === 'login' ? 'Login' : 'Sign up'}
            </Button>
            {/* <div>
              <div onClick={() => signIn('google', { callbackUrl: '/profiles' })}>
                <FcGoogle size={32} />
              </div>
              <div onClick={() => signIn('github', { callbackUrl: '/profiles' })}>
                <FaGithub size={32} />
              </div>
            </div> */}
            <p>
              {variant === 'login' ? 'First time using Next PIM?' : 'Already have an account?'}
              <span onClick={toggleVariant}>
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;