import { ComponentProps } from "~/app/common/interfaces/component-props";

interface ContainerProps extends ComponentProps { };

export default function Container({ children }: ContainerProps) {
  return (
    <>
      <div
        id="modal-container"
        className="
          flex
          flex-col
          justify-center
          w-4/6
          h-80
          rounded-xl
          border-4
          border-white
          bg-slate-900
          transition-all
          p-4
          gap-4
        "
      >
        {children}
      </div>
    </>
  );
}