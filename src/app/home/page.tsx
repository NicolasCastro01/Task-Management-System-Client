'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { TaskAPIResponse, UserData } from '~/@core/contracts/services/auth/auth';
import { ButtonTag } from '../common/components/button';
import { makeLoadTasks } from '~/@core/main/factories/usecases/task/load-tasks';
import { ListTaskTag } from './components/list-task';
import { ModalTaskCreateTag } from './components/modal-task-create';

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [userTasks, setUserTasks] = useState<TaskAPIResponse[]>([]);
  const loadTasksService = makeLoadTasks();
  const router = useRouter();

  const getUser = () => {
    const userRaw = localStorage.getItem('user');
    if (!userRaw) {
      router.push('/login');
      return;
    }

    const user = JSON.parse(userRaw);
    setUser(user);
  }

  const getTasks = async () => {

    try {
      const tasks = await loadTasksService.run();

      setUserTasks(tasks);
    } catch (error) {
      alert("Sessão expirada.");

      localStorage.clear();
      router.push("/login");
    }
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const logout = () => {
    localStorage.clear();
    router.push('/login');
  }

  useEffect(() => {
    getUser();
    getTasks();
  }, []);

  return (
    <>
      <ModalTaskCreateTag title='Create Task' getTasks={getTasks} show={showModal} onClose={handleClose} />
      <header className='bg-slate-900 text-slate-300 flex items-center justify-end w-full h-12 px-8 drop-shadow-lg'>
        <nav className='flex items-center gap-4'>
          <h3>{(user?.first_name || 'Username') + ' ' + user?.last_name}</h3>
          <ul id='user-menu'>
            <li className='border-2 border-white rounded-lg px-4 hover:cursor-pointer hover:bg-white hover:text-slate-900 transition-all' onClick={logout}>Logout</li>
          </ul>
        </nav>
      </header>
      <main className='bg-slate-700 text-slate-300 flex w-full justify-center min-h-screen'>
        <section className='mt-10 w-10/12'>
          <div
            id="breadcrump"
            className="flex justify-between items-center"
          >
            <h1>Home</h1>
            <ButtonTag
              label="New task"
              className="bg-green-600 text-white drop-shadow-xl hover:drop-shadow-md transition-all"
              onClick={() => setShowModal(true)}
            />
          </div>
          <ListTaskTag getTasks={getTasks} tasks={userTasks} />
        </section>
      </main>
    </>
  );
}
