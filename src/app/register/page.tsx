'use client';
import { useRouter } from 'next/navigation';
import { ButtonTag } from '../common/components/button';
import { InputLabelTag } from '../common/components/input-label';
import { ChangeEvent, useState } from 'react';
import { UserCredentialsRegisterRequestDTO } from '~/@core/dtos/Request/auth/auth';
import { makeSendUserCredentialsToRegister } from '~/@core/main/factories/usecases/auth';

export default function Register() {
  const [state, setState] = useState<UserCredentialsRegisterRequestDTO>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const router = useRouter();
  const sendUserCredentialsToRegister = makeSendUserCredentialsToRegister();

  async function handleSubmit() {
    if(isEmail(state.email) && isPasswordValid(state.password)) {
      await sendUserCredentialsToRegister.run(state);

      window.location.href = "/login";
      return
    }

    alert("Invalid credentials.");
  }

  const handleState = (key: string, value: string): void => {
    setState(() => ({
      ...state,
      [key]: value
    }));
  }

  const handleLoginButton = () => {
    return router.push('/login');
  }

  function isEmail(email: string): boolean {
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email);
  }

  function isPasswordValid(password: string): boolean {
    return password.length >= 6;
  }

  return (
    <main className="bg-slate-900 text-slate-300 flex w-full min-h-screen flex-col items-center justify-center">
      <div className="flex justify-center items-center">
        <div id="register-container" className="bg-slate-600 rounded-xl w-96 flex items-center justify-center flex-col p-4 shadow-2xl">
          <h1 className="font-bold"><span className="text-slate-900">TM |</span> Register</h1>
          <div id="inputs-container" className="flex flex-col items-center justify-center h-max w-max mt-6 gap-2">
            <InputLabelTag 
              id='first-name'
              label='First name'
              value={state.firstName}
              onInput={(event: ChangeEvent<HTMLInputElement>) => handleState("firstName", event.target.value)}
            />
            <InputLabelTag 
              id='last-name'
              label='Last name'
              value={state.lastName}
              onInput={(event: ChangeEvent<HTMLInputElement>) => handleState("lastName", event.target.value)}
            />
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
                label="To login"
                className='
                  bg-transparent
                  shadow-none
                '
                onClick={handleLoginButton}
              />  
              <ButtonTag
                label="SignUp"
                onClick={handleSubmit}
                className="bg-slate-900"
              />  
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
