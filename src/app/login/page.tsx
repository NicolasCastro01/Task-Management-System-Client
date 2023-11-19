'use client';
import { useRouter } from 'next/navigation';
import { ButtonTag } from '../common/components/button';
import { InputLabelTag } from '../common/components/input-label';

export default function Login() {
  const router = useRouter();

  const handleSubmit = () => {
    alert("Signned!")
  }

  const handleRegisterButton = () => {
    return router.push('/register');
  }

  return (
    <main className="bg-slate-900 text-slate-300 flex w-full min-h-screen flex-col items-center justify-center">
      <div className="flex justify-center items-center">
        <div id="login-container" className="bg-slate-600 rounded-xl w-96 flex items-center justify-center flex-col p-4 shadow-2xl">
          <h1 className="font-bold">TM | Login</h1>
          <div id="inputs-container" className="flex flex-col items-center justify-center h-max w-max mt-6 gap-2">
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
              />  
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
