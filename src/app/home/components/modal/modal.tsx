import { ComponentProps } from "~/app/common/interfaces/component-props";

interface ModalProps extends ComponentProps { 
    show: string;
};

export const Modal = ({ children, show }: ModalProps) => {
    return (
        <>
            <div
                id="modal-main-container"
                className={
                    `
                        absolute
                        top-0
                        left-0
                        z-50
                        w-full
                        min-h-screen
                        backdrop-blur-sm
                        ${show}
                        items-center
                        justify-center
                        animate
                    `
                }
            >
                {children}
            </div>
        </>
    );
}


