'use client';
import { useRouter } from 'next/navigation';
import { ButtonTag } from '../common/components/button';
import { InputLabelTag } from '../common/components/input-label';
import { ChangeEvent, useState } from 'react';
import { UserCredentialsRequestDTO } from '~/@core/dtos/Request/auth/auth';
import { makeSendUserCredential } from '~/@core/main/factories/usecases/auth/send-user-credential';
import { makeLoadUser } from '~/@core/main/factories/usecases/auth';

export default function Login() {
  const [state, setState] = useState<UserCredentialsRequestDTO>({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const sendUserCredential = makeSendUserCredential();
  const loadUserInfos = makeLoadUser();

  const handleSubmit = async (): Promise<void> => {
    setLoading(true);

    if(isEmail(state.email)) {
      const token = await sendUserCredential.run(state);
      localStorage.setItem('token', token.auth_token);
      const user = await loadUserInfos.run(token.auth_token);
      localStorage.setItem('user', JSON.stringify(user));
      
      window.location.href = "/home";
      setLoading(false);
      return;
    }
    
    alert("E-mail invalid.");
  }

  function isEmail(email: string): boolean {
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email);
  }

  const handleState = (key: string, value: string): void => {
    setState(() => ({
      ...state,
      [key]: value
    }));
  }

  const handleRegisterButton = () => {
    return router.push('/register');
  }

  return (
    <>
    <main className="bg-slate-900 text-slate-300 flex w-full min-h-screen flex-col items-center justify-center">
      <div className="flex justify-center items-center">
        <div id="login-container" className="bg-slate-600 rounded-xl w-96 flex items-center justify-center flex-col p-4 shadow-2xl">
          <h1 className="font-bold"><span className="text-slate-900">TM |</span> Login</h1>
          <div id="inputs-container" className="flex flex-col items-center justify-center h-max w-max mt-6 gap-2">
            <InputLabelTag
              id='email'
              label='Email'
              type='email'
              value={state.email}
              onInput={(event: ChangeEvent<HTMLInputElement>) => handleState("email", event.target.value)}
            />
            <InputLabelTag
              id="password"
              label="Password"
              type="password"
              value={state.password}
              onInput={(event: ChangeEvent<HTMLInputElement>) => handleState("password", event.target.value)}
            />

            <div id="actions" className='flex mt-6 gap-2'>
              <ButtonTag
                label="To register"
                className='
                  bg-transparent
                  shadow-none
                '
                onClick={handleRegisterButton}
              />
              <ButtonTag
                label="SignIn"
                onClick={handleSubmit}
                disabled={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
