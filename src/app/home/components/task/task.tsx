import { makeDeleteTask } from "~/@core/main/factories/usecases/task/delete-task";
import { PenIcon, TrashIcon } from "~/app/common/components/icon";

interface TaskProps {
    id: number;
    title: string;
    description: string;
    finishAt: string;
}

export default function Task({ id, title, description, finishAt }: TaskProps) {
    const deleteTask = makeDeleteTask();

    const handleDelete = async () => {
        await deleteTask.run(id);
        
        window.location.reload();
    }

    const handleEdit = () => {
        alert("edited!")
    }

    return (
        <div className='p-4 border-4 border-white rounded-lg bg-slate-900 drop-shadow-xl transition-all hover:-translate-y-1 cursor-pointer'>
            <div 
                id="actions"
                className="absolute bottom-0 right-0 p-1 flex gap-2"
            >
                <TrashIcon width={14} height={14} onClick={handleDelete} />
                <PenIcon widht={14} height={14} onClick={handleEdit} />
            </div>
            <h4 className='text-white text-lg'>{title}</h4>
            <p className='text-gray-200 text-sm'>{description}</p>
            <time className='text-xs'>{finishAt}</time>
        </div>
    );
}