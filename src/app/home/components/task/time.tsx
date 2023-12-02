import { ComponentProps } from "~/app/common/interfaces/component-props";

interface TimeProps extends ComponentProps {}

export default function Time({ children }: TimeProps) {
    return(
        <>
            <time className='text-xs'>{children}</time>
        </>
    );
}