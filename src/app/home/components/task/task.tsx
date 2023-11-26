interface TaskProps {
    title: string;
    description: string;
    finishAt: string;
}

export default function Task({ index, title, description, finishAt }: TaskProps) {
    return (
        <div className='p-4 border-4 border-white rounded-lg bg-slate-900 drop-shadow-xl transition-all hover:-translate-y-3 cursor-pointer'>
            <h4 className='text-white text-lg'>{title}</h4>
            <p className='text-gray-200 text-sm'>{description}</p>
            <time className='text-xs'>{finishAt}</time>
        </div>
    );
}