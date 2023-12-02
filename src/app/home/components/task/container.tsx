import { ComponentProps } from "~/app/common/interfaces/component-props";

interface ContainerProps extends ComponentProps {};

export default function Task({ children }: ContainerProps) {

    return (
        <div className='p-4 border-4 border-white rounded-lg bg-slate-900 drop-shadow-xl transition-all hover:-translate-y-1 cursor-pointer'>
            {children}
        </div>
    );
}