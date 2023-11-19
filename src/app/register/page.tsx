'use client';
import { useRouter } from 'next/navigation';
import { ButtonTag } from '../common/components/button';
import { InputLabelTag } from '../common/components/input-label';

export default function Register() {
  const router = useRouter();

  const handleSubmit = () => {
    alert("Signned!")
  }

  const handleLoginButton = () => {
    return router.push('/login');
  }

  return (
    <main className="bg-slate-900 text-slate-300 flex w-full min-h-screen flex-col items-center justify-center">
      <div className="flex justify-center items-center">
        <div id="register-container" className="bg-slate-600 rounded-xl w-96 flex items-center justify-center flex-col p-4 shadow-2xl">
          <h1 className="font-bold">TM | Register</h1>
          <div id="inputs-container" className="flex flex-col items-center justify-center h-max w-max mt-6 gap-2">
            <InputLabelTag 
              id='first-name'
              label='First name'
              type='text'
            />
            <InputLabelTag 
              id='last-name'
              label='Last name'
              type='text'
            />
            <InputLabelTag 
              id='email'
              label='Email'
              type='email'
            />
            <InputLabelTag 
              id="password"
              label="Password"
              type="password"
            />
            <InputLabelTag 
              id="password-again"
              label="Confirm password"
              type="password"
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
              />  
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
