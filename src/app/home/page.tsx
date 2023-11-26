'use client';
import React, { useEffect, useState } from 'react';
import { TaskProps, UserData } from '~/@core/contracts/services/auth/auth';
import { ButtonTag } from '../common/components/button';
import { ModalTaskTag } from './components/modal-task';
import { makeLoadTasks } from '~/@core/main/factories/usecases/task/load-tasks';
import { TaskTag } from './components/task';
import { ListTaskTag } from './components/list-task';

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [userTasks, setUserTasks] = useState<TaskProps[]>([]);
  const loadTasksService = makeLoadTasks();

  const getUser = () => {
    const userRaw = localStorage.getItem('user');
    if (!userRaw) {
      window.location.href = "/login";
      return;
    }

    const user = JSON.parse(userRaw);
    setUser(user);
  }

  const getTasks = async () => {
    const tasks = await loadTasksService.run();
    setUserTasks(tasks);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getTasks();
  }, [showModal == false]);

  return (
    <>
      <ModalTaskTag show={showModal} onClose={handleClose} />
      <header className='bg-slate-900 text-slate-300 flex items-center justify-end w-full h-12 px-8 drop-shadow-lg'>
        <nav className='flex items-center gap-4'>
          <h3>{(user?.first_name || 'Username') + ' ' + user?.last_name }</h3>
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
          <ListTaskTag tasks={userTasks} />
        </section>
      </main>
    </>
  );
}
