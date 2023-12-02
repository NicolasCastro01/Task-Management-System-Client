import { ComponentProps } from "~/app/common/interfaces/component-props";

interface DescriptionProps extends ComponentProps {}

export default function Description({ children }: DescriptionProps) {
    return(
        <>
            <p className='text-gray-200 text-sm'>{children}</p>
        </>
    );
}