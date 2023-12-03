import { StatusAPIResponse, TaskAPIResponse, TaskPropsAPIResponse } from "~/@core/contracts/services/auth/auth";
import { TaskCard } from "../task";
import { makeDeleteTask } from "~/@core/main/factories/usecases/task/delete-task";
import React, { useEffect, useState } from "react";
import { CheckBoxCheckedIcon, CheckBoxDefaultIcon, PenIcon, TrashIcon } from "~/app/common/components/icon";
import { ModalTaskEditTag } from "../modal-task-edit";
import { EditTaskProps } from "~/@core/contracts/services/task/task";
import { ButtonTag } from "~/app/common/components/button";
import { makeCompleteTask } from "~/@core/main/factories/usecases/task/complete-task";

interface ListTaskProps {
  tasks: TaskAPIResponse[];
  getTasks: () => void;
}

export default function ListTask({ tasks, getTasks }: ListTaskProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<number[]>([]);
  const [taskToBeEdit, setTaskToBeEdit] = useState<EditTaskProps>({
    id: 0,
    title: '',
    description: '',
    finishAt: new Date()
  });
  const deleteTask = makeDeleteTask();
  const completeTask = makeCompleteTask();

  const handleDelete = async (id: number) => {
    await deleteTask.run(id);

    getTasks();
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const handleEdit = (task: EditTaskProps) => {
    setTaskToBeEdit(task);
    setShowModal(true);
  }

  const handleIsDone = async (id: number) => {
    setIsDone(prevState => ([...prevState, id]));
    
    await completeTask.run(id);
  }

  const handleCheckBox = (id: number, status: StatusAPIResponse) => {
    const index = isDone.findIndex(taskId => taskId === id) === -1 ? false : true;

    if (!index && status.props.description !== "completed") {
      return <CheckBoxDefaultIcon width={18} height={18} onClick={() => handleIsDone(id)} />;
    }

    return <CheckBoxCheckedIcon width={18} height={18} />;
  }

  const handlePenEdit = (task: TaskPropsAPIResponse, id: number, status: StatusAPIResponse) => {
    if (status.props.description === "completed") {
      return;
    }

    return <PenIcon width={14} height={14} onClick={() => handleEdit({ ...task, finishAt: new Date(task.finishAt), id })} />;
  }

  useEffect(() => {
    getTasks();
  }, [showModal === false])

  return (
    <>
      <ModalTaskEditTag title="Edit Task" getTasks={getTasks} task={taskToBeEdit} show={showModal} onClose={handleClose} />
      <article id='tasks' className='mt-10 flex rounded-lg flex-wrap gap-4'>
        {(tasks.length || 0) > 0 ? tasks.map(({ id, props: task }, index) => {
          return (
            <React.Fragment key={index}>
              <TaskCard.Container>
                <TaskCard.Title>{task.title}</TaskCard.Title>
                <TaskCard.Description>{task.description}</TaskCard.Description>
                <TaskCard.Time>{task.finishAt}</TaskCard.Time>

                <TaskCard.Actions>
                  <TrashIcon width={14} height={14} onClick={() => handleDelete(id)} />
                  {handlePenEdit(task, id, task.status)}
                  {handleCheckBox(id, task.status)}
                </TaskCard.Actions>
              </TaskCard.Container>
            </React.Fragment>
          );
        }) : "No tasks."}
      </article>
    </>
  );
}