import { ComponentProps } from "~/app/common/interfaces/component-props";

interface TitleProps extends ComponentProps {}

export default function Title({ children }: TitleProps) {
    return(
        <>
            <h4 className='text-white text-lg'>{children}</h4>
        </>
    );
}