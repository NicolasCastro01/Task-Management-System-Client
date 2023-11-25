'use client';
import { useRouter } from 'next/navigation';
import { ButtonTag } from '../common/components/button';
import { InputLabelTag } from '../common/components/input-label';
import { ChangeEvent, useEffect, useState } from 'react';
import { UserCredentialsRequestDTO } from '~/@core/dtos/Request/auth/auth';
import { makeSendUserCredential } from '~/@core/main/factories/usecases/auth/send-user-credential';
import { makeLoadUser } from '~/@core/main/factories/usecases/auth';
import { UserData } from '~/@core/contracts/services/auth/auth';

export default function Home() {
    const [user, setUser] = useState<UserData | null>(null);

    const getUser = () => {
        console.log("passou aqui.");

        const userRaw = localStorage.getItem('user');
        if (!userRaw) {
            window.location.href = "/login";
            return;
        }

        const user = JSON.parse(userRaw);
        setUser(user);
    }

    const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <header className='bg-slate-900 text-slate-300 flex items-center justify-end w-full h-12 px-8 drop-shadow-lg'>
                <nav className='flex items-center gap-4'>
                    <h3>{user?.email}</h3>
                    <ul id='user-menu'>
                        <li className='border-2 border-white rounded-lg px-4 hover:cursor-pointer hover:bg-white hover:text-slate-900 transition-all' onClick={logout}>Logout</li>
                    </ul>
                </nav>
            </header>
            <main className='bg-slate-700 text-slate-300 flex w-full justify-center min-h-screen'>
                <section className='mt-10 w-10/12'>
                    <h1>Home</h1>
                    <article id='tasks' className='mt-10 flex rounded-lg gap-4'>
                        {(user?.tasks.length || 0) > 0 ? user?.tasks.map(task => {
                            return (
                                <>
                                    <div className='p-4 border-4 border-white rounded-lg bg-slate-900 drop-shadow-xl transition-all hover:-translate-y-3'>
                                        <h4 className='text-white text-lg'>{task.props.title}</h4>
                                        <p className='text-gray-200 text-sm'>{task.props.description}</p>
                                        <time className='text-xs'>{task.props.finish_at}</time>
                                    </div>
                                </>
                            );
                        }) : "No tasks."}
                    </article>
                </section>
            </main>
        </>
    );
}
