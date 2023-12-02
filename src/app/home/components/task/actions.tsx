import { ComponentProps } from "~/app/common/interfaces/component-props";

interface ActionsProps extends ComponentProps {}

export default function Actions({ children }: ActionsProps) {
    return(
        <>
            <div 
                id="actions"
                className="absolute bottom-0 right-0 p-1 flex gap-2"
            >
                {children}
            </div>
        </>
    );
}