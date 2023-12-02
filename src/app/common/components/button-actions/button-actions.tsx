import { ComponentProps } from "../../interfaces/component-props";

interface ButtonActionsProps extends ComponentProps {};

export default function ButtonActions({ children }: ButtonActionsProps) {
    return (
        <>
            <section id="actions" className="flex items-center justify-between gap-4">
                {children}
            </section>
        </>
    );
}